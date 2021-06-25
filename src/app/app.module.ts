import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { HighlightTextDirective } from './directives/highlighttext.directive';
import { RendererHighlightDirective } from './directives/renderer-highlight.directive';



@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    HighlightTextDirective,
    RendererHighlightDirective,

    
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }