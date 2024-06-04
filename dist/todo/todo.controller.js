"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
const common_1 = require("@nestjs/common");
const todo_entity_1 = require("./entities/todo.entity");
const GetPaginatedTodoDto_1 = require("../todo/dto/GetPaginatedTodoDto");
const add_todo_tdo_1 = require("../todo/dto/add-todo.tdo");
let TodoController = class TodoController {
    constructor() {
        this.todos = [];
    }
    getTodos(request, response) {
        console.log('recupere la liste');
        response.status(200).json(this.todos);
    }
    getTodoById(id) {
        const todo = this.todos.find((actualTodo) => actualTodo.id === +id);
        if (todo) {
            return todo;
        }
        throw new common_1.NotFoundException(`le todo d'id ${id} n'existe pas`);
    }
    getTodo(mesQueryParams) {
        console.log(mesQueryParams);
        return this.todos;
    }
    AddTodos(newTodo) {
        const todo = new todo_entity_1.Todo;
        const { name, description } = newTodo;
        todo.name = name;
        todo.description = description;
        if (this.todos.length) {
            todo.id = this.todos[this.todos.length - 1].id + 1;
        }
        else {
            todo.id = 1;
        }
        console.log(todo);
        this.todos.push(todo);
        return { message: 'Todo added', todo: newTodo };
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
    modifierTodo(id, newtodo) {
        const todo = this.getTodoById(id);
        todo.description = newtodo.description ? newtodo.description : todo.description;
        todo.name = newtodo.name ? newtodo.name : todo.name;
        return todo;
    }
};
exports.TodoController = TodoController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "getTodos", null);
__decorate([
    (0, common_1.Get)('/detaill/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "getTodoById", null);
__decorate([
    (0, common_1.Get)('/search'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [GetPaginatedTodoDto_1.GetPaginatedTodoDto]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "getTodo", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_todo_tdo_1.AddTodoDto]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "AddTodos", null);
__decorate([
    (0, common_1.Delete)('/deleter/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "deleteTodo", null);
__decorate([
    (0, common_1.Put)('/modifier/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "modifierTodo", null);
exports.TodoController = TodoController = __decorate([
    (0, common_1.Controller)('/todo')
], TodoController);
//# sourceMappingURL=todo.controller.js.map