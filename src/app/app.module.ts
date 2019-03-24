import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule, MatSidenavModule, MatListModule } from '@angular/material';
import { CurriculumComponent } from './curriculum/curriculum.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    CurriculumComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
