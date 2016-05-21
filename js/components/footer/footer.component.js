import template from './footer.template.html';
import controller from './footer.controller';

let footerComponent = {
	template,
	restrict: 'E',
	binding: {},
	controller,
	controllerAs: 'vm'
}

export default footerComponent;