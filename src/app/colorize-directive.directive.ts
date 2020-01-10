import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorizeDirective]'
})
export class ColorizeDirectiveDirective {

  @Input() color: String="FFBBCC";

  constructor(private e1: ElementRef) { 

    this.e1.nativeElement.style.backgroundColor= '#'+this.color;
    //this.e1.nativeElement.= 'orange';
  }


  @HostListener('mouseenter') onmouseenter(){
    this.e1.nativeElement.style.backgroundColor= '#'+this.color;
  }

}
