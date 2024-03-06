import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { authInterceptor } from './demo-interceptor/auth.interceptor';
import { DemoInterceptorComponent } from './demo-interceptor/demo-interceptor.component';
import { DemoResolverComponent } from './demo-resolver/demo-resolver.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoResolverComponent,
    DemoInterceptorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient(withInterceptors([authInterceptor]))

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
