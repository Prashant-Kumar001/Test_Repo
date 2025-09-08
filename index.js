handler = (event, context, callback) => {

    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    const err = {
        statusCode: 500,
        body: JSON.stringify('Error from Lambda!'),
    }
    callback(err, null);
};

const callback = (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
}

const event = {};
const context = {};

handler( event, context, callback )