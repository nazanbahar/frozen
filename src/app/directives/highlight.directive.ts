// import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';


// @Directive({
//   selector: '[appHighlight]'
// })
// export class HighlightDirective {

//   constructor(private el:ElementRef, private renderer:Renderer2) {
//     //el.nativeElement.style.backgroundColor='green';
//     renderer.setStyle(el.nativeElement, 'backgroundColor','yellow');
//   }



// }


// step2
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
 
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
 
  constructor(private el: ElementRef) { }
 
  @Input()
  defaultColor!: string;
 
  @Input('appHighlight')
  highlightColor!: string;
 
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }
 
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight("");
  }
 
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}