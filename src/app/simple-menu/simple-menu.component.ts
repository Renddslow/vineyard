import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';

import * as moment from 'moment';
import { mapHoursResponse } from '../controllers/mapHoursResponse';

@Component({
  selector: 'simple-menu',
  templateUrl: './simple-menu.component.html',
  styleUrls: ['./simple-menu.component.css']
})
export class SimpleMenuComponent {
	@Input() visible: boolean;

	constructor(private http: Http) {}

	addItem(type) {
		const userId = localStorage.getItem('userId');
		const week = `${moment().year()}${moment().week()}`
		const startTime = moment().unix()
		const data = {
			title: getTitleForType(type),
			type,
			startTime,
			isActive: true
		};
		if (data.type === 'airplanemode_active' || data.type === 'local_pharmacy') {
			data['endTime'] = data.startTime + 28800;
			data['isActive'] = false;
			data['hours'] = 8;
		}
		this.http.put(`https://com-porcupine-vineyard.firebaseio.com/users/${userId}/hours/${week}/${startTime}.json`, JSON.stringify(data))
			.subscribe((res: Response) => {
			});
	}
};

const getTitleForType = (type) => {
	switch(type) {
		case 'work':
			return 'Worked in the office';
		case 'group_work':
			return 'On-site meeting';
		case 'local_cafe':
			return 'Off-site team meeting';
		case 'favorite':
			return 'Meeting with church member';
		case 'local_hospital':
			return 'Hospital visitation';
		case 'fitness_center':
			return 'Personal development';
		case 'local_pharmacy':
			return 'Sick day';
		case 'airplanemode_active':
			return 'Day Off';
		case 'home':
			return 'Worked from home';
	}
}
