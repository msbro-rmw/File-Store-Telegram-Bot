require("dotenv").config(); // Optional: if using a .env file

const config = {
  BOT_TOKEN: process.env.BOT_TOKEN || "8556508365:AAFIepFJ0bFekHLuYNT-6vjzfL1_lLqvzLM",
  MONGO_URI: process.env.MONGO_URI || "mongodb+srv://devms786178_db_user:cEtMdLjmHF5EM2Pf@cluster0.xbqyvnn.mongodb.net/?appName=Cluster0",
  OWNER_ID: Number(process.env.OWNER_ID || "8909902924"),
  START_IMAGE_URL: process.env.START_IMAGE_URL || "https://graph.org/file/dabc3b293f0ab07a49eab-f3d1061ff5994e7b50.jpg",
};

// validation
if (!config.BOT_TOKEN || !config.MONGO_URI || !config.OWNER_ID) {
  console.warn(
    "⚠️ Warning: Missing required environment variables in .env file"
  );
}

module.exports = config;
