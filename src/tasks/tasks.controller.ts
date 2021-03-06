import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './tasks.model';
import { createTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService){}

    @Get()
    getAllTasks(): Task[] {
        return this.tasksService.getAllTasks();
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string ): Task {
        return this.tasksService.getTaskById(id);
    }

    // @Body('title') title: string,
    // @Body('description') description: string
    @Post()
    createTask(@Body() createTaskDto: createTaskDto): Task {
        return this.tasksService.createTask(createTaskDto);
    }

    @Delete('/:id')
    deleteTaskById( @Param('id') id: string): Task {
        return this.tasksService.deleteTaskById(id);
    }
}
