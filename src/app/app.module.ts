import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PeopleFilterPipe } from './people-filter.pipe';
import { PeopleSorterPipe } from './people-sorter.pipe';
import { StickyModule } from 'ng2-sticky-kit/ng2-sticky-kit';


@NgModule({
  declarations: [
    AppComponent,
    PeopleFilterPipe,
    PeopleSorterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StickyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
