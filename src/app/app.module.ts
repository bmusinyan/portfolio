import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScrollToModule } from "@nicky-lenaers/ngx-scroll-to";
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators} from '@angular/forms';

import { MatInputModule, MatFormFieldModule, MatButtonModule, MatCardModule,
		 MatIconModule, MatProgressBarModule, MatChipsModule, MatDividerModule } from "@angular/material";

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'projects', component: ProjectsComponent },
	{ path: 'resume', component: ResumeComponent },
	{ path: '**', redirectTo: '' }
];

@NgModule({
	declarations: [
		AppComponent,
		ProjectsComponent,
		ResumeComponent,
		ContactComponent,
		HomeComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FlexLayoutModule,
		ScrollToModule.forRoot(),
		RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
		MatInputModule,
		MatFormFieldModule,
		MatButtonModule,
		MatCardModule,
		MatIconModule,
		MatProgressBarModule,
		MatChipsModule,
		MatDividerModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
