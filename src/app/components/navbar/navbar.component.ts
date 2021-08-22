import { Component, OnInit } from "@angular/core";
import { GoogleAnalyticsService } from "ngx-google-analytics";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {

    constructor(private gaService: GoogleAnalyticsService) { }

    ngOnInit(): void {
    }

    scrollToTop(): void {
        window.scroll(0, 0);
        this.navigateTo("home");
    }

    navigateTo(destination: string) {
        this.gaService.event("nav_navigation", "navigation", destination);
    }
}
