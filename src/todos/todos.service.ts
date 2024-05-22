import { HttpException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Todo } from "./todo.entity";
import { Repository } from "typeorm";
import { CreateTodoDto } from "./dtos/create-todo.dto";

@Injectable()
export class TodosService{

    constructor(@InjectRepository(Todo) private readonly todoRepository: Repository<Todo>){}

    async create(dto: CreateTodoDto ){
        const todo = this.todoRepository.create(dto);
        return await this.todoRepository.save(todo);
    }

    async getAllTodo(){
        return this.todoRepository.find();
    } 

    async update(id: number , body: CreateTodoDto){

        const todo = await this.todoRepository.findOne({where: {id} });
        if (!todo){
            throw new NotFoundException(`Record does nor exists with id: ${id}`);
        }
        Object.assign(todo, body);
        return await this.todoRepository.save(todo);
    }

    async deleteOne(id: number){

        const todo = await this.todoRepository.findOne({where: {id} });
        if (!todo){
            throw new NotFoundException(`Record does nor exists with id: ${id}`);
        }

        return await this.todoRepository.remove(todo);
    }

    async getOne(id: number){

        const todo = await this.todoRepository.findOne({where: {id} });
        if (!todo){
            throw new NotFoundException(`Record does nor exists with id: ${id}`);
        }

        return todo;
    }
}