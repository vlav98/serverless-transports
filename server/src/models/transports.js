const AWS = require('../../config/config')

const docClient = new AWS.DynamoDB.DocumentClient();

let params = {
    TableName : 'Transport'
}

class Transport {
    /**
     * Get all items
     */
    static get(callback) {
        docClient.scan(params, function (err, data) {
            if (err) {
                console.log("error : ", err);
            } else {
                callback(data);
            }
        });
    }
}