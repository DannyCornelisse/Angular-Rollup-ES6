class appController {

	constructor(appService, appConfig) {

		this.title = appConfig['title'];

		this.list = appService.getList();

		//this.footerText = 
	}
}

appController.$inject = ['appService', 'appConfig'];

export default appController;