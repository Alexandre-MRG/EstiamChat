"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chat_server_1 = require("./chat-server");
const functions = require("firebase-functions");
let app = new chat_server_1.ChatServer().getApp();
// Automatically allow cross-origin requests

// Expose Express API as a single Cloud Function:
exports.widgets = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
