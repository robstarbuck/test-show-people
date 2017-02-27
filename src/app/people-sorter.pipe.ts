import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'peopleSorter'
})

// IMPORTANT NOTE sort should be applied after filters
// pointless to sort something that's going to be filtered
export class PeopleSorterPipe implements PipeTransform {


	private customFields = {
		'fullname': function(obj) {
			return (obj.first_name + obj.last_name).toLowerCase();
		}
	}

	transform(people: {}[], sortby: string, ascending: boolean): any {

		people.sort((a, b) => {

			let aVal, bVal: any;

			// customFields functions mean we can sort by dirived values
			// EG fullname = first_name and last_name concatenated
			if (this.customFields[sortby]) {

				aVal = this.customFields[sortby](a);
				bVal = this.customFields[sortby](b);

			} else {

				aVal = a[sortby].toLowerCase();
				bVal = b[sortby].toLowerCase();

			}

			// swapping around variables (ES6 destructuring)
			// reverses the order of the sort
			if (!ascending) {
				[aVal, bVal] = [bVal, aVal];
			}

			return aVal < bVal ? -1 : aVal > bVal ? 1 : 0;

		});

		return people;
	}

}
