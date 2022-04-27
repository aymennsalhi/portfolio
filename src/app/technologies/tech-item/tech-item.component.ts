import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tech-item',
  templateUrl: './tech-item.component.html',
  styleUrls: ['./tech-item.component.css']
})
export class TechItemComponent implements OnInit {

  public tech: any;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(r => {
      this.tech = r.tech;
    });
  }

}
