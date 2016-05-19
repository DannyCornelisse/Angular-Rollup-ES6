export default class appService {

	constructor() {

		this.list = [
			'ES6',
			'Rollup',
			'Gulp'
		]
	}

	getList() {
		return this.list.map(item => '- ' + item);
	}
}