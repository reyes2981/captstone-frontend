import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  task: any;

  submit(form: any) {
    console.log(form)
    form.id = this.task.posts.length + 1
    this.task.posts.push(form);
    console.log(this.task.posts)

  }

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    // route.params.subscribe(val => {
    //   this.findWeather(this.city.name || '', this.city.country || '')    
    // })
  }

  ngOnInit(): void {
  }

}
