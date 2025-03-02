import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
    public getHello(): string {
        return "Woow";
    }

    public introduce(): string {
        return 'My name is Dog';
    }

    public modifyDetail(): string {
        return 'Successfully modified';
    }

}
