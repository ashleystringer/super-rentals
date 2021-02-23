import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';


export default class RentalController extends Controller {
    @service store;
    @action test(){
        console.log("Testing test()");
        console.log(this.model);
        //this.model.title = 'Hello'
        this.model.set('title', 'Hello');
        console.log("model.title " + this.model.title);
        //this.get('model').save();
        this.model.save().then(()=>{
            console.log('Successful');
        }, ()=>{
            console.log('Not successful');
        });
    }
}
