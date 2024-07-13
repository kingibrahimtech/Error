//GIFTED-MD//
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "harrisonreycaspian@gmail.com";
global.location = "Nairobi,kenya ";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://giftedte:SER3spXjIJSOwrPT@cluster0.ni61idp.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://giftedtech:ZMIkfrL3rHsvmfyGboVXKkeyoM0FPl6z@dpg-cpp83jlds78s73e39m10-a.oregon-postgres.render.com/giftedtech";
global.BUTTONS = process.env.BUTTON_MODE || "1";
global.timezone = process.env.TIME_ZONE || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/ibrahimaitech/BLACK-PANTHER-XMD";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/KmN9tQL0csS1HMSCncekQW";
global.website = process.env.GURL || "https://youtube.com/@djreyz2542?si=YPYhc5zFbgzxjmY1";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/3c1392f299a01907710e7.jpg";
global.devs = "254708654493";
global.sudo = process.env.SUDO_NUMBERS || "254708654493";
global.sudo = process.env.SUDO || "254708654493";
global.owner = process.env.OWNER_NUMBER || "254708654493";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 5;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.MENU_VIDEOS || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/3c1392f299a01907710e7.jpg";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254708654493";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "254708654493";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0hvbDZtNHpkM28zMTNGMEZUZDJpNVlnc2k2R2hFdHhybksycDJYME8wVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV2lkbnVWeHZreVIyc0NFbHpnR1dVYnN3blh2eng3RVpsSG53aTltZ3FDZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLSnFFekR5cXIxRDRFQXl0Snl0TGJZTUo1RkNLUVEwNlVUR21yMGxxWTIwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWblNPNi95S3VXUDVqdStTdGk0dHVrTUNubFRRRWtoWUM4T09va09vVVg4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndPcFdnUXMwd281dWgxTDNPNXdoQ0s0a3Z0VTZCYTBSUlRiSCszOTJsMnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Impod0Roby9VakhCWlgzSFpONXRDV2VWS3diV2VHRHprZVBCdytKMFRJRVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUc0SVZWYXc0dktVVjl2V2FlY2FOMVpLQWtEdHFSSW5MQTVGbFZsVU4xQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSnBIakMxZGVoYmhFcDZrTHdaZlRXMXBMb3VvQVYwKzVZdjBkYi92QTZpWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkV3ME45b09LRHVyZWJnU1lCT2V2Smtqdy9YYXJESk9GZXlkT2U3NHhPRHJJWGR0czlmVUlBbjBZQ25XVVFOTWtsUE1WSDFvaThoY2lPT3NVbVdnNURnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDQsImFkdlNlY3JldEtleSI6ImRZc21PZ1pZSUYvbE85WlBaQ3J0cjlmQVZ0U25KMXduRUhUTlEycnh5NU09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzA4NjU0NDkzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkUxNDFGNTc2RjI1OUJDMjMyMEM1NDg5ODgxMUUzOERGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjA4OTM0MTR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjZBX2ZKcUpkUmp1Nk4xSEVEczhGQnciLCJwaG9uZUlkIjoiMjllMjkwN2ItZjllYy00NjViLTg5ZjItZWM2YTIwNGUyODg0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjR4cDV2TStwOGFKaXVNd1E5V2Yzc2ZscTM2VT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3Nks3aVNzckJ4L1FaK1pwME1pdEQrdzJ2b3c9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOFk2VEpKV0giLCJtZSI6eyJpZCI6IjI1NDcwODY1NDQ5Mzo2MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJJdGNoeSBGaW5nZXJzIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNbTBqWjhFRU5YL3lyUUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJYbXBVbXVpRmRSczF2YnVwQ090c1psOFlmZ2doK0RqQmVYNzhWRVRRV1ZNPSIsImFjY291bnRTaWduYXR1cmUiOiJiSjNqcHZjUzdRc1l5c1JETHl5LzVUMjRYazZmd0s5UFQyU0xKZlFJZzhCN0dQS0MvVmxGTVlIa29uNHhkSVFVRkZHR25KSXJXZnNZUXdMQW5YdWRCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYWM0aDVVUU5rNmFXem0wT25RVXVhQzRTK3l1ODJpNzd5QWRvZ0R3dm5VQnFkaUs3QVRFcXkvNjhtRGVqd2xaL2RLMG5OOUFvbDFzUEZtNFA2WmtCQVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3MDg2NTQ0OTM6NjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVjVxVkpyb2hYVWJOYjI3cVFqcmJHWmZHSDRJSWZnNHdYbCsvRlJFMEZsVCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDg5MzQxMCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQdVAifQ=="
module.exports = {
  menu: process.env.MENU_STYLE || "G1", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "4.0.0",
  caption: process.env.CAPTION ||" ITCHY FINGERS-𝙈𝘿",
  author: process.env.STICKER_AUTHOR || "ITCHY FINGERS-𝙈𝘿",
  packname: process.env.STICKER_NAME || "🐯",
  botname: process.env.BOT_NAME || "ITCHY FINGERS-𝙈𝘿",
  ownername: process.env.OWNER_NAME || "HARRISON ANUNDA",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "ADAM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});


