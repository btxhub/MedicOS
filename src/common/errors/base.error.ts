export class BaseError extends Error {
  readonly code: string;
  readonly details?: unknown;

  constructor(message: string, code = 'GENERIC_ERROR', details?: unknown) {
    super(message);
    this.code = code;
    this.details = details;
  }
}
