import { Component, Input } from '@angular/core';

@Component({
  selector: 'list-item',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.css']
})
export class LogListComponent {
	@Input() item: object;

	isSlid = false;

	slide(val) {
		this.isSlid = val ? false : true;
	}

	slideBack(event) {
		if (!event.path[0].className.includes('material-icons') && this.isSlid) {
			this.isSlid = false;
		}
	}
}
