import { ViewportScroller } from "@angular/common";
import { Component, OnInit } from "@angular/core";
@Component({
    selector: "app-hero",
    templateUrl: "./hero.component.html",
    styleUrls: ["./hero.component.css"]
})
export class HeroComponent implements OnInit {

    constructor(private viewportScroller: ViewportScroller) { }

    ngOnInit(): void {
    }

    scrollToServices(): void {
        this.viewportScroller.scrollToAnchor("services");
    }
}
