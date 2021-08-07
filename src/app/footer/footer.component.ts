import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-footer",
    templateUrl: "./footer.component.html",
    styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
    currentYear = (new Date()).getFullYear();

    constructor() { }

    ngOnInit(): void {
        if (this.currentYear < 2021) {
            this.currentYear = 2021;
        }
    }

}
