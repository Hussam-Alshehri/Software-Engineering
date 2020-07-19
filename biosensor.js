



  class Biosensor
  {
     constructor(name)
     {
            this.owner=name;
            this.hearrate=0;
     }

     generatRandomBetween(min ,max)
     {

        return parseInt(math.random() * (max -min ) + min );
     }

    beat()
    {
      let hr=this.generatRandomBetween(70,80)
      this.heartRat=hr;
      console.log('[owner]:'+ this.owner + '---- [HR] '+ this.heartRate)
    }

    live()
    {
      
        setInterval(this.beat,1000)

    }
  }
  

  let james= new Biosensor("james")
  console.log(james)
