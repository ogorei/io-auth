# Ionic React + Capacitor + Auth0 Sample

現状
iOS => auth0-spa-js (ERROR Displaying)
android  => Running

＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿


This sample demonstrates authentication with Auth0 in an [Ionic React](https://ionicframework.com/react) application.

## Development guide

Build the sample:

```
npm run build
```

## Configure the sample

The sample needs to be configured with your Auth0 Client ID and Domain.

### Create a free account in Auth0

1. Go to [Auth0](https://auth0.com) and click Sign Up.
2. Use Google, GitHub, or Microsoft Account to login.

### Create an Auth0 Application

You will need to create a Single Page Application using the [Auth0 Dashboard](https://manage.auth0.com). This will give you a Domain, Client ID, and Client Secret you will need below.

### Configure Credentials

Your project needs to be configured with your Auth0 Domain and Client ID for the authentication flow to work. These values can be retrieved from the settings page of your Auth0 application.

Copy `src/auth.config.ts.example` into a new file in the same folder called `auth.config.ts`, and replace the values with your Auth0 application credentials:

```js
export const domain = "{DOMAIN}";
export const clientId = "{CLIENT_ID}";
```

### Configure the Auth0 Application

Add the following to your **Allowed Callback URLs** settings:

```text
com.auth0.samples://{DOMAIN}/capacitor/com.auth0.samples/callback
```

Add the following to your **Allowed Logout URLs** settings:

```text
com.auth0.samples://{DOMAIN}/capacitor/com.auth0.samples/callback
```

If running on a desktop browser, add the following to your **Allowed Web Origins** settings:

```
http://localhost:3000
```

If running on a mobile device, add the following to your **Allowed Origins (CORS)** settings:

```
capacitor://localhost
```

### Run on the desktop

Start the app in local browser:

```
npm start
```

### Run on a native platform

Sync assets and run:

```
# ios
npx cap run ios

# android
npx cap run android
```

