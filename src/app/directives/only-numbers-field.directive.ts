import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appOnlyNumbersField]'
})
export class OnlyNumbersFieldDirective {
  @Input('allowDecimals') allowDecimals: boolean = false;
  validCharacters: Array<string> = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight'
  ];

  constructor(private hostElement: ElementRef) { }

  @HostListener('keydown', ['$event']) onKeyDown(e: KeyboardEvent) {   //Se oyen los eventos al presionar una tecla
    if (this.allowDecimals) {
      this.validCharacters.push(',', '.');                             //Si se permiten los decimales agregar los simbolos
    }
    if (this.validCharacters.find(v => v === e.key)) {                 //Verificar si el caracter ingresado esta entre el array de indice
      return true;                                                     //Si esta, devolver true y dejar que ingrese el caracter
    } else {
      e.preventDefault();                                              //De lo contrario denegar la accion
      return false;
    }
  }

}
