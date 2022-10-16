let CronJob = require('node-cron');

async function test() {
    const scheduledJobFunction = CronJob.schedule("* * * * *", () => {
        console.log("I'm executed on a schedule!");
    });
    
    scheduledJobFunction.start();
}

module.exports = {
    test
}