import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './shared/header/header.component';
import { httpInterceptorProviders } from './shared/interceptors/http-interceptor-provider';
import { HttpClientModule } from '@angular/common/http';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
  RegistroComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule
	],
	providers: [
		httpInterceptorProviders,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
