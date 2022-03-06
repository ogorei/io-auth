import { isPlatform } from "@ionic/react";

// export const domain = "https://lzg2dndj.auth.dev.upbond.io";
// export const clientId = "kgOcktiFuBQBClNDDR9fv";
export const domain = "dev-f40qx9bl.jp.auth0.com";
export const clientId = "npDRfnk3TR09p7XPZWHddDlRYWCE5yLz";
const appId = "com.auth0.samples";

const auth0Domain = domain;
const iosOrAndroid = isPlatform('ios') || isPlatform('android');

// export const callbackUri = 'http://localhost:3000';

const unsupportedURL = `${appId}://${auth0Domain}/capacitor/${appId}/callback`
const supportedURL = 'http://localhost:3000'


export const callbackUri = iosOrAndroid
  ? supportedURL : supportedURL;
