import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  async (data: never, context: ExecutionContext) => {
    const request = await context.switchToHttp().getRequest();
    return request.currentUser;
  },
);
