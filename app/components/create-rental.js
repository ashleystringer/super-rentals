import Component from '@glimmer/component';
import { action } from '@ember/object';


export default class CreateRentalComponent extends Component {
    @action create(){
        console.log('?');
    }
}
