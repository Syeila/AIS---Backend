import { Controller, Get, Query } from '@nestjs/common';
import { RandomUsersService } from './random-users.service';

@Controller('random-users')
export class RandomUsersController {
  constructor(private readonly randomUsersService: RandomUsersService) {}

  @Get()
  async getUsers(
    @Query('results') results: number = 10,
    @Query('page') page: number = 1,
  ) {
    return this.randomUsersService.getRandomUsers(results, page);
  }
}
