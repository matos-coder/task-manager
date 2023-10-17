import { Component } from '@angular/core';
import { TASKS } from '../mock-task';
import { Tasks } from '../Tasks';
import { TaskService } from '../services/task.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  task:Tasks[] = [];
  deleteTask(task:Tasks){
    this.taskService.deleteTask(task).subscribe(() => (this.task = this.task.filter(t => t.id !== task.id )));
  }

  constructor( private taskService:TaskService){}

  ngOnInit(): void{
    this.taskService.getTask().subscribe((tasks) => (this.task = tasks));
  }
  addTask(task: Tasks){
    this.taskService.addTask(task).subscribe((task) => (this.task.push(task)))

  }

}
