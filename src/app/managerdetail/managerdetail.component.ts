import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {events_managers} from './managers';


@Component({
  selector: 'app-managerdetail',
  templateUrl: './managerdetail.component.html',
  styleUrls: ['./managerdetail.component.css']
})
export class ManagerdetailComponent implements OnInit {
  managers="events";
  events_managers=events_managers;
  mobile=false;
  constructor(private route :ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  	this.route.params.subscribe(params => {
	    this.managers = params['dep'];
	  });

  	setInterval(()=>this.intervalFunction());
  }

   redirectTo(name){
  	this.router.navigate([name]);
  }

  intervalFunction(){
  	if(window.innerWidth<675)
  		this.mobile=true;
  	else
  		this.mobile=false;
  }

}
