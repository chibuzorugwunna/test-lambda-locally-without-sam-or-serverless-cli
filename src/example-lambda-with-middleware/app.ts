import middy from "@middy/core"
import { APIGatewayEvent } from 'aws-lambda'

const ExampleMiddleware = () => ({
    before: () => {
        console.log('*** Example Middleware was fired with payload ***')
    }
})

export const handler = middy(async (event: APIGatewayEvent) => {
    const { name } = JSON.parse(event.body as string)

    return {
        message: "Hello with middleware: " + name
    }
}).use(ExampleMiddleware())

