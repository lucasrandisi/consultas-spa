import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './shared/header/header.component';
import { httpInterceptorProviders } from './shared/interceptors/http-interceptor-provider';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './materias/components/listar-materias/pipe';
import { MatTableModule } from '@angular/material/table'
import {MatSortModule} from '@angular/material/sort';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FilterPipe
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		FormsModule,
		MatTableModule,
		MatSortModule
	],
	providers: [
		httpInterceptorProviders,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
