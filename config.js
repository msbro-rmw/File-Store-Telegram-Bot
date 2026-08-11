require("dotenv").config(); // Optional: if using a .env file

const config = {
  BOT_TOKEN: process.env.BOT_TOKEN || " ",
  MONGO_URI: process.env.MONGO_URI || "mongodb+srv://developerbro723_db_user:9axC7c7iQm0G3ESO@cluster0.dr8m75m.mongodb.net/?appName=Cluster0",
  OWNER_ID: Number(process.env.OWNER_ID || "8909902924"),
  START_IMAGE_URL: process.env.START_IMAGE_URL || " ",
};

// validation
if (!config.BOT_TOKEN || !config.MONGO_URI || !config.OWNER_ID) {
  console.warn(
    "⚠️ Warning: Missing required environment variables in .env file"
  );
}

module.exports = config;
