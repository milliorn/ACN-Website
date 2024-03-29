const concurrently = require("concurrently");
const path = require("path");

const browserSyncPath = path.resolve(
  path.dirname(__filename),
  "../node_modules/.bin/browser-sync"
);

concurrently(
  [
    {
      command: "node --inspect scripts/sb-watch.js",
      name: "SB_WATCH",
      prefixColor: "bgBlue.bold",
    },
    {
      command: `${browserSyncPath} dist -w --no-online`,
      name: "SB_BROWSER_SYNC",
      prefixColor: "bgBlue.bold",
    },
  ],
  {
    prefix: "name",
    killOthers: [ "failure", "success" ],
  }
).then(success, failure);

function success() { }

function failure() { }
