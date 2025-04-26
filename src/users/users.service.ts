import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User, Company } from './users.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: '12qwer', username: 'Imron', password: bcrypt.hashSync('123', 10), telp: '081234567890' },
    { id: '321rewq', username: 'Juli', password: bcrypt.hashSync('123', 10), email: 'Sammy@mail.com', telp: '0987654321' },
  ];

  private companies: Company[] = [
    { id: 'trew098', user_id: '12qwer', company_code: 'SPI', company_name: 'Samudera' },
    { id: 'poiuyt1234', user_id: '321rewq', company_code: 'PIC', company_name: 'Samudera' },
  ];

  async findByUsername(username: string) {
    return this.users.find(u => u.username === username);
  }

  getJoinedData() {
    return this.users.map(user => {
      const company = this.companies.find(c => c.user_id === user.id);
      return {
        user_id: user.id,
        company_id: company?.id,
        name: user.username,
        email: user.email ?? null,
        telp: user.telp,
        company_code: company?.company_code ?? null,
        company_name: company?.company_name ?? null,
      };
    });
  }
}