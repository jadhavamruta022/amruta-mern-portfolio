
const mongoose = require("mongoose");
const dns = require("node:dns");

const connectDB = async () => {
  try {
    const dnsServers = process.env.MONGODB_DNS_SERVERS;

    if (dnsServers) {
      dns.setServers(dnsServers.split(",").map((server) => server.trim()));
    }

    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
