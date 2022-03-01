import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  display = false;
  constructor() { }

  ngOnInit(): void {
  }

  public onClick() {
    console.log("clicked");
    this.display = true;
  }
  

}
