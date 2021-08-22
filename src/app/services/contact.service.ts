import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ContactUsForm } from "../models/contact-us-form";

@Injectable({
    providedIn: "root"
})
export class ContactService {
    private readonly COROMITE_EMAIL_ENDPOINT = "https://www.coromite.com/contact-us";

    constructor(private http: HttpClient) { }

    postMessage(data: ContactUsForm) {
        return this.http.post(this.COROMITE_EMAIL_ENDPOINT, data);
    }
}
