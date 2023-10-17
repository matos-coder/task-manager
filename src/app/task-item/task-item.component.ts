import { Component , Input , Output, EventEmitter} from '@angular/core';
import {Tasks} from '../Tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task: Tasks | undefined;
  @Output() onDeleteTask: EventEmitter<Tasks> = new EventEmitter()
  faTimes = faTimes;
  onDelete(task: any){
    this.onDeleteTask.emit(task);
  }
}
