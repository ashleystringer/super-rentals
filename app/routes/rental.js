import Route from '@ember/routing/route';

import { inject as service } from '@ember/service';

export default class RentalRoute extends Route {

  @service store;

  async model(params) {
    console.log("params.rental_id: " + params.rental_id);
    console.log("this.store: " + this.store);
    return this.store.findRecord('rental', params.rental_id);
  }
}