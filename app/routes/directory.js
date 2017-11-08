import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        let newRecord = this.get("store").createRecord("directory", {
            Name: 'blubbi',
            Path: 'Test'
        });
        newRecord.save();
        return this.get("store").findAll("directory");
    }
});
