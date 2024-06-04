import {Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query, Req, Res} from '@nestjs/common';
import {Request, Response} from 'express';
import {Todo} from './entities/todo.entity'; // Ensure this is the correct path
import {count} from 'console';
import {GetAllTodoDto} from './dto/get-all-todo.dto';
import {AddTodoDto} from './dto/Add-Todo.Dto';


@Controller('/todo')
export class TodoController {
    private todos: Todo[] = [];


    @Get()
    getTodos(@Req() request: Request, @Res() response: Response) {
        console.log('recupere la liste');
        response.status(200).json(this.todos);
    }

    @Get('/detaill/:id')
    getTodoById(@Param('id') id: string) {

        const todo = this.todos.find((actualTodo) => actualTodo.id === +id);
        if (todo) {
            return todo;
        }
        throw new NotFoundException(`le todo d'id ${id} n'existe pas`);
    }

    @Get('/search')
    getTodo(
        @Query() mesQueryParams: GetAllTodoDto,
    ) {
        console.log(mesQueryParams);
        return this.todos;
    }


    @Post()
    AddTodos(@Body() newTodo: AddTodoDto) {
        const todo = new Todo
        const {name, description} = newTodo;
        todo.name = name;
        todo.description = description;
        if (this.todos.length) {
            todo.id = this.todos[this.todos.length - 1].id + 1;
        } else {
            todo.id = 1;
        }
        console.log(todo);
        this.todos.push(todo);
        return {message: 'Todo added', todo: newTodo};
    }

    //supprimer un todo par id
    @Delete('/deleter/:id')
    deleteTodo(@Param('id') id) {
        const index = this.todos.findIndex((todo) => todo.id === +id);
        //utliser la methode splice pour supprimer le todo chercher
        if (index >= 0) {
            this.todos.splice(index, 1);
        } else {
            throw new NotFoundException(`le todo d'id ${id} n'existe pas `)
        }
        return {
            message: `le todo d'id ${id} à supprimer avec suucés `,
            count: 1
        };
    }

    @Put('/modifier/:id')
    modifierTodo(@Param('id') id,
                 @Body() newtodo: Partial<Todo>) {
        const todo = this.getTodoById(id);
        todo.description = newtodo.description ? newtodo.description : todo.description;
        todo.name = newtodo.name ? newtodo.name : todo.name;

        return todo;

    }
}

