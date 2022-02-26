import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  public taskBody: string;

  createTask(): any {
    const newTask = {
      description: this.taskBody
    };
    this.taskService.createTask(newTask).subscribe(response => {
      this.Tasks = [...this.Tasks, response];
    }, err => console.log(err));
  }

  constructor() {}

  ngOnInit(): void {
  }

}
