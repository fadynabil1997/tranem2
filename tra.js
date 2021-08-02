
class icons {

    constructor (){
        this.end =document.getElementById('end')
         this.icoo = document.getElementById('icoo');
         this.test;
         this.starts = document.getElementById('starts');
         this.end.addEventListener ("click", ()=> {
         
            this.icona()
         

         });

         this.icona()
    }

icona(){

    if(this.test == false){

        this.test = true;
        this.icoo.style.color = "blue";
        this.starts.play();

      
    }else{
        this.test = false;
        this.icoo.style.color = "black";
        this.starts.pause();

        

    }
}
}
onload = new icons();


//  ////////////////////////////////////////////////////////

class icons1 {

    constructor (){
        this.end1 =document.getElementById('end1')
         this.icoo1 = document.getElementById('icoo1');
         this.test1;
         this.starts1 = document.getElementById('starts1');
         this.end1.addEventListener ("click", ()=> {
         
            this.icona1()
  

         });

         this.icona1()
    }

icona1(){

    if(this.test1 == false){

        this.test1 = true;
        this.icoo1.style.color = "blue";
        this.starts1.play();

      
    }else{
        this.test1 = false;
        this.icoo1.style.color = "black";
        this.starts1.pause();
      


        

    }
}
}
onload = new icons1();
