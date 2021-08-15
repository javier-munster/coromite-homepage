import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ContactService } from "src/app/services/contact.service";

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

    constructor(private contactService: ContactService) { }

    ngOnInit(): void {
    }

    isValid(): boolean {
        this.isSubmitFail = this.firstName.invalid || !!this.lastName.invalid || this.email.invalid || !!this.message.invalid;

        console.log("Contact us submit failed validation?", this.isSubmitFail);

        return this.isSubmitFail;
    }

    submit() {
        if (!this.isValid()) {
            return;
        }

        this.contactService.postMessage({
            firstName: this.firstName.value,
            lastName: this.lastName.value,
            email: this.email.value.toLowerCase(),
            message: this.message.value
        }).subscribe((res) => {
            console.log("Message sent successfully", res);
        }, (err) => {
            console.error("Message failed to send:", err);
        });
    }
}
