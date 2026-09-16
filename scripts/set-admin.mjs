import dotenv from 'dotenv';
import mariadb from 'mariadb';
import bcrypt from 'bcryptjs';
import path from 'path';

// Load .env.local first, fallback to .env
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const dbUrl = process.env.DATABASE_URL;

console.log('\n======================================================');
console.log('   ITLC INDIA - Super Admin Password Management CLI   ');
console.log('======================================================\n');

if (!dbUrl) {
  console.error('❌ ERROR: DATABASE_URL is not set in .env.local!');
  process.exit(1);
}

// Arguments: node scripts/set-admin.mjs [email] [password]
const args = process.argv.slice(2);
const email = (args[0] || process.env.ADMIN_EMAIL || 'admin@itlcindia.com').trim().toLowerCase();
const password = args[1] || process.env.ADMIN_PASSWORD;

if (!password) {
  console.error('❌ ERROR: Password is required.');
  console.log('Usage:');
  console.log('   npm run admin:set-password -- <email> <new_password>');
  console.log('   or define ADMIN_PASSWORD="YourPassword" in .env.local and run:');
  console.log('   npm run admin:set-password\n');
  process.exit(1);
}

if (password.length < 8) {
  console.error('❌ ERROR: Password must be at least 8 characters long.\n');
  process.exit(1);
}

function parseDbUrl(urlStr) {
  const normalized = urlStr.replace(/^mysql:/i, 'http:').replace(/^mariadb:/i, 'http:');
  const parsed = new URL(normalized);
  const config = {
    host: parsed.hostname,
    port: parsed.port ? parseInt(parsed.port, 10) : 3306,
    user: decodeURIComponent(parsed.username || 'root'),
    password: decodeURIComponent(parsed.password || ''),
    database: parsed.pathname.replace(/^\//, '') || 'itlc_db',
    connectTimeout: 10000,
  };

  if (parsed.searchParams.get('ssl') === 'true' || parsed.searchParams.has('sslaccept')) {
    config.ssl = { rejectUnauthorized: false };
  }
  return config;
}

async function setAdminPassword() {
  let conn;
  try {
    const dbConfig = parseDbUrl(dbUrl);
    const pool = mariadb.createPool(dbConfig);
    conn = await pool.getConnection();

    console.log(`🔐 Hashing password with bcrypt (10 rounds)...`);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Check if user exists
    const [existing] = await conn.query('SELECT id, name, role FROM `User` WHERE email = ?', [email]);

    if (existing) {
      console.log(`👤 Found existing user account (${existing.name}, Role: ${existing.role}).`);
      await conn.query(
        'UPDATE `User` SET password = ?, role = "SUPER_ADMIN", status = "ACTIVE", updatedAt = NOW() WHERE email = ?',
        [hashedPassword, email]
      );
      console.log(`✅ SUCCESS: Password updated successfully for: ${email}`);
    } else {
      console.log(`👤 No user found with email ${email}. Creating new Super Admin...`);
      // Generate a cuid-like id
      const newId = 'admin_' + Math.random().toString(36).substring(2, 12);
      await conn.query(
        'INSERT INTO `User` (id, name, email, password, role, status, createdAt, updatedAt) VALUES (?, ?, ?, ?, "SUPER_ADMIN", "ACTIVE", NOW(), NOW())',
        [newId, 'ITLC Super Admin', email, hashedPassword]
      );
      console.log(`✅ SUCCESS: Super Admin account created successfully for: ${email}`);
    }

    console.log('\n------------------------------------------------------');
    console.log(`   Admin Email:    ${email}`);
    console.log(`   Status:         ACTIVE (SUPER_ADMIN)`);
    console.log(`   Login URL:      http://localhost:3000/admin/login`);
    console.log('------------------------------------------------------\n');

    await conn.end();
    await pool.end();
    process.exit(0);
  } catch (err) {
    console.error('\n❌ FAILED TO UPDATE ADMIN PASSWORD:');
    console.error(`   ${err.message}\n`);
    if (conn) await conn.end();
    process.exit(1);
  }
}

setAdminPassword();
