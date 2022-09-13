require('dotenv').config({})

const path = require('path')
const argv = require('minimist')(process.argv.slice(2));
const handler = require(path.join(__dirname, argv.lambdaPath)).handler
const eventPayload = require(path.join(__dirname, argv.eventPath))


handler(eventPayload, {} as any)
    .then((response: any) => console.log({ response }))
    .catch((error: any) => console.error({ error }))