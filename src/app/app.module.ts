import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SideboxComponent } from './components/sidebox/sidebox.component';
import { EditorComponent } from './components/editor/editor.component';
import { ConsoleComponent } from './components/console/console.component';
import { GrammarItemComponent } from './components/sidebox/grammar-item/grammar-item.component';
import { ParseTableComponent } from './components/parse-table/parse-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SideboxComponent,
    EditorComponent,
    ConsoleComponent,
    GrammarItemComponent,
    ParseTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
