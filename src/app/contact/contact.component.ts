import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser'; 
import { LanguageService } from '../services/language.service';
import { data } from '../data/data-list';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  lang: 'hu' | 'en';

  constructor(private languageService: LanguageService)
  {
    this.lang = this.languageService.language.value;
    this.languageService.language.subscribe(() => this.lang = this.languageService.language.value);
  }

  data = data;

  contactForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
    name: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
    recaptcha: new FormControl('', [Validators.required]),
  })

  email: AbstractControl<any, any> = this.contactForm.controls['email'];
  name: AbstractControl<any, any> = this.contactForm.controls['name'];
  message: AbstractControl<any, any> = this.contactForm.controls['message'];
  recaptcha: AbstractControl<any, any> = this.contactForm.controls['recaptcha'];

  formSent: boolean = false;
  formArrived: boolean = false;
  formError: string | undefined;

  captchaSiteKey: string = "6LdRKhAmAAAAAPSSeu46lyKbVHkpeFq3CVTwRJ6M";
  service_id: string = "nhely_gkeu";
  template_id: string = "template_ytikcwg";
  public_key: string = "NBSRAq8MLz1ScNjTr";
  

  // A szerverről érkező válaszüzenetek (pl sikeres bejelentkezés / hibás email) alapértelmezettre visszaállítása
  resetResponseMessages()
  {
    this.formError = ""; 
    this.formSent = false;
    this.formArrived = false;
  }

  async submitContactForm()
  {
    Object.keys(this.contactForm.controls).forEach(x => {
      this.contactForm.get(x)?.markAsTouched();
    })

    this.resetResponseMessages();

    if(this.contactForm.invalid) return;

    const args = {
      from_email: this.email.value,
      from_name: this.name.value,
      message: this.message.value
    };

    this.formSent = true;

    try {
      const res: EmailJSResponseStatus = await emailjs.send(this.service_id, this.template_id, args, this.public_key);
      this.formArrived = true;
    } catch (error: any) {
      if (error.status && error.text) {
        this.formError = error.text;
        this.formSent = false;
      } else {
        this.formError = "Ismeretlen hiba történt az üzenet elküldése közben.";
        this.formSent = false;
      }
    }
  }

}
