import { Component, Inject, OnInit } from '@angular/core';
import { OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { Router } from '@angular/router';
// @ts-ignore
import * as OktaSignIn from '@okta/okta-signin-widget';

import myAppConfig from '../../config/my-app-config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  oktaSignin: any;

  constructor(private _router: Router, @Inject(OKTA_AUTH) private oktaAuth: OktaAuth) { 

    console.log(myAppConfig.oidc.clientId);

    this.oktaSignin = new OktaSignIn({
      logo: 'assets/images/sportyshoeslogo.jpg',
      baseUrl: myAppConfig.oidc.issuer.split('/oauth2')[0],
      clientId: myAppConfig.oidc.clientId,
      redirectUri: myAppConfig.oidc.redirectUri,
      authParams: {
        pkce: true,
        issuer: myAppConfig.oidc.issuer,
        scopes: myAppConfig.oidc.scopes
      }
    });

  }

  ngOnInit(): void {
    this.oktaSignin.remove();
    console.log("ngOnInit!!!")

    this.oktaSignin.renderEl({
      el: '#okta-sign-in-widget'}, // this name should be same as div tag id in login.component.html
      (response: any) => {
        if (response.status === 'SUCCESS') {
          console.log("LOGIN!!!")
          this.oktaAuth.signInWithRedirect().then(
            _ => this._router.navigate(['products'])
          );
        }
      },
      (error: any) => {
        console.log("ERROR!!!")
        throw error;
      }
    );
  }

}
