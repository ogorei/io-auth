import { isPlatform } from "@ionic/react";

// export const domain = "https://lzg2dndj.auth.dev.upbond.io";
// export const clientId = "kgOcktiFuBQBClNDDR9fv";
export const domain = "lzg2dndj.auth.dev.upbond.io";
export const clientId = "oAeCJpgBY9lqJnMZ5ReFx";
const appId = "com.auth0.samples";

const auth0Domain = domain;
const iosOrAndroid = isPlatform('ios') || isPlatform('android');
if(iosOrAndroid){
  console.log(isPlatform)
}

// export const callbackUri = 'http://localhost:3000';

const unsupportedURL = 'com.auth0.samples://lzg2dndj.auth.dev.upbond.io/capacitor/com.auth0.samples/callback'
const supportedURL = 'http://localhost:8100'


export const callbackUri = unsupportedURL
