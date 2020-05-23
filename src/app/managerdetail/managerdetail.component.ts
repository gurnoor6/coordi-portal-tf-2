import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-managerdetail',
  templateUrl: './managerdetail.component.html',
  styleUrls: ['./managerdetail.component.css']
})
export class ManagerdetailComponent implements OnInit {
  managers="events";
  constructor() { }

  ngOnInit(): void {
  }

}
