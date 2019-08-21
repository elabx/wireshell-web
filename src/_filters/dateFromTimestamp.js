const { DateTime } = require("luxon");

module.exports = timestamp => {
  return DateTime.fromISO(timestamp, { zone: 'utc' }).toJSDate()
};
