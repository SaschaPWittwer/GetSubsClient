import Ember from 'ember';

export default Ember.Component.extend({
    modalIsOpen: false,
    actions: {
        modalClosed () {
            this.set('modalIsOpen', false);
        },
        toggleModal() {
            this.set('modalIsOpen', true);
        },
        dirSelected() {
            alert("Directory selected");
        }
    }
});
