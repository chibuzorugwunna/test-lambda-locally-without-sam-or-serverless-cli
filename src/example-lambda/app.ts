import { APIGatewayEvent } from "aws-lambda"

export const handler = async (event: APIGatewayEvent) => {
    const { name } = JSON.parse(event.body as any)

    return {
        message: "Hello: " + name
    }
}