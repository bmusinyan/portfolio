import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScrollToModule } from "@nicky-lenaers/ngx-scroll-to";

import { MatInputModule, MatFormFieldModule, MatButtonModule, MatCardModule,
		 MatIconModule } from "@angular/material";

import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent	
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FlexLayoutModule,
		ScrollToModule.forRoot(),

		MatInputModule,
		MatFormFieldModule,
		MatButtonModule,
		MatCardModule, 
		MatIconModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
