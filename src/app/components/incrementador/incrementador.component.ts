import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit{
  ngOnInit() { //Solo se hace una vez
    
    this.btnClass = `btn ${ this.btnClass }`;
  }

  @Input('miprogreso') progreso: number = 30; //Con Input Puede recibir el dato desde el padre template
  @Input() btnClass: string = "btn btn-primary";

  //
  @Output() valorSalida: EventEmitter <number> = new EventEmitter();

  // get getPorcentaje() {
  //   return `${ this.progreso}%`;
  // }

  cambiarValor( valor: number ){

    this.progreso = this.progreso + valor;

    // No hace incremento si progreso ya es 100
    if ( this.progreso >= 100 && valor >= 0) {
      this.progreso = 100;
    } 

    // No hace decremento si progreso ya es 0
    if ( this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
    }                
    
    this.valorSalida.emit(this.progreso);
  }

  onChange( valor: number ){
    //console.log(valor);

    this.valorSalida.emit( valor );

  }

}
