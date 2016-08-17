# firebase-aws-cognito-auth
Authenticate with AWS Cognito and AWS Lambda Firebase Users


## How to get started

Got to the [Firebase Console](https://console.firebase.google.com/) and create a new Firebase App.
Next add Firebase to your Web App. Get your credentials and copy paste them to `main.html`

<img width="300px" height="auto" src="https://cloud.githubusercontent.com/assets/3428184/17744403/d28e5442-64a7-11e6-8e22-955986094fb5.png"/>


In order to create custom authentication tokens. You will set up a AWS Lambda Function with the name `createFirebaseToken`.
It is a Node.JS Lambda Function. The source code you can find in the folder `lambda_code`. 

In order that Lambda is allowed to create tokens for you, you will have to configure it with your Firebase Credentials. You will recieve the Server-Credentials by following this [tutorial](https://firebase.google.com/docs/server/setup). When you have successfully created a Firebase Service Account for your Lambda Code. You can download the credentials in a `json`-formatted file. Copy this file into `lambda_code` with the filename `credentials.json`. 

Now that your Lambda Function is authorized, Zip the contents of the `lambda_code` folder and upload it to your `createFirebaseToken`-named Lambda Function.
