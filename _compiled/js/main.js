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

class baseController {
	constructor() {
		this.text = 'Served with BrowserSync';
	}
}

let baseComponent = {
	template,
	restrict: 'E',
	binding: {},
	controller: baseController,
	controllerAs: 'vm'
}

let baseModule = angular.module('baseModule', [])

	.component('baseComponent', baseComponent)

angular.module('app', ['baseModule'])
		.constant('appConfig', appConfig)
		.service('appService', appService)
		.controller('appController', appController);
//# sourceMappingURL=main.js.map
