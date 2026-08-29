import { z } from 'zod';

export const userRoleSchema = z.enum([
  'owner',
  'admin',
  'member',
  'viewer',
]);

export const tenantContextSchema = z.object({
  userId: z.string().uuid(),
  organizationId: z.string().uuid(),
  workspaceId: z.string().uuid(),
  role: userRoleSchema,
});

export type ValidatedTenantContext = z.infer<
  typeof tenantContextSchema
>;
