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
   	name = name.replace(' ','');
   	name = name.replace(' ','');
   	if(name.length==10){
   		name = 'https://api.whatsapp.com/send?phone=+91'+name;
   	}
   	if(name.includes('http'))
   		// window.location.href=name;
      window.open(name);
  	this.router.navigate([name]);
  }

  intervalFunction(){
  	if(window.innerWidth<675)
  		this.mobile=true;
  	else
  		this.mobile=false;
  }

  whatsapp(number){
  	number = number.replace(' ','');
   	number = number.replace(' ','');
   	// window.location.href='https://api.whatsapp.com/send?phone=+91'+number;
    window.open('https://api.whatsapp.com/send?phone=+91' + number, '_blank');
  }

}
