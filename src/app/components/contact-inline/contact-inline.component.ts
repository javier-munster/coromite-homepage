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
    isSubmitFail = false;

    constructor() { }

    ngOnInit(): void {
    }

    submit() {
        this.isSubmitFail = this.firstName.invalid || !!this.lastName.invalid || this.email.invalid || !!this.message.invalid;

        console.log("Contact us submit failed validation?", this.isSubmitFail);

        if (this.isSubmitFail) {
            return;
        }
    }
}
