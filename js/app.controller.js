class appController {

	constructor(appService) {

		this.title = 'Clean Angular code with';

		this.list = appService.getList();

		this.footerText = 'Served by BrowserSync';
	}
}

appController.$inject = ['appService'];

export default appController;