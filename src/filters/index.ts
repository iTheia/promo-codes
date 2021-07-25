import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    response.status(status).send({
      statusCode: status,
      ...(exception.getResponse() as Object),
    });
  }
}

export class StandardError extends HttpException {
  constructor(message: string, status: number = HttpStatus.BAD_REQUEST) {
    super({ error: true, message }, status);
  }
}
