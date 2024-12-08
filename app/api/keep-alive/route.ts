export const dynamic = 'force-dynamic' // defaults to auto


const configs = [{
    id: "jesuispal-api",
    disableRandomStringQuery: true,
    allowInsertionAndDeletion: true,
}]


export async function GET() {

    let responseMessage: string = ''

    for (const config of configs) {
        responseMessage += `Results for ${config.id}:\n\n`
    }

    return new Response(responseMessage, {
        status: 200
    })
}
