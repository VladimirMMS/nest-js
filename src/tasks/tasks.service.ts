import { Injectable } from '@nestjs/common';
import {Task} from './interfaces/Task';


@Injectable()
export class TasksService {

    tasks: Task[]= [
        {
            id:1,
            title:'Testing',
            description:'Sometihng that i need to do',
            done:false
        },
        {
            id:2,
            title:'Testing',
            description:'Sometihng that i need to do',
            done:false
        },
        {
            id:3,
            title:'Testing',
            description:'Sometihng that i need to do',
            done:false
        }
    ]

    getTasks () {
        return this.tasks
    }

    getTask (id) {
        return this.tasks.find(task => task.id === id)
    }

}
