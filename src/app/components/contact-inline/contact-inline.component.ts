import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
    selector: "app-contact-inline",
    templateUrl: "./contact-inline.component.html",
    styleUrls: ["./contact-inline.component.css"]
})
export class ContactInlineComponent implements OnInit {
    email = new FormControl("", [ Validators.required, Validators.email ]);
    firstName = new FormControl("", [ Validators.required ]);
    lastName = new FormControl("", [ Validators.required ]);
    message = new FormControl("", [ Validators.required ]);

    constructor() { }

    ngOnInit(): void {
    }

    getErrorMessage() {
        return this.email.hasError("required") ? "You must enter a value" : "";
        return this.email.hasError("email") ? "Not a valid email" : "";
    }
}
