//GIFTED-MD//
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "ngoyaibraah@gmail.com";
global.location = "Bumgoma,Kenya";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://giftedte:SER3spXjIJSOwrPT@cluster0.ni61idp.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://giftedtech:ZMIkfrL3rHsvmfyGboVXKkeyoM0FPl6z@dpg-cpp83jlds78s73e39m10-a.oregon-postgres.render.com/giftedtech";
global.BUTTONS = process.env.BUTTON_MODE || "1";
global.timezone = process.env.TIME_ZONE || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/ibrahimaitech/BLACK-PANTHER-XMD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y";
global.website = process.env.GURL || "https://youtube.com/@ibrahimaitech";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/e312d667ca4069da6c40a.jpg";
global.devs = "255 621 995 482";
global.sudo = process.env.SUDO_NUMBERS || "255 621 995 482";
global.sudo = process.env.SUDO || "255 621 995 482";
global.owner = process.env.OWNER_NUMBER || "255 621 995 482,255 621 995 482";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.MENU_VIDEOS || "https://telegra.ph/file/e312d667ca4069da6c40a.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/e312d667ca4069da6c40a.jpg";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "255 621 995 482";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "255 621 995 482";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUdxalB3Uk5SaWJ6ZjRiZk55QUhDa2tzckxqZW1lYnYvQit5aTk2TlRFQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUlh6R3hZOElvaUtXQ2JTbTJzd1VHTHZodlJhclZTQThSemduYXRKRk9qOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlTWM2UzNMdFk3VEQxU21haFRlc1EwTWtHU2tNQzZZZmVxZUtmRlBGU1hnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBQjhNZFdXS3U2RzF6ZkdPZ1F0ZGFUNzVaai82OGEvcHF3K3pSWXBCc2hVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndJV3ErWVozR2N2WWhXbmh3SnVqUHFIbVVwSTlCY08rNnNhRnU2N1N2R2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhLcmp2TWVyR3dySENqZ0h1RGliMXBCcW8vMk9HczJ4MWxqMUEzMG1CRHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS05lM1pKa2tJNEpoTmJWeHdOeFJxeitnTDh6SWNia01QeGdIWW0vQzNWND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiczhrUWp1RlptRElsUXpMeFpqbHRsZkN4YUpLeTk0RzlnQW9JVWR5VHMwdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlowQjFEb2JVcElzUTM3QVEwdGJZekVEdjhRZDJmQ2xiWko1Y0V6TS95ajdVblJ3OFBFelBsWGMxOU8vWDdDQnRXeXJNSFRlSDk3SXlQak8rY0JpOERnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTQsImFkdlNlY3JldEtleSI6Ii9GWGZmc0hYamJ1K3lQdFhEcnNBZkx3ZmtPM1VMc05vZS9vUytnRU5OcVU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InRueG9YR3hVUzUySDBNa1pZYlNxTHciLCJwaG9uZUlkIjoiZTE4NTNmYzEtZGM5My00MWI2LWFhN2QtMmVkZjZlMjEwYzFkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlsUFd5SDd6RUM1eGY0NTZleWdJdU9TeFJvUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjSWJ5dUdHWHJMYTcyN2pqL1RudThWRTdWcGs9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQlNZREpRVkciLCJtZSI6eyJpZCI6IjI1NTYyMTk5NTQ4MjoyN0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLgvIZ5zZ9lzZ9zzZ9zzZ9lzZ9yzZ9izZ9vzZ95zZ/gvIYifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BQTTNZUUZFUEtsODdRR0dBWWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkczT21EVUV1ekZFZFdYTEp6ek5sNm1PWnBCWDNycmIrQnozZUIrd0VvblE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlppSUN2UVJzOGJEMWdVREFKVGRzdTk2RlN5MitiN0g2S2VwTUlYN3BtMGFMUHlmbWp1dHNma050SEZraDY0TjBCN1V3VVdDaW9LNnJ1VWo3QkFMdkN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJUSE5QZitxWjdJUUQrWm51L0ZMRGZoeUZiMDNhZDZLTjNZQ1RlTElkNFAycDhheStVSGFFK0JNZGo3c29oQXBqcWd1V2ZmWHBLVE1YRjBydkVBNHhCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTYyMTk5NTQ4MjoyN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSdHpwZzFCTHN4UkhWbHl5Yzh6WmVwam1hUVY5NjYyL2djOTNnZnNCS0owIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxNTUzNjY0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURjZiJ9"
module.exports = {
  menu: process.env.MENU_STYLE || "G1", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "4.0.0",
  caption: process.env.CAPTION ||" 𝘽𝙇𝘼𝘾𝙆-𝙋𝘼𝙉𝙏𝙃𝙀𝙍-𝙈𝘿",
  author: process.env.STICKER_AUTHOR || "𝘽𝙇𝘼𝘾𝙆-𝙋𝘼𝙉𝙏𝙃𝙀𝙍-𝙈𝘿",
  packname: process.env.STICKER_NAME || "🐯",
  botname: process.env.BOT_NAME || "YESSER TEACH ",
  ownername: process.env.OWNER_NAME || "yesser boy",
  errorChat: process.env.ERROR_CHAT || "im yesser md",
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


