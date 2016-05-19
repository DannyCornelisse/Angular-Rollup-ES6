class appController {

	constructor(appService) {

		this.title = 'Clean Angular code with';

		this.list = appService.getList();

		this.footerText = 'Served by BrowserSync';
	}
}

appController.$inject = ['appService'];

class appService {

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

angular.module('app', [])
		.service('appService', appService)
		.controller('appController', appController);
//# sourceMappingURL=main.js.map
