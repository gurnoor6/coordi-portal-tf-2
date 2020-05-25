import {trigger,state,style,animate,transition,keyframes} from '@angular/animations';

export const fade=(

	trigger('fade',[

		transition(':leave',animate('1s',keyframes([
			style({opacity:"1",offset:0.0}),
			style({opacity:"0.5",offset:0.3}),
			style({opacity:"0.1",offset:0.9}),
		    style({display:"none",offset:1.0}),
		]))),




	])


)

export const slide=(
	trigger('slide',[
		transition(':enter',animate('0.5s ease-in-out',keyframes([
			style({opacity:"0",transform:"translateX(600px)",offset:0.0}),
			style({opacity:"0.3",transform:"translateX(300px)",offset:0.7}),
			style({opacity:"1",transform:"translateX(0px)",offset:1.0}),
		]))),
	])
)

export const animateHead=(
	trigger('animateHead',[
		transition(':enter',animate('1s ease-in-out',keyframes([
			style({opacity:"0",transform:"translateX(-600px)",offset:0.0}),
			style({opacity:"0",transform:"translateX(-600px)",offset:0.5}),
			style({opacity:"0.3",transform:"translateX(-300px)",offset:0.65}),
			style({opacity:"1",transform:"translateX(0px)",offset:1.0}),

		]))),
	])
)

export const animateContent=(
	trigger('animateContent',[
		transition(':enter',animate('1s ease-in-out',keyframes([
			style({opacity:"0",transform:"translateX(600px)",offset:0.0}),
			style({opacity:"0",transform:"translateX(600px)",offset:0.5}),
			style({opacity:"0.3",transform:"translateX(300px)",offset:0.65}),
			style({opacity:"1",transform:"translateX(0px)",offset:1.0}),

		]))),
	])
)