export class User {
    id: string;
    username: string;
    password: string;
    email?: string;
    telp?: string;
  }
  
  export class Company {
    id: string;
    user_id: string;
    company_code: string;
    company_name: string;
  }