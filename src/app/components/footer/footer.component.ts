import { Component, OnInit } from "@angular/core";
import { GoogleAnalyticsService } from "ngx-google-analytics";

@Component({
    selector: "app-footer",
    templateUrl: "./footer.component.html",
    styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
    constructor(private gaService: GoogleAnalyticsService) { }

    ngOnInit(): void {
    }

    scrollToTop(): void {
        window.scroll(0, 0);
        this.navigateTo("home");
    }

    navigateTo(destination: string) {
        this.gaService.event("footer_navigation", "navigation", destination);
    }
}
