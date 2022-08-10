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



     }

     execBtn(value){

      switch (value){

         case 'C':
            this.clearAll();
            break;

         case 'CE':
            this.clearAll();
            break;

         case '-':
            this.clearAll();
            break; 
            
         case '+':
            this.clearAll();
            break;
            
         case '/':
            this.clearAll();
            break;

         case '*':
            this.clearAll();
            break;

         case '=':
            this.clearAll();
            break;

         case '%':
            this.clearAll();
            break;

         case '':
            this.clearAll();
            break;

            default:
               this.setError();
               break;
      }
     }

     initButtonsEvents(){

      let buttons = document.querySelectorAll(".row > button");  

      buttons.forEach((btn, index)=>{

         this.addEventListenerAll(btn, "click drag", e =>{
           let textBtn = btn.textContent;

           this.execBtn();
         });

         this.addEventListenerAll(btn, "mouseover mouseup mousedown", e =>{

            btn.getElementsByClassName.cursor = "pointer";

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