import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title: string;
  autor: string;

  constructor() {
    this.title = 'Angular';
    this.autor = 'Adriana';
  }

  ngOnInit() {
  }

}
