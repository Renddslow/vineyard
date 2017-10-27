export class mapHoursResponse {
	constructor(private res) {}

	mapResponse() {
		const hours = this.res;
		const items = Object.keys(hours).map(key => {
			const response = {
				isActive: hours[key].isActive,
				startTime: hours[key].startTime,
				endTime: hours[key].endTime,
				title: hours[key].title,
				type: hours[key].type,
				id: key,
				hours: hours[key].hours
			};
			return response;
		});

		return items.reverse();
	}
};
