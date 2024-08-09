import {
  UseInterceptors,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';

export class SerializeInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    handler: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    console.log('Context before handler', context);

    return handler.handle().pipe(
      map((data: any) => {
        // Run something before esp is send
        console.log('Running before ersp is send DATA', data);
      }),
    );
  }
}
