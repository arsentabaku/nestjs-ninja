import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateMessageDto } from '../dto/create-message.dto';
import { MessagesService } from '../services';

@Controller('messages')
export class MessagesController {
  constructor(public messagesService: MessagesService) {}

  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
  }

  @Get('/:id')
  async getMessage(@Param() params: any) {
    const message = await this.messagesService.findOne(params.id);

    if (!message) {
      throw new NotFoundException('Message not found');
    }

    return message;
  }
}
