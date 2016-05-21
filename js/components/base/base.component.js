import template from './base.template.html';
import controller from './base.controller';

let baseComponent = {
	template,
	restrict: 'E',
	binding: {},
	controller,
	controllerAs: 'vm'
}

export default baseComponent;