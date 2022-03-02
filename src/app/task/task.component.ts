import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {

  public tasks: Task[];
  task: any;
  private data:any = []
  cdisplay = false;


  constructor(private taskService: TaskService, private http: HttpClient) { }

  public onClick() {
    console.log("clicked");
    this.cdisplay = true;
  }
  

  public getTasks(): void {
    this.taskService.getTasks().subscribe(
      (response: Task[]) => {
        this.tasks = response;
        console.log(this.tasks);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  display = false;
  onPress() {
    this.display = true;
  }

  public onAddTask(addForm: any): void {
    this.taskService.addTask(addForm).subscribe(
      (response: Task) => {
        console.log(response);
        this.getTasks();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }


  ngOnInit(): void {

  }

}
