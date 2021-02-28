import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CreateRentalRoute extends Route {
    @service store;
    async model(){
        console.log("Testing CreatenRentalRoute");
        let rental = this.store.createRecord('rental', {
            "id": "test",
            "attributes": {
            "title": 'test',
            "owner": 'test',
            "city": 'test',
            "category": 'Apartment',
            "bedrooms": 1,
            "image" : " ",
            "description" : "Test"
            }

        });
        rental.save();
    }
}
