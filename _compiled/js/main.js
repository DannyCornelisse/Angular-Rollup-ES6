class appController {

	constructor(appService, appConfig) {

		this.title = appConfig['title'];

		this.list = appService.getList();

		//this.footerText = 
	}
}

appController.$inject = ['appService', 'appConfig'];

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

var appConfig = {

	title: 'Clean Angular code with'

}

var template = "<footer class=\"Footer\">\n\t<p>{{vm.text}}</p>\n</footer>";

class footerController {
	constructor() {
		this.text = 'Served with BrowserSync';
	}
}

let footerComponent = {
	template,
	restrict: 'E',
	binding: {},
	controller: footerController,
	controllerAs: 'vm'
}

let footerModule = angular.module('footerModule', [])

	.component('footerComponent', footerComponent)

angular.module('app', ['footerModule'])
		.constant('appConfig', appConfig)
		.service('appService', appService)
		.controller('appController', appController);
//# sourceMappingURL=main.js.map
