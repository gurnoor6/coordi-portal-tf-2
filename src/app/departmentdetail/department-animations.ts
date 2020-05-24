import {trigger,state,style,animate,transition,keyframes} from '@angular/animations';

export const fade=(
	trigger('fade',[

		transition('*=>fade',animate('.25s ease-out',keyframes([
			style({opacity:"1",offset:0.0}),
			style({opacity:"0.7",offset:0.2}),
			style({opacity:"0.3",offset:0.8}),
			style({opacity:"0",offset:1.0}),
		]))),

		transition('*=>show',animate('.25s',keyframes([
			style({opacity:"0",transform:"translateY(600px)",offset:0.0}),
			style({opacity:"0.2",transform:"translateY(400px)",offset:0.3}),
			style({opacity:"0.5",transform:"translateY(300px)",offset:0.5}),
			style({opacity:"0.8",transform:"translateY(150px)",offset:0.7}),
			style({opacity:"1",transform:"translateY(0px)",offset:1.0}),
		]))),

		transition('*=>showPrevious',animate('.25s',keyframes([
			style({opacity:"0",transform:"translateY(-600px)",offset:0.0}),
			style({opacity:"0.2",transform:"translateY(-400px)",offset:0.3}),
			style({opacity:"0.5",transform:"translateY(-300px)",offset:0.5}),
			style({opacity:"0.8",transform:"translateY(-150px)",offset:0.7}),
			style({opacity:"1",transform:"translateY(0px)",offset:1.0}),
		]))),

		transition('*=>fadeReverse',animate('.25s ease-out',keyframes([
			style({opacity:"0",offset:0.0}),
			style({opacity:"0.2",offset:0.2}),
			style({opacity:"0.5",offset:0.8}),
			style({opacity:"1",offset:1.0}),
		]))),

	])

)