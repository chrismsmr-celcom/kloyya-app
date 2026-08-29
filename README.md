# Kloyya

Kloyya is an AI workspace intelligence platform designed to connect,
understand, retrieve and act on knowledge distributed across a user's
work tools.

## Architecture

Kloyya is built around:

- Next.js
- TypeScript
- PostgreSQL
- Supabase
- pgvector
- Composio
- Qwen
- DeepSeek
- Claude
- Inngest / Trigger.dev
- OpenTelemetry
- Sentry

## Core principles

### Multi-tenancy first

Every tenant-specific operation must be scoped to:

- organization
- workspace
- authenticated user
- role

### Security by default

External data is considered untrusted.

The LLM never directly controls privileged operations.

Sensitive actions require authorization and, when required,
human approval.

### Evidence-based AI

Kloyya separates:

1. Knowledge acquisition
2. Retrieval
3. Evidence
4. Decision
5. Action

The model must not invent evidence.

## Development

Install dependencies:

```bash
pnpm install
