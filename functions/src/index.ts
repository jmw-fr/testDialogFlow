import { dialogflow } from "actions-on-google";
import functions = require('firebase-functions');

import { DefaultIntents } from './intents/default';
import { LoginIntents } from './intents/login';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const app = dialogflow({debug: true});

app.intent('Default Welcome Intent', DefaultIntents.welcome);
app.intent('Default Fallback Intent', DefaultIntents.welcome);
app.intent('ask_for_sign_in', LoginIntents.AskForSignIn);
app.intent('Get Signin', LoginIntents.GetSignin);

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);