
import appController from './app.controller';
import appService from './app.service';
import appConfig from './config';
import footerModule from './components/footer/footer';

	angular.module('app', ['footerModule'])
		.constant('appConfig', appConfig)
		.service('appService', appService)
		.controller('appController', appController);