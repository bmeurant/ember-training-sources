import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  include: ['albums'] // eslint-disable-line
});
