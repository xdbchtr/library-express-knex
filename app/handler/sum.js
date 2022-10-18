let CronJob = require('node-cron');

async function test() {
    const scheduledJobFunction = CronJob.schedule("* * * * *", () => {
        console.log("Cron is Running!");
    });
    
    scheduledJobFunction.start();
}

module.exports = {
    test
}