import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),

    isOpen: false,
    name: '',
    path: '',
    watch: false,
    actions: {
        close() {
            Ember.$('#addDirectoryModal').modal('close');
        },
        save() {
            let name = this.get('name');
            let path = this.get('path');
            let watch = this.get('watch');

            let newDirectory = this.get('store').createRecord('directory', {
                name: name,
                path: path,
                watch: watch
            });

            newDirectory.save().then(() => {
                Ember.$('#addDirectoryModal').modal('close');
            });
        }
    },
    didInsertElement() {
        // Init modal, but only once
        var self = this;
        Ember.$('#addDirectoryModal').modal({
            dismissible: false, // Modal can be dismissed by clicking outside of the modal
            opacity: .5, // Opacity of modal background
            inDuration: 300, // Transition in duration
            outDuration: 200, // Transition out duration
            startingTop: '4%', // Starting top style attribute
            endingTop: '15%', // Ending top style attribute,
            complete: function () {
                self.sendAction("onClose");
            }
        });
    },
    didRender() {
        if (this.get('isOpen') === true) {
            Ember.$('#addDirectoryModal').modal('open');
        } else {
            Ember.$('#addDirectoryModal').modal('close');
        }
    }
});

