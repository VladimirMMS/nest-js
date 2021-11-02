import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { CreateTaskDto } from './dto/createdTask.dto';
import { Task } from './interfaces/Task';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private readonly taskService: TasksService) {}
    
    @Get()
    getTasks():Task[] {
        return this.taskService.getTasks()
    }

    @Get(':id')
    getTask(@Param('id') id):Task {
        return this.taskService.getTask(parseInt(id))
    }
    
    @Post()
    createTasks(@Body() task:CreateTaskDto): string {
        return 'Task created'
    }

    @Delete(':id')
    deleteTasks(@Param('id') id): string {
        return 'Task deleted'
    }

    @Put(':id')
    updateTasks(@Body() task:CreateTaskDto, @Param('id') id): string {
        return 'Task updated'
    }
}
