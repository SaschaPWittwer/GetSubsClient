import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    path: DS.attr('string'),
    watch: DS.attr('boolean')
});
