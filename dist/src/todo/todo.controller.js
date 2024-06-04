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
const get_all_todo_dto_1 = require("./dto/get-all-todo.dto");
const Add_Todo_Dto_1 = require("./dto/Add-Todo.Dto");
const todo_service_1 = require("./todo.service");
let TodoController = class TodoController {
    constructor(todoService) {
        this.todoService = todoService;
    }
    getTodoById(id) {
        return this.todoService.getTodoById(+id);
    }
    getTodo(mesQueryParams) {
        console.log(mesQueryParams);
        return this.todoService.getTodos();
    }
    AddTodos(newTodo) {
        console.log('ok');
        this.todoService.addTodo(newTodo);
    }
    deleteTodo(id) {
        return this.todoService.deleteTodo(+id);
    }
    modifierTodo(id, newtodo) {
        return this.todoService.updateTodo(+id, newtodo);
    }
};
exports.TodoController = TodoController;
__decorate([
    (0, common_1.Get)('/detaill/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "getTodoById", null);
__decorate([
    (0, common_1.Get)('/search'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_all_todo_dto_1.GetAllTodoDto]),
    __metadata("design:returntype", void 0)
], TodoController.prototype, "getTodo", null);
__decorate([
    (0, common_1.Post)(''),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Add_Todo_Dto_1.AddTodoDto]),
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
    (0, common_1.Controller)('/todo'),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoController);
//# sourceMappingURL=todo.controller.js.map