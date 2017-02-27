import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'sp-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})


export class AppComponent extends OnInit {

	readonly genderOptions = ['', 'Male', 'Female'];

	public ascend: boolean = true;
	public gender: string = '';
	public genderFilter: string = '';
	public genderFilterIndex: number = 0;
	public peopleSet = []; 	// TODO typeset peopleSet by class
	public selectedUser: string = undefined;
	public showSearch: boolean = true;
	public sort: string = 'fullname';
	public sortName: boolean = true;

	public getIcon(column) {
		if (this.sort === column) {
			return this.ascend ? 'keyboard_arrow_down' : 'keyboard_arrow_up';
		}
		return '';
	}

	public resetSearch(arr) {
		arr.map((a) => '');
	}

	public genderToggle() {

		++this.genderFilterIndex;

		// reset if outside of range
		if (this.genderFilterIndex >= this.genderOptions.length) {
			this.genderFilterIndex = 0;
		}

		this.genderFilter = this.genderOptions[this.genderFilterIndex];


	}

	public scrollTop() {
		// Offloading to web-api ensures call-stack is complete
		setTimeout(() => {
			window.scrollTo(0, 0);
		}, 0);
	}

	public setFocus(e) {
		// HACK setTimeout is required else the transition will not complete
		setTimeout(() => {
			e.focus();
		}, 200);
	}

	public sortBy(column): void {

		// Invert ascend when already sorting by column else reset
		if (this.sort === column) {
			this.ascend = !this.ascend;
		} else {
			this.ascend = true;
		}

		this.sort = column;

	}

	ngOnInit() {

		this.genderFilter = this.genderOptions[this.genderFilterIndex];

		var loadPeople = (people: Object[]) => {

			this.peopleSet = people;

		}

		var showError = function(error) {

			// TODO 
			// Include error handling, ordinarily this would be prioritised

		}

		// ng will have built-in for this
		// purely a demonstration of a promise

		let promise = new Promise(function(fulfill, reject) {

			let request = new XMLHttpRequest();

			request.onreadystatechange = function() {
				if (request.readyState == 4) {

					try {
						fulfill(JSON.parse(request.responseText));
					}
					catch (error) {
						reject(error)
					}

				}
			}

			request.open('GET', 'assets/data/data.json', true);

			request.send(null);

		})

		promise.then(loadPeople, showError);

	}

}
