import { Component, OnInit, Input } from '@angular/core';

import { Task } from '../../models/Task';

import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  
  @Input() task: Task;

  constructor(public taskService: TaskService) { }

  ngOnInit() {
  }

  deleteTask(task: Task){

    if (confirm('are you sure you want to delete it?')){
      this.taskService.deleteTask(task);
    }

  
  }

}
