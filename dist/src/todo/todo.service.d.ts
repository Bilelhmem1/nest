import { AddTodoDto } from './dto/Add-Todo.Dto';
import { Todo } from './entities/todo.entity';
export declare class TodoService {
    todos: Todo[];
    getTodos(): Todo[];
    addTodo(newTodo: AddTodoDto): Todo;
    getTodoById(id: number): Todo;
    deleteTodo(id: number): {
        message: string;
        count: number;
    };
    updateTodo(id: number, newtodo: Partial<Todo>): Todo;
}
