import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]]
    })
  }
  get name(){
    return this.contactForm.get("name");
  }
  get email(){
    return this.contactForm.get("email");
  }
  get number(){
    return this.contactForm.get("number");
  }
  get subject(){
    return this.contactForm.get("subject");
  }
  get message(){
    return this.contactForm.get("message");
  }
  onClick(){
    alert(`Thanx you ${this.contactForm.value.name} For message will get back to you soon!!!`);
    this.contactForm.reset();
  }
}
