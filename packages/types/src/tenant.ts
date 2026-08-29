export const USER_ROLES = [
  'owner',
  'admin',
  'member',
  'viewer',
] as const;

export type UserRole = (typeof USER_ROLES)[number];

export interface TenantContext {
  userId: string;
  organizationId: string;
  workspaceId: string;
  role: UserRole;
}
