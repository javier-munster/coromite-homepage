import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
    selector: "app-contact-inline",
    templateUrl: "./contact-inline.component.html",
    styleUrls: ["./contact-inline.component.css"]
})
export class ContactInlineComponent implements OnInit {
    firstName = new FormControl("", [ Validators.required ]);
    lastName = new FormControl("", [ Validators.required ]);
    email = new FormControl("", [ Validators.required, Validators.email ]);
    message = new FormControl("", [ Validators.nullValidator ]);
    submitFailed = false;

    constructor() { }

    ngOnInit(): void {
    }

    getErrorMessage() {
        // return this.email.hasError("required") ? "You must enter a value" : "";
        return this.email.hasError("email") ? "Not a valid email" : "";
    }

    submit() {
        this.submitFailed = this.firstName.invalid || !!this.lastName.invalid || this.email.invalid || !!this.message.invalid;

        console.log("Contact us submit failed validation?", this.submitFailed);
    }
}
