import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'; // ini yang benar!
import { RandomUsersService } from './random-users.service';
import { RandomUsersController } from './random-users.controller';

@Module({
  imports: [HttpModule], // tambahkan di sini
  controllers: [RandomUsersController],
  providers: [RandomUsersService],
})
export class RandomUsersModule {}
