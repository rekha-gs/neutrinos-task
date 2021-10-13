/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import {FormBuilder,Validators} from '@angular/forms';
import {formdata} from 'app/sd-services/formdata';

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-loginpage',
    templateUrl: './loginpage.template.html'
})

export class loginpageComponent extends NBaseComponent implements OnInit {
    sampleform;

    constructor(private fb:FormBuilder,public fs:formdata) {
        super();
    }

    ngOnInit() {
        /* create login form */
        this.sampleform=this.fb.group({
          name:['',Validators.required],
            email:['',[Validators.required,Validators.email,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
            phonenumber:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
            dob:['',Validators.required],
            address:['',Validators.required],
            pincode:['',Validators.required],
            city:['',Validators.required],
            state:['',Validators.required]  
        })
    }

    /* submit form */
    async onSubmit(){
        console.log('Form Details', this.sampleform.value);
        var userinfo=this.sampleform.value;
        await(this.fs.formdata(userinfo))
        /* reset the form */
        this.sampleform.reset();
        // alert('Submitted the form successfully!');
    }
}
