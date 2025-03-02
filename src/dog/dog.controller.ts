import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { DogService } from './dog.service';


//localhostr:3000/dat/greet
@Controller('dog')
export class DogController {
    constructor(private readonly dogService: DogService) { }

    @Get()
    public getHello(): string {
        return this.dogService.getHello();
    }

    @Get('greet/:id')
    public introduce(@Param() params: any, @Query() query: any): string {
        console.log('params:', JSON.stringify(params));  // Use stringify to make it more readable
        console.log('query:', JSON.stringify(query));    // Same for query

        return this.dogService.introduce();
    }

    @Post('greet/:id')
    public modifyDetail(@Body() body: any): string {
        console.log('body:', body);
        return this.dogService.modifyDetail();
    }

}
