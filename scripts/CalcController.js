class CalcController {

     //classe tem atributos e métodos

     constructor(){ //tudo do construtor é executado automaticamente

         this._displayCalc = "0";

     }

     get displayCalc(){ // get é para registrar

      return this._displayCalc;

     }

     set displayCalc(valor){ //set é para definir uum novo valor
      this.displayCalc = valor;
     }



   }