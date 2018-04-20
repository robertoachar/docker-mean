import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRouting } from './app.routing';
import { CoreModule } from './core/core.module';
import { UserModule } from './users/user.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    UserModule,
    AppRouting
  ],
  declarations: [AppComponent, PageNotFoundComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
