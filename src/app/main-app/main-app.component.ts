import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import * as moment from 'moment';
import * as firebase from 'firebase';

import { mapHoursResponse } from '../controllers/mapHoursResponse';

const config = {
	apiKey: "AIzaSyD0FqHcXMBC_BUX1Q3DjZZzwX9_SPQsfQk",
	authDomain: "com-porcupine-vineyard.firebaseapp.com",
	databaseURL: "https://com-porcupine-vineyard.firebaseio.com",
	projectId: "com-porcupine-vineyard",
	storageBucket: "com-porcupine-vineyard.appspot.com",
	messagingSenderId: "1029985267812"
};

firebase.initializeApp(config);

@Component({
  selector: 'main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.css']
})
export class MainAppComponent implements OnInit {

	appHasMoved = false;

	day = moment().startOf('week').format('MMMM D');

	@Input()
	get appMoved() {
		return this.appHasMoved;
	}

	@Output() appMovedChange = new EventEmitter();

	set appMoved(val) {
		this.appHasMoved = val;
		this.appMovedChange.emit(this.appHasMoved);
	}

	menuOpened = false;
	items = [];
	totalHours = 0;

	userId: string;

  constructor(private http: Http) {
		this.userId = localStorage.getItem('userId');
	}

  ngOnInit() {
		const week = `${moment().year()}${moment().week()}`;
		const hours = firebase.database().ref(`users/${this.userId}/hours/${week}`);
		hours.on('value', (res) => {
			this.items = new mapHoursResponse(res.val()).mapResponse();
			this.totalHours = this.countHours(this.items);
		});
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

	countHours(items) {
		let hours = 0;
		items.forEach(item => {
			if (item.hours) {
				hours += parseFloat(item.hours);
			}
		});
		return Math.floor(hours);
	}

}
