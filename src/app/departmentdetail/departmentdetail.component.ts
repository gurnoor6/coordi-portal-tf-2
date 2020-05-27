import { Component, OnInit } from '@angular/core';
import {events,creatives,web,fnb,hospitality,marketing,infrastructure,mediaandpublicity} from './events';
import {translateRight,navAnimation,footerAnimation} from '../app-animations';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {fade} from './department-animations';

@Component({
  selector: 'app-departmentdetail',
  templateUrl: './departmentdetail.component.html',
  styleUrls: ['./departmentdetail.component.css'],
  animations:[
  	translateRight,
  	fade
  ]
})
export class DepartmentdetailComponent implements OnInit {
  events=events;
  current_event = events[0];
  current_index=0;
  stateRegister='show';
  trigger;
  multiple=false;
  animation_origin;
  mobile=false;
  eventspage=false;

  currentpage;


  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  	this.route.params.subscribe(params => {
  		if(params['dep']=='events' ){
  			this.events=events;
	    	this.eventspage=true;
	    }

  		if(params['dep']=='creatives' ){
	    	this.currentpage = creatives;
	    }

	    if(params['dep']=='marketing' ){
	    	this.currentpage = marketing;
	    }

	    if(params['dep']=='hospitality' ){
	    	this.currentpage=hospitality;
	    }

	    if(params['dep']=='fnb' ){
	    	this.currentpage = fnb;
	    }

	    if(params['dep']=='infrastructure' ){
	    	this.currentpage= infrastructure;
	    }

	    if(params['dep']=='mediaandpublicity' ){
	    	this.currentpage= mediaandpublicity;
	    }

	     if(params['dep']=='web' ){
	    	this.currentpage= web;
	    }

	    if(params['dep']!='events')
	    	this.events = [this.currentpage];

	  });

  	setInterval(()=>{this.intervalFunction()});
  }

  showActive(event,index){
  	let items = document.querySelectorAll('.indicators p');
  	items.forEach(function(item){
  		item.classList.remove('active');
  	})
  	event.target.classList.add('active');
  	this.trigger = 'fade';
  	this.current_index = index;
  	this.animation_origin = 'circle';
  }

  showNext(){
  	this.trigger="showPrevious";

  	this.current_event = this.events[this.current_index];
  }

  toggleTrigger(){
    this.stateRegister=='hide'?this.stateRegister='show':this.stateRegister='hide';
  }

  log(e){
    console.log(e);
  }

  showOtherImage(){
  	if(this.mobile)
  		return;
  	this.multiple?this.multiple=false:this.multiple=true;
  }

  changeEvent(target){
  	this.trigger = "fade";
  	this.animation_origin = target;
  	if(target=='show'){		//show==showNext
  		this.current_index = (this.current_index+ 1)%6;
  	}

  	if(target=='showPrevious'){		//show==showNext
  		this.current_index=(this.current_index-1+6)%6;
  	}

  	this.activeDotHandler();
  }

  callbackHandler(){
  	if(this.animation_origin =='show'){
  		this.trigger = "show";
  	}
  	else if(this.animation_origin == 'showPrevious')
  		this.trigger = "showPrevious";

  	else if(this.animation_origin == 'circle')
  		this.trigger = "fadeReverse";
  	

  	this.current_event = this.events[this.current_index];
  }

  activeDotHandler(){
  	let items = document.querySelectorAll('.indicators p.circle');
  	items.forEach(function(item){
  		item.classList.remove('active');
  	})
  	console.log(items);
  	items[this.current_index].classList.add('active');
  }

  redirectTo(path){
  	if(path.includes('managerdetail'))
	   if(!window.location.href.includes('events'))
	   		this.router.navigate([path+this.currentpage.managerlink]);
	   else
	   		this.router.navigate([path+'events']);
	else
		this.router.navigate([path]);
  }

  intervalFunction(){
  	if(window.innerWidth<675){
  		this.mobile=true;
  	}

  	else{
  		this.mobile=false;
  	}
  }

}
