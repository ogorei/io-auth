import { isPlatform } from "@ionic/react";

export const domain = "https://5af212ee.auth.dev.upbond.io";
export const clientId = "mpyrI32eB7-3mvVozFBVM";
const appId = "com.fdcp.app";

// Use `auth0Domain` in string interpolation below so that it doesn't
// get replaced by the quickstart auto-packager
const auth0Domain = domain;
const iosOrAndroid = isPlatform('ios') || isPlatform('android');

// export const callbackUri = 'http://localhost:3000';
export const callbackUri = iosOrAndroid
  ? `${appId}://${auth0Domain}/capacitor/${appId}/callback`
  : 'http://localhost:3000';
