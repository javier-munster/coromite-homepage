import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatDividerModule } from "@angular/material/divider";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from "ngx-google-analytics";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ServicesComponent } from "./components/services/services.component";
import { HeroComponent } from "./components/hero/hero.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { ContactInlineComponent } from "./components/contact-inline/contact-inline.component";
import { MembersComponent } from "./components/members/members.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { ScullyLibModule } from '@scullyio/ng-lib';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ServicesComponent,
        HeroComponent,
        FooterComponent,
        HomePageComponent,
        ContactInlineComponent,
        MembersComponent,
        AboutUsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgxGoogleAnalyticsModule.forRoot("G-SS73J651NQ"),
        NgxGoogleAnalyticsRouterModule,
        NoopAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        FlexLayoutModule,
        MatDividerModule,
        MatCardModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatProgressSpinnerModule,
        ScullyLibModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
