import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CreateRentalRoute extends Route {
    @service store;
    async model(){
        console.log("Testing CreatenRentalRoute");
        let rental = this.store.createRecord('rental', {
            title: 'test',
            owner: 'test',
            city: 'test',
            bedrooms: 1,
            category: 'Apartment'
        });
        //rental.save();
    }
}
