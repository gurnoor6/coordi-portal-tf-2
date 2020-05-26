import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {
	status=false;
  constructor() { }

  statusReceiver(e){
  	console.log(e['toState']);
  	if(e['toState']=='memories')
  		this.status=true;
  }

  giveStatus(){  	
  	return this.status;
  }

  statusFalse(){
  	this.status=false;
  }
}
