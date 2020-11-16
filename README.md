# firebase-aws-cognito-auth
Authenticate with AWS Cognito and AWS Lambda Firebase Users


## Use case

1. User signs up/logs into your Application with AWS Cognito.

2. User recieves temporary AWS Access Tokens from AWS Cognito to be able to call the Token Server (Lambda Function).

3. With the AWS Access Tokens the User is able to execute the AWS Lamdba Function. It returns a Firebase Token.

4. With the recieved Token the User authenticates Firebase

<img src="https://static.swimlanes.io/f895a007f1e9e12044561e89d0813fae.png"/>

## How to get started

Got to the [Firebase Console](https://console.firebase.google.com/) and create a new Firebase App.
Next add Firebase to your Web App. Get your credentials and copy paste them to `main.html`

<img width="300px" height="auto" src="https://cloud.githubusercontent.com/assets/3428184/17744403/d28e5442-64a7-11e6-8e22-955986094fb5.png"/>


In order to create custom authentication tokens. You will set up a AWS Lambda Function with the name `createFirebaseToken`.
It is a Node.JS Lambda Function. The source code you can find in the folder `lambda_code`. 

In order that Lambda is allowed to create tokens for you, you will have to configure it with your Firebase Credentials. You will recieve the Server-Credentials by following this [tutorial](https://firebase.google.com/docs/server/setup). When you have successfully created a Firebase Service Account for your Lambda Code. You can download the credentials in a `json`-formatted file. Copy this file into `lambda_code` with the filename `credentials.json`. Furthermore in `lambda_code/index.js` you have to set your Firebase database-url.

Now that your Lambda Function is authorized, Zip the contents of the `lambda_code` folder and upload it to your `createFirebaseToken`-named Lambda Function. In your Lambda Function set `index.handler` as Handler.

Check out if you configured the Lambda Function correctly by running it manually from the console. You should get an token as console output:

<img width="500px" height="auto" src="https://cloud.githubusercontent.com/assets/3428184/17745480/30738ccc-64ac-11e6-87fa-2e821e82642a.png" />

Now that your Token Server (Lambda Function) is set up, you can authorize your users with AWS Cognito for Firebase.
How to build a AWS Cognito Log in / Sign up for your Application you can see in this [demo application](https://github.com/emmanuelmillionaer/aws-cognito-js-login). 


To demonstrate how the composition would work for a authorized AWS Cognito User with AWS accces, for now we will simply create a IAM User with a inline policy attached to be able call the Token Lambda Function.

<img width="300px" height="auto" src="https://cloud.githubusercontent.com/assets/3428184/17746037/94d27406-64ae-11e6-83a3-7492ef2fdc92.png" />

For demo purposes we hard code his credentials 'accessKeyId, secretAccessKey' into `main.html`.  (DON'T DO THIS IN PRODUCTION)

Now when you open `main.html` in the Browser. The code should get a token from your Lambda Function, and authorize with it Firebase. Authorized correctly your code will write to a table in Firebase.

<img height="auto" width="300px" src="https://cloud.githubusercontent.com/assets/3428184/17746260/9fcb4cba-64af-11e6-940f-4bb2c185fa63.png" />


## Links

[Authenticate with Firebase in JavaScript Using a Custom Authentication System](https://firebase.google.com/docs/auth/web/custom-auth)

[Create Custom Tokens](https://firebase.google.com/docs/auth/server/create-custom-tokens)

[Add Firebase to your App (in our case AWS Lambda)](https://firebase.google.com/docs/server/setup)


