import { Component, OnInit } from '@angular/core';
import {events} from './events';
import {translateRight,navAnimation,footerAnimation} from '../app-animations';


@Component({
  selector: 'app-departmentdetail',
  templateUrl: './departmentdetail.component.html',
  styleUrls: ['./departmentdetail.component.css'],
  animations:[
  	translateRight,
  ]
})
export class DepartmentdetailComponent implements OnInit {
  events=events;
  current_event = events[0];
  stateRegister='show';
  constructor() { }

  ngOnInit(): void {
  }

  showActive(event,index){
  	let items = document.querySelectorAll('.indicators p');
  	items.forEach(function(item){
  		item.classList.remove('active');
  	})
  	event.target.classList.add('active');
  	this.current_event = this.events[index];
  }

  toggleTrigger(){
    this.stateRegister=='hide'?this.stateRegister='show':this.stateRegister='hide';
  }

  log(e){
    console.log(e);
  }

}
