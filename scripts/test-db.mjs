import dotenv from 'dotenv';
import mariadb from 'mariadb';
import path from 'path';
import { fileURLToPath } from 'url';

// Load .env.local first, fallback to .env
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const dbUrl = process.env.DATABASE_URL;

console.log('\n======================================================');
console.log('   ITLC INDIA - Live MySQL Database Connectivity Test  ');
console.log('======================================================\n');

if (!dbUrl) {
  console.error('❌ ERROR: DATABASE_URL environment variable is not defined!');
  console.error('Please configure DATABASE_URL in your .env.local file.\n');
  process.exit(1);
}

function parseDbUrl(urlStr) {
  // Normalize schema for standard URL parser
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

const dbConfig = parseDbUrl(dbUrl);

console.log(`📡 Connecting to MySQL:`);
console.log(`   Host:     ${dbConfig.host}`);
console.log(`   Port:     ${dbConfig.port}`);
console.log(`   Database: ${dbConfig.database}`);
console.log(`   User:     ${dbConfig.user}`);
console.log(`   Password: ${dbConfig.password ? '******** (configured)' : '(none)'}`);
console.log('------------------------------------------------------\n');

async function runTest() {
  let conn;
  try {
    console.log('⏳ Attempting TCP connection to MySQL server...');
    const pool = mariadb.createPool(dbConfig);
    conn = await pool.getConnection();

    console.log('✅ SUCCESS: Connected to MySQL database successfully!\n');

    // Test simple query
    const [testResult] = await conn.query('SELECT 1 + 1 AS test, VERSION() as version');
    console.log(`📊 Database Version: ${testResult.version}`);

    // Check existing tables
    const tablesResult = await conn.query('SHOW TABLES');
    const tableKey = Object.keys(tablesResult[0] || {})[0];
    const existingTables = tablesResult.map((row) => row[tableKey]);

    const requiredModels = [
      'User',
      'StaffProfile',
      'Certificate',
      'StudentRegistration',
      'Product',
      'Job',
      'JobApplication',
      'ContactInquiry',
      'Blog',
      'GalleryItem',
      'PortfolioItem',
      'Testimonial',
    ];

    console.log(`\n📋 Database Schema Status (${existingTables.length} tables found):`);
    console.log('------------------------------------------------------');

    let allFound = true;
    for (const model of requiredModels) {
      // MySQL table names might match model name directly
      const exists = existingTables.some(
        (t) => t.toLowerCase() === model.toLowerCase()
      );

      if (exists) {
        try {
          const [countResult] = await conn.query(`SELECT COUNT(*) as count FROM \`${model}\``);
          console.log(`  ✅ ${model.padEnd(22)}: Ready (${countResult.count} records)`);
        } catch {
          console.log(`  ✅ ${model.padEnd(22)}: Ready`);
        }
      } else {
        console.log(`  ⚠️ ${model.padEnd(22)}: Missing (run 'npm run db:push' to create)`);
        allFound = false;
      }
    }

    console.log('------------------------------------------------------');

    if (allFound) {
      console.log('\n🎉 All 12 production models are created and ready for live operations!\n');
    } else {
      console.log('\n💡 Tip: To automatically create the missing tables on this database, run:');
      console.log('   npm run db:push\n');
    }

    await conn.end();
    await pool.end();
    process.exit(0);
  } catch (err) {
    console.error('\n❌ DATABASE CONNECTION FAILED:');
    console.error(`   Error Code:    ${err.code || 'UNKNOWN'}`);
    console.error(`   Error Message: ${err.message}\n`);

    console.log('🔍 TROUBLESHOOTING GUIDE:');
    console.log('1. If using Hostinger / cPanel:');
    console.log('   - Make sure you added your current IP to "Remote MySQL" whitelist in cPanel/hPanel.');
    console.log('   - Or enter "%" wildcard in Remote MySQL to allow connections from any host.');
    console.log('2. If using Localhost:');
    console.log('   - Ensure MySQL/XAMPP service is started on port 3306.');
    console.log('   - Check user "root" and password.');
    console.log('3. Password Special Characters:');
    console.log('   - If your password contains @, #, $, or %, encode it (e.g. @ is %40, # is %23).\n');

    if (conn) await conn.end();
    process.exit(1);
  }
}

runTest();
