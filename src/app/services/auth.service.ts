import { Injectable } from '@angular/core';
import { Auth, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  currentUser!: any;

  async login() {
    try {
      const credential = await signInWithPopup(
        this.auth,
        new GoogleAuthProvider(),
      );
      console.log(credential);
      this.currentUser = credential.user;
    } catch (error) {
      console.error('Error during login:', error);
    }
  }

  async logout() {
    await this.auth.signOut();
    this.currentUser = null;
  }
}
