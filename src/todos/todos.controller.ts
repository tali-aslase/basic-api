import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { TodosService } from "./todos.service";
import { CreateTodoDto } from "./dtos/create-todo.dto";

@Controller('todos')
export class TodosController{

    constructor(private readonly todoService: TodosService){}

    @Post()
    createTodo(@Body() dto: CreateTodoDto ){
        return this.todoService.create(dto);
    }

    @Get()
    getAll(){
        return this.todoService.getAllTodo();
    }

    @Put(':id')
    async  update(@Param('id', ParseIntPipe) id: number, @Body() dto: CreateTodoDto){
        return await this.todoService.update(id, dto);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return await this.todoService.deleteOne(id);
    }

    @Get(':id')
    async GetOne(@Param('id', ParseIntPipe) id: number){
        return await this.todoService.getOne(id);
    }
}