
import appController from './app.controller';
import appService from './app.service';
import appConfig from './config';
import baseModule from './components/base/base';

	angular.module('app', ['baseModule'])
		.constant('appConfig', appConfig)
		.service('appService', appService)
		.controller('appController', appController);