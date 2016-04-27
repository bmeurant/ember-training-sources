import DS from 'ember-data';
import BaseSerializer from './application';

export default BaseSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    albums: {embedded: 'always'}
  }
});
