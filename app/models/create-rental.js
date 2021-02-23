import Model from '@ember-data/model';
import DS from 'ember-data';
import { inject as service } from '@ember/service';

export default class CreateRentalModel extends Model {
    @attr('string') title;
    @attr('string') owner;
    @attr('city') city;
    @attr('number') bedroom;
    @attr('string') category;
}
