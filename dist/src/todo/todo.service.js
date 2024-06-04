"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
let TodoService = class TodoService {
    constructor() {
        this.todos = [];
    }
    getTodos() {
        return this.todos;
    }
    addTodo(newTodo) {
        const { name, description } = newTodo;
        let id;
        if (this.todos.length) {
            id = this.todos[this.todos.length - 1].id + 1;
        }
        else {
            id = 1;
        }
        return {
            id,
            name,
            description,
            createAT: new Date()
        };
    }
    getTodoById(id) {
        const todo = this.todos.find((actualTodo) => actualTodo.id === +id);
        if (todo) {
            return todo;
        }
        throw new common_1.NotFoundException(`le todo d'id ${id} n'existe pas`);
    }
    deleteTodo(id) {
        const index = this.todos.findIndex((todo) => todo.id === +id);
        if (index >= 0) {
            this.todos.splice(index, 1);
        }
        else {
            throw new common_1.NotFoundException(`le todo d'id ${id} n'existe pas `);
        }
        return {
            message: `le todo d'id ${id} à supprimer avec suucés `,
            count: 1
        };
    }
    updateTodo(id, newtodo) {
        const todo = this.getTodoById(id);
        todo.description = newtodo.description ? newtodo.description : todo.description;
        todo.name = newtodo.name ? newtodo.name : todo.name;
        return todo;
    }
};
exports.TodoService = TodoService;
exports.TodoService = TodoService = __decorate([
    (0, common_1.Injectable)()
], TodoService);
//# sourceMappingURL=todo.service.js.map