import $ from 'jquery/dist/jquery.slim';

export default class fieldValue {
	constructor() {
		this.state = {
			editingField: false
		};

		this.$fieldValue = $('.field-value');
	}

	init() {
		this.bindEvents();
		this.render();
	}

	bindEvents() {
		this.$fieldValue.click (e => this.handleClickField(e) );
	}

	handleClickField(e) {
		console.log( 'Field value clicked!');
		this.state.editingField = !this.state.editingField;
		this.render();
	}
	
	render() {
		if ( this.state.editingField ) this.$fieldValue.addClass('editing-field');
		else this.$fieldValue.removeClass('editing-field');
	}
}