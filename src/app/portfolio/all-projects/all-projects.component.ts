import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css']
})
export class AllProjectsComponent implements OnInit {

  constructor() { }

  public data = [
    {
      id: '123',
      title: 'Project 123'
    },
    {
      id: '124',
      title: 'Project 124'
    },
    {
      id: '125',
      title: 'Project 125'
    },
  ]

  ngOnInit(): void {
  }

}
