import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideAnimationsAsync(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'fir-web24a-hn-89d4d',
        appId: '1:240888615951:web:ea036ed6ff70f781c8bf7a',
        storageBucket: 'fir-web24a-hn-89d4d.appspot.com',
        apiKey: 'AIzaSyBSDWx0e75KeOecyOsVme445C6qaxpSP88',
        authDomain: 'fir-web24a-hn-89d4d.firebaseapp.com',
        messagingSenderId: '240888615951',
      }),
    ),
    provideAuth(() => getAuth()),
  ],
};
