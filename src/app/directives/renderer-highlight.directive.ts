import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRendererHighlight]'
})
export class RendererHighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') color!: string;
  constructor(private element: ElementRef, private renderer:Renderer2) { }

  ngOnInit(){

  }

  @HostListener('mouseenter') onMouseOver(evetn:Event){
    this.color='MediumSpringGreen';
  }

  @HostListener('mouseleave') onmMuseLeave(evetn:Event){
    this.color='skyblue';
  }

  @HostListener('click') onClick(evetn:Event){
    this.color='Cyan';
    
  }

}

