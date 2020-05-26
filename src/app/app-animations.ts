import {trigger,state,style,animate,transition,keyframes} from '@angular/animations';


export const translateRight=(

	trigger('tR',[

		transition('show=>hide',animate('.5s',keyframes([
			style({opacity:"0.5",transform:"translateX(50px)",offset:0.1}),
			style({opacity:"0",offset:0.3}),
			style({transform:"translateX(-100px)",offset:0.4}),
			style({transform:"translateX(-50px)",opacity:"0.5",offset:0.6}),
			style({transform:"translateX(0px)",offset:1})
		]))),

		transition('hide=>show',animate('.5s',keyframes([
			style({opacity:"0.5",transform:"translateX(-50px)",offset:0.1}),
			style({opacity:"0",offset:0.3}),
			style({transform:"translateX(100px)",offset:0.4}),
			style({transform:"translateX(50px)",opacity:"0.5",offset:0.6}),
			style({transform:"translateX(0px)",offset:1})
		]))),
	])
)

export const navAnimation=(
	trigger('navAnimation',[
		transition(':enter',animate('.5s ease-out',keyframes([
			style({opacity:"0",transform:"translateY(-200px)",offset:0.0}),
			style({opacity:"0.3",transform:"translateY(-160px)",offset:0.2}),
			style({opacity:"0.3",transform:"translateY(-80px)",offset:0.5}),
			style({opacity:"0.7",transform:"translateY(-30px)",offset:0.7}),
			style({opacity:"1",transform:"translateY(0px)",offset:1.0}),
		]))),
	])
)

export const footerAnimation = (
	trigger('footerAnimation',[
		transition(':enter',animate('.5s ease-out',keyframes([
			style({opacity:"0",transform:"translateY(200px)",offset:0.0}),
			style({opacity:"0.3",transform:"translateY(160px)",offset:0.2}),
			style({opacity:"0.3",transform:"translateY(80px)",offset:0.5}),
			style({opacity:"0.7",transform:"translateY(30px)",offset:0.7}),
			style({opacity:"1",transform:"translateY(0px)",offset:1.0}),
		]))),
	])
)

export const routeAnimate=(
	trigger('routeAnimations',[

		transition('department=>departmentdetail',animate('0.5s ease-out',keyframes([
			style({opacity:"0", transform: "translateY(600px) scale(0)", offset:0.0}),
			style({opacity:"0.3", transform: "translateY(400px) scale(0.1)", offset:0.2}),
			style({opacity:"0.5", transform: "translateY(300px) scale(0.1)",offset:0.35}),
			style({opacity:"0.5",transform: "translateY(200px) scale(0.5)",offset:0.8}),
			style({opacity:"1",transform: "translateY(0px) scale(1)",offset:1.0}),

		]))),

		transition('departmentdetail=>department',animate('0.5s ease-in',keyframes([
			style({opacity:"0", transform: "translateY(-600px) scale(0)", offset:0.0}),
			style({opacity:"0.3", transform: "translateY(-400px) scale(0.1)", offset:0.2}),
			style({opacity:"0.5", transform: "translateY(-300px) scale(0.1)",offset:0.35}),
			style({opacity:"0.5",transform: "translateY(-200px) scale(0.5)",offset:0.8}),
			style({opacity:"1",transform: "translateY(0px) scale(1)",offset:1.0}),

		]))),

		transition('*=>memories',animate('0s')),

		transition('*<=>*',animate('0.5s ease-in',keyframes([
			style({opacity:"0",offset:0.0}),
			style({opacity:"0.3",offset:0.2}),
			style({opacity:"0.5",offset:0.5}),
			style({opacity:"0.7",offset:0.7}),
			style({opacity:"1",offset:1.0}),

		])))

	])
)