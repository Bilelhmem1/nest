import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetAllTodoDto } from './todo/dto/get-Alltodo.dto';
import { AddTodoDto } from './todo/dto/Add-Todo.Dto';
import { TodoService } from './todo/todo.service';


@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, TodoService],
})
export class AppModule {}
