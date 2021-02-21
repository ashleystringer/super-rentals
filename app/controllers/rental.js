import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';


export default class RentalController extends Controller {
    @service store;
    @action test(){
        console.log("Testing test()");
        console.log(this.model);
        this.model.title = 'Hello'
        //this.model.set('title', 'Hello');
        //this.get('model').save();
        /*sthis.store.createRecord({
            title: '?'
        });*/
        this.model.save();
    }
    @action test1(){
        console.log("test1()");
        let test = this.store.createRecord('rental', {
            title: '???????'
        });
        test.save();
    }
}
