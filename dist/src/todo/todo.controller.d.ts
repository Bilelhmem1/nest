import { Todo } from './entities/todo.entity';
import { GetAllTodoDto } from './dto/get-all-todo.dto';
import { AddTodoDto } from './dto/Add-Todo.Dto';
import { TodoService } from './todo.service';
export declare class TodoController {
    private todoService;
    constructor(todoService: TodoService);
    getTodoById(id: Number): Todo;
    getTodo(mesQueryParams: GetAllTodoDto): Todo[];
    AddTodos(newTodo: AddTodoDto): void;
    deleteTodo(id: any): {
        message: string;
        count: number;
    };
    modifierTodo(id: any, newtodo: Partial<AddTodoDto>): Todo;
}
