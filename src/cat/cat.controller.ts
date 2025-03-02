import { Controller, Get } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { CatService } from './cat.service';


//localhostr:3000/cat/greet
@Controller('cat')
export class CatController {
    constructor(private readonly catService: CatService) { }

    @Get()
    public getHello(): string {
        return this.catService.getHello();
    }

    @Get('greet')
    public introduce(): string {
        return this.catService.introduce();
    }
}


