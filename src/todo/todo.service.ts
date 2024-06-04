import { Injectable, NotFoundException } from '@nestjs/common';
import { AddTodoDto } from './dto/Add-Todo.Dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
     todos:Todo[]=[];
    getTodos():Todo[]{
        return this.todos;


    }
    
    addTodo(newTodo:AddTodoDto):Todo{
        
        const {name, description} = newTodo;
        let id;
        if (this.todos.length) {
             id = this.todos[this.todos.length - 1].id + 1;
        } else {
             id = 1;
        }
        return {
            id,
            name,
            description,
            createAT:new Date()};
        
    
    }
    
    getTodoById(id:number):Todo{
        const todo = this.todos.find((actualTodo) => actualTodo.id === +id);
        if (todo) {
            return todo;
        }
        throw new NotFoundException(`le todo d'id ${id} n'existe pas`);

    }
deleteTodo(id: number){
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
updateTodo(id:number,newtodo:Partial<Todo>){

    const todo = this.getTodoById(id);
    todo.description = newtodo.description ? newtodo.description : todo.description;
    todo.name = newtodo.name ? newtodo.name : todo.name;

    return todo;


}

   

    }


