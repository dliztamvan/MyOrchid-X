// index.js
// MyOrchidX Premium - Entry
const fs = require("fs");
const path = require("path");

// PROTECT modules (auto-run checks)
require("./protect/anti-colong");
require("./protect/anti-crack");

// Error handler (custom message)
process.on("uncaughtException", (err) => {
  console.log("\n⚠️ ERROR TERDETEKSI ⚠️");
  console.log("Eror benerin lu kan Dev🤭");
  console.log(err && err.stack ? err.stack : err);
  process.exit(1);
});

process.on("unhandledRejection", (reason) => {
  console.log("\n⚠️ ERROR REJECT ⚠️");
  console.log("Eror benerin lu kan Dev🤭");
  console.log(reason);
  process.exit(1);
});

// Banner + meta
const banner = require("./src/banner");
const meta = require("./src/metadata.json");
console.log(banner);
console.log(`[MyOrchidX] ${meta.name} • v${meta.version}\n`);

// Expose pairing server utility
const pairingServer = require("./src/pairing-server");

// Export module API (so repo can be required by others)
module.exports = {
  info: meta,
  startPairingServer: pairingServer.start,
  stopPairingServer: pairingServer.stop
};

// If run directly, start pairing server (default port 3000)
if (require.main === module) {
  pairingServer.start({ port: 3000 }).catch(e => {
    console.error("Failed to start pairing server:", e);
  });
}
