import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { GoogleAnalyticsService } from "ngx-google-analytics";
import { ContactService } from "src/app/services/contact.service";

enum SubmitState {
    initial = "initial",
    submitting = "submitting",
    success = "success",
    error = "error",
};
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
    isSubmitValidationSuccess = true;
    submitState: SubmitState = SubmitState.initial;

    constructor(private contactService: ContactService, private gaService: GoogleAnalyticsService) { }

    ngOnInit(): void {
    }

    isValid(): boolean {
        this.isSubmitValidationSuccess = !(this.firstName.invalid || !!this.lastName.invalid || this.email.invalid || !!this.message.invalid);

        console.log("Contact us submit failed validation?", this.isSubmitValidationSuccess);

        return this.isSubmitValidationSuccess;
    }

    submit() {
        this.gaService.event("submit", "contact-us", this.submitState);
        if (this.submitState === SubmitState.submitting) {
            return;
        }

        if (!this.isValid()) {
            return;
        }

        this.submitState = SubmitState.submitting;
        console.log("Submitting message");
        this.contactService.postMessage({
            firstName: this.firstName.value,
            lastName: this.lastName.value,
            email: this.email.value.toLowerCase(),
            message: this.message.value
        }).subscribe((res) => {
            this.submitState = SubmitState.success;
            console.log("Message sent successfully", res);
            this.gaService.event("submit", "contact-us", "SUCCESS");

        }, (err) => {
            this.submitState = SubmitState.error;
            console.error("Message failed to send:", err);
            this.gaService.event("submit", "contact-us", "FAIL");
        });
    }
}
