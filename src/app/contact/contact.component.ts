import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as emailjs from 'emailjs-com';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    // init,alization
    public contactform:FormGroup;

    public errormsg:String;

    public waiting:boolean;

    constructor(private _formbuilder: FormBuilder) {
        //
        this.resetContactForm();
    }

    ngOnInit() {}

    resetContactForm() {
        this.contactform = this._formbuilder.group({
            name: ['', Validators.required],
            subject: ['', Validators.required],
            message: ['', Validators.required]
        });
    }

    sendEmail() {
        if (this.contactform.valid) {
            const params = {
                subject: this.contactform.value.subject,
                name: this.contactform.value.name,
                message: this.contactform.value.message
            };
            const serviceid = "gmail";
            const templateid = "tecxonic_message";
            const userid = "user_DgCYPIaL8brGqXblWALv9";

            this.waiting = true;
            emailjs.send(serviceid, templateid, params, userid)
                .then(response => {
                    this.errormsg = "Email was successfully sent";
                    this.waiting = false;
                    window.setTimeout(() => this.errormsg = '', 2000);
                }, err => {
                    this.waiting = false;
                    this.errormsg = err;
                });
        } else {
            this.errormsg = "All the fields are required!";
        }
    }
}
