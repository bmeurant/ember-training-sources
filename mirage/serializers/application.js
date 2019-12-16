import {RestSerializer} from 'ember-cli-mirage';
import Inflector from 'ember-inflector';

export default RestSerializer.extend({
  serializeIds: 'always',
  embed: true,

  serialize() {
    let inflector = Inflector.inflector;
    inflector.irregular('comic', 'comics');
    let json = RestSerializer.prototype.serialize.apply(this, arguments);
    if (json[inflector.pluralize(arguments[0].modelName)]) {
      json.content = json[inflector.pluralize(arguments[0].modelName)];
      json[inflector.pluralize(arguments[0].modelName)] = undefined;
    } else {
      json.content = json[arguments[0].modelName];
      json[arguments[0].modelName] = undefined;
    }
    return json;
  }
});
