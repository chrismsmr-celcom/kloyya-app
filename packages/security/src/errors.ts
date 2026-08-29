export class SecurityError extends Error {
  public readonly code: string;

  constructor(code: string, message: string) {
    super(message);

    this.name = 'SecurityError';
    this.code = code;
  }
}

export const SecurityErrorCode = {
  UNAUTHORIZED: 'UNAUTHORIZED',
  FORBIDDEN: 'FORBIDDEN',
  TENANT_MISMATCH: 'TENANT_MISMATCH',
  INVALID_INPUT: 'INVALID_INPUT',
  RATE_LIMITED: 'RATE_LIMITED',
  SECURITY_POLICY_VIOLATION: 'SECURITY_POLICY_VIOLATION',
} as const;
