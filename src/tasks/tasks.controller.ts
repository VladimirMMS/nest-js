import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { CreateTaskDto } from './dto/createdTask.dto';


@Controller('tasks')
export class TasksController {
    
    @Get()
    getTasks(): {hello:string} {
        return {"hello":"string"}
    }
    
    @Post()
    createTasks(@Body() task:CreateTaskDto): string {
        console.log(task)
        return 'Task created'
    }

    @Delete(':id')
    deleteTasks(@Param('id') id): string {
        console.log(id)
        return 'Task deleted'
    }

    @Put(':id')
    updateTasks(@Body() task:CreateTaskDto, @Param('id') id): string {
        console.log(task)
        console.log(id)
        return 'Task updated'
    }

}
