import * as functions from 'firebase-functions'
import * as express from 'express'
import * as cors from 'cors'

import {
	TestController,
} from './controllers'

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

// configure the api endpoints
const app = express()

// Automatically allow cross-origin requests
app.use(cors({ origin: true }))

// Add middleware to authenticate requests
// app.use(myMiddleware)

// declares the submodules
app.use('/test', TestController)

// Expose Express API as a single Cloud Function:
export const api = functions.https.onRequest(app)
