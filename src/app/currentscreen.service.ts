import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentscreenService {
  private currentscreen = 'home';
  constructor() { }

  setCurrentScreen(screen){
  	this.currentscreen = screen;
  }

  getCurrentScreen():string{
  	return this.currentscreen;
  }
}
