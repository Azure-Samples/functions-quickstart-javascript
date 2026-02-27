const { app } = require('@azure/functions');

app.http('httpTrigger', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || (await request.text());
        const responseMessage = name
            ? `Hello, ${name}. This HTTP triggered function executed successfully.`
            : 'This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.';

        return { body: responseMessage };
    }
});
