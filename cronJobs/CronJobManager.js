const config = require('config');

class CronJobManager {

  static registerCronJobs () {

    setInterval(() => { console.log(" Working job") }, config.intervals.testInterval);

  }

}

module.exports = CronJobManager;
