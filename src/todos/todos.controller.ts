import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { TodosService } from "./todos.service";
import { CreateTodoDto } from "./dtos/create-todo.dto";

@Controller('todos')
export class TodosController{

    constructor(private readonly todoService: TodosService){}

    @Post()
    async create(@Body() dto: CreateTodoDto ){
        return this.todoService.createTodo(dto);
    }

    @Get()
    async getAll(){
        return await this.todoService.getAllTodo();
    }

    @Put(':id')
    async  update(@Param('id', ParseIntPipe) id: number, @Body() dto: CreateTodoDto){
        return await this.todoService.updateTodo(id, dto);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return await this.todoService.deleteTodo(id);
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number){
        return await this.todoService.getTodo(id);
    }
}