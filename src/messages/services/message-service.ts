import { Injectable } from '@nestjs/common';
import { MessagesRepository } from '../repositories';

@Injectable()
export class MessagesService {
  constructor(public messagesRepo: MessagesRepository) {}

  async findOne(id: string) {
    return await this.messagesRepo.findOne(id);
  }

  async findAll() {
    return await this.messagesRepo.findAll();
  }

  async create(messageContent: string) {
    return await this.messagesRepo.create(messageContent);
  }
}
