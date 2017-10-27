import { Component, Input } from '@angular/core';
import { Http, Response } from '@angular/http';

import * as moment from 'moment';

@Component({
  selector: 'list-item',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.css']
})
export class LogListComponent {
	@Input() item: object;

	isSlid = false;
	displayEdit = false;

	constructor(private http: Http) {}

	slide(val) {
		this.isSlid = val ? false : true;
	}

	slideBack(event) {
		if (!event.path[0].className.includes('material-icons') && this.isSlid) {
			this.isSlid = false;
		}
	}

	stop(item) {
		const userId = localStorage.getItem('userId');
		const week = `${moment().year()}${moment().week()}`;

		item.endTime = moment().unix();
		item.isActive = false;

		const hoursDiff = ((item.endTime - item.startTime) / 60) / 60;
		item.hours = hoursDiff < 1 ? hoursDiff.toFixed(2) : Math.floor(hoursDiff);

		this.http.put(`https://com-porcupine-vineyard.firebaseio.com/users/${userId}/hours/${week}/${item.id}.json`, item)
			.subscribe((res: Response) => {
			});
		this.isSlid = false;
	}

	edit(item) {
		this.displayEdit = true;
		this.isSlid = false;
	}

	closeEdit(event) {
		if (event.path[0].className.includes('dark') || event.path[0].className.includes('material-icons')) {
			this.displayEdit = false;
		}
	}

	delete(item) {
		const userId = localStorage.getItem('userId');
		const week = `${moment().year()}${moment().week()}`;
		this.http.delete(`https://com-porcupine-vineyard.firebaseio.com/users/${userId}/hours/${week}/${item.id}.json`)
			.subscribe((res: Response) => {});
		this.isSlid = false;
	}
}
