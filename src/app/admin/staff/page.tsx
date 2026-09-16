'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import {
  ShieldCheck,
  KeyRound,
  Eye,
  EyeOff,
  UserCheck,
  UserPlus,
  Loader2,
  Lock,
  Mail,
  User as UserIcon,
  CheckCircle2,
  AlertCircle,
  Users
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface StaffUser {
  id: string;
  name: string;
  email: string;
  role: string;
  phone?: string | null;
  status: string;
  createdAt: string;
  staffProfile?: {
    department: string;
  } | null;
}

export default function AdminStaffAndSecurityPage() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<'security' | 'team'>('security');

  // Password Change Form State
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);

  // Staff Management State
  const [staffList, setStaffList] = useState<StaffUser[]>([]);
  const [isLoadingStaff, setIsLoadingStaff] = useState(true);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isCreatingStaff, setIsCreatingStaff] = useState(false);
  const [newStaffForm, setNewStaffForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'STAFF',
    department: 'Academics',
    phone: '',
  });

  const fetchStaff = async () => {
    try {
      setIsLoadingStaff(true);
      const res = await fetch('/api/admin/staff');
      const data = await res.json();
      if (data.success) {
        setStaffList(data.staff);
      }
    } catch {
      toast({
        title: 'Error',
        description: 'Failed to load team members.',
        variant: 'destructive',
      });
    } finally {
      setIsLoadingStaff(false);
    }
  };

  useEffect(() => {
    fetchStaff();
  }, []);

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!currentPassword || !newPassword || !confirmPassword) {
      toast({
        title: 'Validation Error',
        description: 'Please fill in all password fields.',
        variant: 'destructive',
      });
      return;
    }

    if (newPassword.length < 8) {
      toast({
        title: 'Weak Password',
        description: 'New password must be at least 8 characters long.',
        variant: 'destructive',
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      toast({
        title: 'Mismatch',
        description: 'New password and confirmation do not match.',
        variant: 'destructive',
      });
      return;
    }

    setIsUpdatingPassword(true);
    try {
      const res = await fetch('/api/admin/profile/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ currentPassword, newPassword, confirmPassword }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to update password');
      }

      toast({
        title: 'Password Updated!',
        description: 'Your admin password has been successfully updated.',
      });

      // Clear form
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : 'An error occurred';
      toast({
        title: 'Update Failed',
        description: errorMsg,
        variant: 'destructive',
      });
    } finally {
      setIsUpdatingPassword(false);
    }
  };

  const handleCreateStaff = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsCreatingStaff(true);

    try {
      const res = await fetch('/api/admin/staff', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newStaffForm),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to create user');
      }

      toast({
        title: 'Account Created',
        description: `${newStaffForm.name} has been added successfully.`,
      });

      setIsAddOpen(false);
      setNewStaffForm({
        name: '',
        email: '',
        password: '',
        role: 'STAFF',
        department: 'Academics',
        phone: '',
      });
      fetchStaff();
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : 'Failed to add user';
      toast({
        title: 'Creation Failed',
        description: errorMsg,
        variant: 'destructive',
      });
    } finally {
      setIsCreatingStaff(false);
    }
  };

  return (
    <div className="space-y-8 font-body">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-2">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Admin Control & Security</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-headline tracking-tight">
            Security & Team Access
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Change your default admin password and manage staff portal permissions.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="inline-flex p-1 bg-slate-100 rounded-2xl border border-slate-200">
          <button
            onClick={() => setActiveTab('security')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'security'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <KeyRound className="h-4 w-4 text-primary" />
            <span>Change Password</span>
          </button>
          <button
            onClick={() => setActiveTab('team')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'team'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Users className="h-4 w-4 text-primary" />
            <span>Team & Roles ({staffList.length})</span>
          </button>
        </div>
      </div>

      {/* TAB 1: Password & Security */}
      {activeTab === 'security' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Change Password Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-3 pb-6 border-b border-slate-100 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Lock className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900 font-headline">
                    Update Admin Password
                  </h2>
                  <p className="text-xs text-slate-500">
                    Replace default credentials with your customized strong password
                  </p>
                </div>
              </div>

              <form onSubmit={handlePasswordSubmit} className="space-y-6">
                {/* Current Password */}
                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Current Password
                  </Label>
                  <div className="relative">
                    <Input
                      type={showCurrent ? 'text' : 'password'}
                      placeholder="Enter existing admin password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      required
                      className="rounded-xl border-slate-200 pr-10 focus:border-primary text-sm h-11"
                    />
                    <button
                      type="button"
                      onClick={() => setShowCurrent(!showCurrent)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      {showCurrent ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                {/* New Password */}
                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    New Password
                  </Label>
                  <div className="relative">
                    <Input
                      type={showNew ? 'text' : 'password'}
                      placeholder="Enter strong new password (min. 8 characters)"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                      className="rounded-xl border-slate-200 pr-10 focus:border-primary text-sm h-11"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNew(!showNew)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      {showNew ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  {newPassword && (
                    <div className="flex items-center gap-2 pt-1 text-xs">
                      {newPassword.length >= 8 ? (
                        <span className="text-emerald-600 flex items-center gap-1 font-medium">
                          <CheckCircle2 className="h-3.5 w-3.5" /> Length requirement met (8+ chars)
                        </span>
                      ) : (
                        <span className="text-amber-600 flex items-center gap-1 font-medium">
                          <AlertCircle className="h-3.5 w-3.5" /> Needs at least 8 characters
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Confirm New Password
                  </Label>
                  <div className="relative">
                    <Input
                      type={showConfirm ? 'text' : 'password'}
                      placeholder="Re-type your new password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className="rounded-xl border-slate-200 pr-10 focus:border-primary text-sm h-11"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirm(!showConfirm)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  {confirmPassword && (
                    <div className="flex items-center gap-2 pt-1 text-xs">
                      {newPassword === confirmPassword ? (
                        <span className="text-emerald-600 flex items-center gap-1 font-medium">
                          <CheckCircle2 className="h-3.5 w-3.5" /> Passwords match
                        </span>
                      ) : (
                        <span className="text-rose-600 flex items-center gap-1 font-medium">
                          <AlertCircle className="h-3.5 w-3.5" /> Passwords do not match yet
                        </span>
                      )}
                    </div>
                  )}
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={isUpdatingPassword}
                    className="w-full sm:w-auto px-8 h-11 rounded-xl font-bold bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/20"
                  >
                    {isUpdatingPassword ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Saving Changes...
                      </>
                    ) : (
                      <>
                        <KeyRound className="h-4 w-4 mr-2" />
                        Update Password
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Security Best Practices Card */}
          <div className="space-y-6">
            <div className="bg-slate-50/80 rounded-2xl border border-slate-200/80 p-6">
              <h3 className="text-sm font-bold text-slate-900 font-headline mb-3 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                Security Standards
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-600 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  <span>Passwords are hashed using <strong>bcrypt with 10 salt rounds</strong> before saving to MySQL.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  <span>Never share Super Admin credentials across insecure communication channels.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  <span>Passwords can also be set via terminal using <code>npm run admin:set-password</code>.</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50/50 rounded-2xl border border-blue-100 p-6">
              <h3 className="text-sm font-bold text-slate-900 font-headline mb-2 flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                Default Admin Fallback
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                If no admin exists in a freshly deployed database, the system will use credentials defined in <code>.env.local</code>:
              </p>
              <div className="p-3 bg-white rounded-xl border border-blue-100 font-mono text-[11px] text-slate-700 space-y-1">
                <div>ADMIN_EMAIL=&quot;admin@itlcindia.com&quot;</div>
                <div>ADMIN_PASSWORD=&quot;Admin@123&quot;</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Staff & Team Accounts */}
      {activeTab === 'team' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900 font-headline">
                Registered Team Members
              </h2>
              <p className="text-xs text-slate-500">
                Staff accounts with administrative portal access
              </p>
            </div>

            {/* Add Staff Dialog */}
            <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
              <DialogTrigger asChild>
                <Button className="rounded-xl font-bold bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/20 gap-2">
                  <UserPlus className="h-4 w-4" />
                  <span>Add Team Member</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md rounded-2xl font-body">
                <DialogHeader>
                  <DialogTitle className="font-headline font-black text-xl text-slate-900">
                    Create New Account
                  </DialogTitle>
                  <DialogDescription className="text-xs text-slate-500">
                    Grant administrative portal access to an ITLC staff member.
                  </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleCreateStaff} className="space-y-4 pt-2">
                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-slate-700">Full Name</Label>
                    <Input
                      placeholder="e.g. Ramesh Kumar"
                      value={newStaffForm.name}
                      onChange={(e) => setNewStaffForm({ ...newStaffForm, name: e.target.value })}
                      required
                      className="rounded-xl border-slate-200 h-10 text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-slate-700">Official Email</Label>
                    <Input
                      type="email"
                      placeholder="e.g. ramesh@itlcindia.com"
                      value={newStaffForm.email}
                      onChange={(e) => setNewStaffForm({ ...newStaffForm, email: e.target.value })}
                      required
                      className="rounded-xl border-slate-200 h-10 text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <Label className="text-xs font-bold text-slate-700">Role</Label>
                      <select
                        value={newStaffForm.role}
                        onChange={(e) => setNewStaffForm({ ...newStaffForm, role: e.target.value })}
                        className="w-full h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 focus:outline-hidden focus:border-primary"
                      >
                        <option value="STAFF">Staff</option>
                        <option value="SUPER_ADMIN">Super Admin</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <Label className="text-xs font-bold text-slate-700">Department</Label>
                      <select
                        value={newStaffForm.department}
                        onChange={(e) => setNewStaffForm({ ...newStaffForm, department: e.target.value })}
                        className="w-full h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 focus:outline-hidden focus:border-primary"
                      >
                        <option value="Academics">Academics</option>
                        <option value="HR & Hiring">HR & Hiring</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Management">Management</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-slate-700">Temporary Password</Label>
                    <Input
                      type="password"
                      placeholder="Min. 8 characters"
                      value={newStaffForm.password}
                      onChange={(e) => setNewStaffForm({ ...newStaffForm, password: e.target.value })}
                      required
                      className="rounded-xl border-slate-200 h-10 text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-xs font-bold text-slate-700">Phone (Optional)</Label>
                    <Input
                      placeholder="+91 9876543210"
                      value={newStaffForm.phone}
                      onChange={(e) => setNewStaffForm({ ...newStaffForm, phone: e.target.value })}
                      className="rounded-xl border-slate-200 h-10 text-sm"
                    />
                  </div>

                  <div className="pt-2 flex justify-end gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsAddOpen(false)}
                      className="rounded-xl font-bold"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      disabled={isCreatingStaff}
                      className="rounded-xl font-bold bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/20"
                    >
                      {isCreatingStaff ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Creating...
                        </>
                      ) : (
                        'Create Account'
                      )}
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {/* Staff Table / Cards */}
          <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs">
            {isLoadingStaff ? (
              <div className="py-16 text-center text-slate-400 flex flex-col items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin mb-3 text-primary" />
                <p className="text-sm">Loading staff members...</p>
              </div>
            ) : staffList.length === 0 ? (
              <div className="py-16 text-center text-slate-400">
                <Users className="h-10 w-10 mx-auto mb-3 opacity-40" />
                <p className="font-bold text-slate-700">No staff members found</p>
                <p className="text-xs text-slate-400 mt-1">Add your first team member using the button above.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm font-body">
                  <thead className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-600 uppercase tracking-wider">
                    <tr>
                      <th className="py-3.5 px-6">Name & Email</th>
                      <th className="py-3.5 px-6">Role</th>
                      <th className="py-3.5 px-6">Department</th>
                      <th className="py-3.5 px-6">Status</th>
                      <th className="py-3.5 px-6">Joined Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {staffList.map((user) => (
                      <tr key={user.id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary font-bold flex items-center justify-center text-sm">
                              {user.name.charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <p className="font-bold text-slate-900">{user.name}</p>
                              <p className="text-xs text-slate-500">{user.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold ${
                              user.role === 'SUPER_ADMIN'
                                ? 'bg-purple-100 text-purple-800'
                                : 'bg-blue-100 text-blue-800'
                            }`}
                          >
                            <UserCheck className="h-3 w-3" />
                            {user.role.replace('_', ' ')}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-slate-600 text-xs font-medium">
                          {user.staffProfile?.department || 'General'}
                        </td>
                        <td className="py-4 px-6">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-bold bg-emerald-100 text-emerald-800">
                            {user.status}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-xs text-slate-500">
                          {new Date(user.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
