import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ContactInlineComponent } from "./contact-inline.component";

describe("ContactInlineComponent", () => {
    let component: ContactInlineComponent;
    let fixture: ComponentFixture<ContactInlineComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ ContactInlineComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ContactInlineComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
