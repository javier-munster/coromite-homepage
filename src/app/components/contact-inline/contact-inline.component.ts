import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
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
    isSubmitValidationFail = false;
    submitState: SubmitState = SubmitState.initial;

    constructor(private contactService: ContactService) { }

    ngOnInit(): void {
    }

    isValid(): boolean {
        this.isSubmitValidationFail = this.firstName.invalid || !!this.lastName.invalid || this.email.invalid || !!this.message.invalid;

        console.log("Contact us submit failed validation?", this.isSubmitValidationFail);

        return this.isSubmitValidationFail;
    }

    submit() {
        if (this.submitState === SubmitState.submitting) {
            return;
        }

        if (!this.isValid()) {
            return;
        }

        this.isSubmitValidationFail = false;
        this.submitState = SubmitState.submitting;

        this.contactService.postMessage({
            firstName: this.firstName.value,
            lastName: this.lastName.value,
            email: this.email.value.toLowerCase(),
            message: this.message.value
        }).subscribe((res) => {
            this.submitState = SubmitState.success;
            console.log("Message sent successfully", res);
        }, (err) => {
            this.submitState = SubmitState.error;
            console.error("Message failed to send:", err);
        });
    }
}
