import Controller from '@ember/controller';
import { action } from '@ember/object';
import { getProperties } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CreateRentalController extends Controller {
    @tracked title;
    @tracked owner;
    @tracked city;
    @tracked bedroom;
    @tracked category;
    @action create(){
        console.log("Testing create");
    }
}
