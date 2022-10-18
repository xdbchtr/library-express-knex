let CronJob = require('node-cron');
const sendResponse = require("../resources/responseApi")

async function test(req, res) {
    const scheduledJobFunction = CronJob.schedule("* * * * *", () => {
        console.log("Cron is Running!");
    });
    
    scheduledJobFunction.start();
    res.status(200).send(sendResponse.successGet(1))
}

module.exports = {
    test
}