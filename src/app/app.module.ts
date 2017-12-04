import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SideboxComponent } from './components/sidebox/sidebox.component';
import { EditorComponent } from './components/editor/editor.component';
import { ConsoleComponent } from './components/console/console.component';
import { ProductionComponent } from './components/sidebox/production/production.component';
import { ParseTableComponent } from './components/parse-table/parse-table.component';
import { FormsModule } from '@angular/forms';
import { AceEditorModule } from 'ng2-ace-editor';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SideboxComponent,
    EditorComponent,
    ConsoleComponent,
    ProductionComponent,
    ParseTableComponent,
    FooterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AceEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
