import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatDividerModule } from "@angular/material/divider";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { NavbarComponent } from "./navbar/navbar.component";
import { ServicesComponent } from "./services/services.component";
import { AboutComponent } from "./about/about.component";
import { HeroComponent } from "./hero/hero.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ServicesComponent,
        AboutComponent,
        HeroComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NoopAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        FlexLayoutModule,
        MatDividerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
