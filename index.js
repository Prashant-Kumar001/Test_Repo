exports.handler = async (event, context) => {
    try {
        const success = true; 

        if (success) {
            const response = {
                statusCode: 200,
                body: JSON.stringify('Hello from Lambda!'),
            };
            return response; 
        } else {
            throw new Error('Something went wrong'); 
        }
    } catch (err) {
        const errorResponse = {
            statusCode: 500,
            body: JSON.stringify({ message: err.message }),
        };
        return errorResponse; 
    }
};

if (require.main === module) {
    (async () => {
        const event = {};
        const context = {};

        const result = await exports.handler(event, context);
        console.log('Lambda Output:', result);
    })();
}
