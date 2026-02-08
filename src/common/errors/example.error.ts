import { BaseError } from './base.error';

export class ExampleError extends BaseError {
  constructor(message = 'Example error') {
    super(message, 'EXAMPLE_ERROR');
  }
}
