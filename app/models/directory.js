import DS from 'ember-data';

export default DS.Model.extend({
    Id: DS.attr(),
    Name: DS.attr('string'),
    Path: DS.attr('string')
});
