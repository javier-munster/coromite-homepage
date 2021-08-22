import { ViewportScroller } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { GoogleAnalyticsService } from "ngx-google-analytics";
@Component({
    selector: "app-hero",
    templateUrl: "./hero.component.html",
    styleUrls: ["./hero.component.css"]
})
export class HeroComponent implements OnInit {

    constructor(private viewportScroller: ViewportScroller, private gaService: GoogleAnalyticsService) { }

    ngOnInit(): void {
    }

    scrollToServices(): void {
        this.viewportScroller.scrollToAnchor("services");
        this.gaService.event("hero-navigate", "navigation", "services");
    }
}
