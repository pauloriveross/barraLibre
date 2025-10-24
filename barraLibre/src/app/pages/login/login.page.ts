import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,IonInput } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [ IonContent, CommonModule, FormsModule,IonInput]
})
export class LoginPage implements OnInit {

  private router = inject(Router);

  constructor() { }

  ngOnInit() {
  }

  navRegistro(){
    this.router.navigateByUrl("register");
  } 

}
