import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RandomUsersService {
  constructor(private readonly httpService: HttpService) {}

  async getRandomUsers(results: number, page: number): Promise<any[]> {
    const url = `https://randomuser.me/api/?results=${results}&page=${page}`;

    const response: AxiosResponse = await firstValueFrom(
      this.httpService.get(url)
    );

    // manipulasi hasil di sini
    const data = response.data.results.map((item: any) => ({
      name: `${item.name.title}, ${item.name.first} ${item.name.last}`,
      location: `${item.location.street.number},${item.location.street.name}, ${item.location.city},${item.location.state} , ${item.location.country}`,
      email: item.email,
      age: item.registered.age,
      phone: item.phone,
      cell: item.cell,
      picture: [
        item.picture.large,
        item.picture.medium,
        item.picture.thumbnail,
      ],
    }));

    return data;
  }
}
