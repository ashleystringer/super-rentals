import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RentalController extends Controller {
    @action test(){
        console.log("Testing test()");
        this.model.title = 'Hello'
        //this.model.save();
    }
}
