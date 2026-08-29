import { describe, expect, it } from 'vitest';

import {
  assertSameOrganization,
  assertSameWorkspace,
  assertRole,
} from '@kloyya/tenancy';

import type { TenantContext } from '@kloyya/types';

const tenantA: TenantContext = {
  userId: '11111111-1111-4111-8111-111111111111',
  organizationId: '22222222-2222-4222-8222-222222222222',
  workspaceId: '33333333-3333-4333-8333-333333333333',
  role: 'member',
};

describe('Multi-tenancy security', () => {
  it('allows access to the same organization', () => {
    expect(() =>
      assertSameOrganization(
        tenantA,
        tenantA.organizationId,
      ),
    ).not.toThrow();
  });

  it('blocks cross-organization access', () => {
    expect(() =>
      assertSameOrganization(
        tenantA,
        '99999999-9999-4999-8999-999999999999',
      ),
    ).toThrow('Organization access denied');
  });

  it('allows access to the same workspace', () => {
    expect(() =>
      assertSameWorkspace(
        tenantA,
        tenantA.workspaceId,
      ),
    ).not.toThrow();
  });

  it('blocks cross-workspace access', () => {
    expect(() =>
      assertSameWorkspace(
        tenantA,
        '88888888-8888-4888-8888-888888888888',
      ),
    ).toThrow('Workspace access denied');
  });

  it('allows members to perform member operations', () => {
    expect(() =>
      assertRole(tenantA, 'member'),
    ).not.toThrow();
  });

  it('blocks members from admin operations', () => {
    expect(() =>
      assertRole(tenantA, 'admin'),
    ).toThrow('Insufficient permissions');
  });

  it('blocks members from owner operations', () => {
    expect(() =>
      assertRole(tenantA, 'owner'),
    ).toThrow('Insufficient permissions');
  });
});
