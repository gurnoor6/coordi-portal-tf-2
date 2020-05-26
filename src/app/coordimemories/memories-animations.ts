import {trigger,state,style,animate,transition,keyframes} from '@angular/animations';


export const translate=(
	trigger('translate',[

		//left to right
		transition('*=>right',animate('1s 0s ease-in-out',keyframes([
			style({opacity:"0",transform:"translateX(-600px)",offset:0.0}),
			style({opacity:"0.2",transform:"translateX(-480px)",offset:0.2}),
			style({opacity:"0.5",transform:"translateX(-300px)",offset:0.5}),
			style({opacity:"1",transform:"translateX(0)",offset:1.0}),
		]))),

		transition('*=>left',animate('1s 0s ease-in-out',keyframes([
		style({opacity:"0",transform:"translateX(600px)",offset:0.0}),
			style({opacity:"0.2",transform:"translateX(480px)",offset:0.2}),
			style({opacity:"0.5",transform:"translateX(300px)",offset:0.5}),
			style({opacity:"1",transform:"translateX(0)",offset:1.0}),
		]))),

	])

)