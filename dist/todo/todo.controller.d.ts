import { Request, Response } from 'express';
import { Todo } from './entities/todo.entity';
import { GetPaginatedTodoDto } from '../todo/dto/GetPaginatedTodoDto';
import { AddTodoDto } from '../todo/dto/add-todo.tdo';
export declare class TodoController {
    private todos;
    getTodos(request: Request, response: Response): void;
    getTodoById(id: string): Todo;
    getTodo(mesQueryParams: GetPaginatedTodoDto): Todo[];
    AddTodos(newTodo: AddTodoDto): {
        message: string;
        todo: AddTodoDto;
    };
    deleteTodo(id: any): {
        message: string;
        count: number;
    };
    modifierTodo(id: any, newtodo: Partial<Todo>): Todo;
}
