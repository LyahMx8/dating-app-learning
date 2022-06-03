import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessage } from './dtos/create-message.dto';

@Controller('dates')
export class DatesController {
  @Get()
  listMessages() {
    return 'This action returns all cats';
  }

  @Post()
  createMessage(@Body() body:CreateMessage) {
    console.log(body);
  }

  @Get('/:id')
  uniqueMessages(@Param('id') id:number) {
    console.log(id);
  }
}
