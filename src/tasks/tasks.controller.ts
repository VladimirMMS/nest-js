import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { CreateTaskDto } from './dto/createdTask.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private readonly taskService: TasksService) {}
    
    @Get()
    getTasks() {
        return ""
    }

    @Get(':id')
    getTask(@Param('id') id) {
        return "return"
    }
    
    @Post()
    createTasks(@Body() task:CreateTaskDto) {
        return ""
    }

    // @Delete(':id')
    // deleteTasks(@Param('id') id): string {
    //     return 'Task deleted'
    // }

    // @Put(':id')
    // updateTasks(@Body() task:CreateTaskDto, @Param('id') id): string {
    //     return 'Task updated'
    // }
}
