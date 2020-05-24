import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-managerdetail',
  templateUrl: './managerdetail.component.html',
  styleUrls: ['./managerdetail.component.css']
})
export class ManagerdetailComponent implements OnInit {
  managers="events";
  constructor(private route :ActivatedRoute) { }

  ngOnInit(): void {
  	this.route.params.subscribe(params => {
	    this.managers = params['dep'];
	  });
  }

   redirectTo(name){
  	window.location.href = name;
  }

}
