import { APIGatewayEvent } from 'aws-lambda'

export const handler = async (event: APIGatewayEvent) => {
    const { name } = JSON.parse(event.body as string)

    return {
        message: `Hello with env: ${name}`,
        appName: process.env.APP_NAME,
        stage: process.env.STAGE,
    }
}

