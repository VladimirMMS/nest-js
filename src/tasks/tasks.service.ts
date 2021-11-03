import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './interfaces/Task';

@Injectable()
export class TasksService {
    constructor(@InjectModel('task') private taskModel:Model<Task>) {}

    getTasks () {
        return this.taskModel.find()
    }

    getTask (id) {
        return this.taskModel.findById(id)
    }

    createTask(task) {
        const newTask = new this.taskModel({
            title : task.title,
            description: task.description,
            done: task.done
        })
        return newTask
    }
}
