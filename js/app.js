
import appController from './app.controller';
import appService from './app.service';

	angular.module('app', [])
		.service('appService', appService)
		.controller('appController', appController);