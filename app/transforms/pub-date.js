import DS from 'ember-data';
import moment from 'moment';

export default DS.DateTransform.extend({

  deserialize(serialized) {
    if (serialized) {
      return moment(serialized).format("MMMM YYYY");
    }
    return serialized;
  }
});
