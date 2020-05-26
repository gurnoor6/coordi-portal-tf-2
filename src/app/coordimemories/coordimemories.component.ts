import { Component, OnInit} from '@angular/core';
import {memories } from './coordie-memories';
import {translate} from './memories-animations';
import {CommunicatorService} from '../services/communicator.service';


@Component({
  selector: 'app-coordimemories',
  templateUrl: './coordimemories.component.html',
  styleUrls: ['./coordimemories.component.css'],
  animations:[
  	translate
  ]
})
export class CoordimemoriesComponent implements OnInit {
  memories_list = memories;
  constructor(private commService : CommunicatorService) { }

  ngOnInit(): void {

  }

  getState(m){
	let status = this.commService.giveStatus();
	if(status && m.id%2!=0){
		return "right";
	}

	if (status && m.id%2==0)
		return "left";

	return "none";
  }

  statusFalse(e){
  	if(e['totalTime']>10){
  		this.commService.statusFalse();
  	}
  }


}
