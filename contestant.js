class Contestant {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
  
    }
  
    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",function(data){
        contestantCount = data.val();
      })
    }
    
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(name){
      var contestantIndex = "contestant" + contestantCount;
      database.ref(contestantIndex).set({
        name:name
      });
    }
  }
  