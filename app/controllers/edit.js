import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{

    editRun(id){
      const data = this.model;

       fetch(`http://tiny-tn.herokuapp.com/collections/runs-mhf/${id}`,{
        headers:{
          'Content-Type' : 'application/json',
          'Accept' : 'application/json'
        },
        method:'PUT',
        body: JSON.stringify(data)
      }).then(()=>{
        this.transitionToRoute('index');

      })
    }
  }
});
