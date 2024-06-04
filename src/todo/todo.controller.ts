import {Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query, Req, Res} from '@nestjs/common';
import {Request, Response} from 'express';
import {Todo} from './entities/todo.entity'; // Ensure this is the correct path
import {count} from 'console';
import {GetAllTodoDto} from './dto/get-all-todo.dto';
import {AddTodoDto} from './dto/Add-Todo.Dto';
import { TodoService } from './todo.service';


@Controller('/todo')
export class TodoController {
    
    constructor(private todoService:TodoService){
          
    }

   

    @Get('/detaill/:id')
    getTodoById(@Param('id') id: Number) {
        return this.todoService.getTodoById(+id); 
    }
    

    @Get('/search')
    getTodo(
        @Query() mesQueryParams: GetAllTodoDto,
    ) {
        console.log(mesQueryParams);
        return this.todoService.getTodos();
    }


    @Post('')
    AddTodos(@Body() newTodo: AddTodoDto) {
        console.log('ok')
        this.todoService.addTodo(newTodo);
    }

    //supprimer un todo par id
    @Delete('/deleter/:id')
    deleteTodo(@Param('id') id) {
        return    this.todoService.deleteTodo(+id);   
    }

    @Put('/modifier/:id')
    modifierTodo(@Param('id') id,
                 @Body() newtodo: Partial<AddTodoDto>) {
       return this.todoService.updateTodo(+id,newtodo);
    }
}

