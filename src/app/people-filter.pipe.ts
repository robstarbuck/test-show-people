import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'peopleFilter'
})
export class PeopleFilterPipe implements PipeTransform {


	transform(people: {}[], name?: string, email?: string, gender?: string): any {

		let filterArr: any[] = [];

		if (people.length === 0) {
			return people;
		}

		name = name.replace(/[^a-z ]/g, '');
		email = email.replace(/[^\w@]/g, '');

		// Filter First Name
		if (name !== '') {

			let namesArr = name.split(/\s/);

			// Filter name
			if (namesArr[0] !== '') {

				filterArr.push({
					key: 'first_name',
					regex: new RegExp('^' + namesArr[0] + '.*', 'i')
				});

				if (namesArr.length > 1) {
					filterArr.push({
						key: 'last_name',
						regex: new RegExp('^' + namesArr[namesArr.length - 1] + '.*', 'i')
					});
				}

			}


		}

		// Filter email
		if (email !== '') {

			let emailArr = email.split(/@/);

			let regexStr: string = emailArr[0]

			if (emailArr.length > 1) {
				regexStr = regexStr + '[^@]*@' + `${emailArr[1]}` + '.*';
			}

			filterArr.push({
				key: 'email',
				regex: new RegExp(regexStr, 'i')
			});

		}

		// Filter sex
		if (gender.trim() !== '') {

			filterArr.push({
				key: 'gender',
				regex: new RegExp(gender)
			});

		}

		// if filters have been applied
		if (filterArr.length) {

			// IMPORTANT NOTE filtering of people occurs once
			// rather than iterating people each time we filter
			// people is iterated only once
			// filters are dequeued against each person making for better performance
			people = people.filter((person) => {

				// `every` ensures we do not continue matching if filter is applied
				return filterArr.every((rgxF) => {

					if (rgxF.regex.test(person[rgxF.key])) {
						return true;
					};

					return false;

				})

			});
		}

		return people;
	}

}
