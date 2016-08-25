import Ember from 'ember';

export default Ember.Route.extend({

    model(id){

      return fetch(`http://tiny-tn.herokuapp.com/collections/runs-mhf/${id.detail}`)
  .then((res) => res.json());
  }


});
