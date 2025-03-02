import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  public getDetails(): string {
    return 'Here are Zoo details'
  }
}
