import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { DialogModule } from './dialog/dialog.module';

@NgModule({
  imports:      [ BrowserModule, DialogModule ],
  declarations: [ AppComponent, ExampleComponent ],
  entryComponents: [ExampleComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
