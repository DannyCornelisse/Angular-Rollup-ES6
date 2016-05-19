class appController {

	constructor() {

		this.title = 'Clean Angular code with';

		this.list = [
			'ES6',
			'Rollup',
			'Gulp'
		]

		this.footerText = 'Served by BrowserSync';
	}
}

angular.module('app', [])
		.controller('appController', appController);
//# sourceMappingURL=main.js.map
