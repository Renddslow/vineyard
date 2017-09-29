import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.css']
})
export class MainAppComponent implements OnInit {

	appMoved = false;
	menuOpened = false;
	items = [
		{
			isActive: true,
			icon: 'favorite',
			title: 'Meeting with student',
			hours: '1:00'
		},
		{
			isActive: false,
			icon: 'airplanemode_active',
			title: 'Time Off',
			hours: '8:00'
		}
	];

  constructor() { }

  ngOnInit() {
  }

	moveApp(val) {
		this.appMoved = val ? false : true;
	}

	openMenu(val) {
		this.menuOpened = val ? false : true;
	}

	closeAll(event) {
		if (!event.path[0].className.includes('material-icons') && (this.appMoved || this.menuOpened)) {
			this.appMoved = false;
			this.menuOpened = false;
		}
	}

}
