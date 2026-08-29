import type {
  TenantContext,
  UserRole,
} from '@kloyya/types';

const ROLE_LEVEL: Record<UserRole, number> = {
  viewer: 10,
  member: 20,
  admin: 30,
  owner: 40,
};

export function hasMinimumRole(
  context: TenantContext,
  minimumRole: UserRole,
): boolean {
  return ROLE_LEVEL[context.role] >= ROLE_LEVEL[minimumRole];
}

export function assertSameOrganization(
  context: TenantContext,
  organizationId: string,
): void {
  if (context.organizationId !== organizationId) {
    throw new Error('Organization access denied');
  }
}

export function assertSameWorkspace(
  context: TenantContext,
  workspaceId: string,
): void {
  if (context.workspaceId !== workspaceId) {
    throw new Error('Workspace access denied');
  }
}

export function assertRole(
  context: TenantContext,
  minimumRole: UserRole,
): void {
  if (!hasMinimumRole(context, minimumRole)) {
    throw new Error('Insufficient permissions');
  }
}
