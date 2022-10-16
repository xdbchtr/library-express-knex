let CronJob = require('node-cron');

async function test() {
    const scheduledJobFunction = CronJob.schedule("59 23 * * *", () => {
        console.log("Cron is Running!");
    });
    
    scheduledJobFunction.start();
}

module.exports = {
    test
}