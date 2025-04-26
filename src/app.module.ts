import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { EcommerceModule } from './ecommerce/ecommerce.module';
import { RandomUsersModule } from './random-users/random-users.module';

@Module({
  imports: [AuthModule, UsersModule, EcommerceModule, RandomUsersModule],
})
export class AppModule {}