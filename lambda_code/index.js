var firebase = require("firebase");

firebase.initializeApp({
  // path where you saved your firebase credentials
  // you can do the same inline: https://firebase.google.com/docs/server/setup
  serviceAccount: "./credentials.json",
  // reference your application
  databaseURL: "https://< your application >.firebaseio.com"
});

exports.handler = (event, context, callback) => {
    var uid = context.awsRequestId;
    var customToken = firebase.auth().createCustomToken(uid);

    callback(null, customToken);
};