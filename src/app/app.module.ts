import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SideboxComponent } from './components/sidebox/sidebox.component';
import { EditorComponent } from './components/editor/editor.component';
import { ConsoleComponent } from './components/console/console.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SideboxComponent,
    EditorComponent,
    ConsoleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
