import { Injectable } from '@nestjs/common';
import { Task, ETaskStatus } from './tasks.model';
import { v4 as uuidv4 } from 'uuid';
import { createTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }

    getTaskById(id: string): Task {
        return this.tasks.find( task => task.id === id );
    }

    createTask(createTaskDto: createTaskDto): Task {
        const {title, description} = createTaskDto;

        const task: Task = {
            id: uuidv4(),
            title, 
            description,
            status: ETaskStatus.OPEN
        };

        this.tasks.push(task);
        return task;
    }

    deleteTaskById(id: string): Task {

        const selectedTask: Task = this.tasks.find( task => task.id === id );

        // this.tasks.forEach((task) => {
        //     if (task.id === selectedTask.id) {
        //         this.tasks.splice(selectedTaskId, 1);
        //         return selectedTask;
        //     }
        // });

        const filteredTasks: Task[] = this.tasks.filter(task => task.id !== id);
        this.tasks = filteredTasks;
        return selectedTask;

    }
}
