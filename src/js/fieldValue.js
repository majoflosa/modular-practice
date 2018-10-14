import $ from 'jquery/dist/jquery.slim';

export default class fieldValue {
	constructor() {
		this.state = {
			editingField: false
		};

		// cacheDom elements
		this.$fieldValue = $('.field-value');
		this.$fieldWrapper = this.$fieldValue.closest('.field-wrapper');
		this.$save = this.$fieldWrapper.find('.save-value');
		this.$cancel = this.$fieldWrapper.find('.cancel-edit');

		this.$clickedEl = null;

		// fix methods' context
		this.handleClickField = this.handleClickField.bind(this);
		this.handleClickSave = this.handleClickSave.bind(this);
		this.handleClickCancel = this.handleClickCancel.bind(this);
	}

	init() {
		this.bindEvents();
		this.render();
	}

	bindEvents() {
		this.$fieldValue.click( e => this.handleClickField(e) );
		this.$save.click( e => this.handleClickSave(e) );
		this.$cancel.click( e => this.handleClickCancel(e) );
	}

	cacheFieldDom( targetId ) {
		let field = $(`#${targetId}`);
		let wrapper = field.closest('.field-wrapper');
		let editor = wrapper.find('.editing-content');
		let input = wrapper.find('.field-input');
		let save = wrapper.find('.save-value');
		let cancel = wrapper.find('.cancel-edit');

		return { field, wrapper, editor, input, save, cancel }; 
	}
	
	render() {
		if ( !this.$clickedEl ) return;

		if ( this.state.editingField ) {
			this.$fieldWrapper.removeClass('editing-field');
			this.$clickedEl.wrapper.addClass('editing-field');
		} else {
			let fieldText = this.$clickedEl.input.val().trim() ? this.$clickedEl.input.val() : this.$clickedEl.field.text()
			this.$clickedEl.field.text( fieldText );

			this.$clickedEl.wrapper.removeClass('editing-field');
		}
	}

	/* ===============================================
		Begin Event Handlers
	=============================================== */
	handleClickField(e) {
		this.state.editingField = true;
		this.$clickedEl = this.cacheFieldDom( e.target.id );

		this.render();
	}

	handleClickSave(e) {
		if ( this.$clickedEl.input.val().trim() === '' ) return false;

		this.state.editingField = false;
		this.render();
		this.$clickedEl.input.val('');
	}

	handleClickCancel(e) {
		this.$clickedEl.input.val('');
		this.state.editingField = false;
		this.render();
	}
}