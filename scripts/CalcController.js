class CalcController {

     //classe tem atributos e métodos

     constructor(){ //tudo do construtor é executado automaticamente

         this._displayCalcEl = document.querySelector("#display"); //foi colocado o elemento referido a direita dentro da variável a esquerda
         this.initialize(); //metodo -- é igual função --
         this.initButtonsEvents();//chamando função no construtor
         this._operation = []; 

     }

     initialize(){ //metodo

     }

     addEventListenerAll(element, events, fn){ //metodo

      events.split(' ').forEach(event => {
         element.addEventListener(event, fn, false);
      });

     }

     clearAll(){ //metodo
      this._operation = [];
     }

     clearEntry(){ //metodo //teste commit
      this._operation.pop();
     }

     addOperation (value){ //metodo
      this._operation.push(value);
      console.log(this._operation);
     }

     setError(){ //metodo
      this.displayCalc = "Error";
     }

     execBtn(value){

      switch (value){

         case 'C':
            this.clearAll();
            break;

         case 'CE':
            this.clearEntry();
            break;

         case '-':
            
            break; 
            
         case '+':
            
            break;
            
         case '/':
            
            break;

         case '*':
            
            break;

         case '=':
            
            break;

         case '%':
            
            break;

         case '0':
         case '1':
         case '2':
         case '3':
         case '4':
         case '5':
         case '6':
         case '7':
         case '8':
         case '9': 
            this.displayCalc.addEventListener("click", )
            //this.addOperation(parseInt(value)); 
            break;

         default:
            this.setError();
            break;
      }
     }

     initButtonsEvents(){

      let buttons = document.querySelectorAll(".row > #btn1");  

      buttons.forEach(btn=>{

         btn.addEventListenerAll("click", e => {
           console.log(e);
         });

         
      });
   }



     get displayCalc(){

        return this._displayCalcEl.innerHTML; //retorna o valor que está setado acima

     }

     set displayCalc(valor){

         this._displayCalcEl.innerHTML = valor; //insere no html o valor que foi recebido

     }
    
}