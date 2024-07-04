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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c5b2b527a08a0b21392e0.jpg";
global.devs = "254739937062,254710772666";
global.sudo = process.env.SUDO_NUMBERS || "254739937062,254710772666";
global.sudo = process.env.SUDO || "254739937062,254710772666";
global.owner = process.env.OWNER_NUMBER || "254739937062,254710772666";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 5;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.MENU_VIDEOS || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/9e038e5890def3cc7aca7.jpg";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254739937062,254710772666";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "254739937062,254710772666";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0REbDhpcTV0RldQSTcvcTRXKzhpWnlEc2JBaFMrYXdlSk1ESHlCNyttTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT3F1VjBzZ0xOaDdqeThBaWhuSlBIelA0NE5ZYlZaancraWtvakh0c2Z6az0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnRFNqMTBkUTZQSUxtOFd0NWtoM3FtMUtPZTJBaDdubE00MWZuelBLVDFvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3S1pQdEd4ZmxFcndDWEowN3RVeFhkSWZHb1p2SVhuOFpyVG9kek5LQkFJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVQOGw2L1FQWHBUL3lKcW5pSllQaDhwa3J5VS83S2FVUHh1ZnNqMkFVbEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllrR25HZ2QxMGcvbTc0WGlrUnhmbWgxRFZscCtiTzZoMmF5VzBtL1UrbTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0RuUWRoNG93bWRMendkNlRUUnZ4Mkx3T0dFdzNLUVMrUk14bDEzditXOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTVdDSTRZdmlWQ3A4ZVRxNE9nNUR4NGhldllkazlvSU5xUGFoM1FtVThURT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikl6NUpjT3dWcTlnL0FWV1J4Rm5ObVFEYUV1RnFWNHBhajFPVHFqZURsZ2pjRExIVGUzU29JTm9GUWttbndrQ1FUenFUMmljeGRoZG1tKy9kR2oyd2hnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUsImFkdlNlY3JldEtleSI6ImxhQ3M1eTc4OG8zYVlFOXpQcjlqUE4ya3JuM2hHMkYrR2dHY1V4VkZ5RGs9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im1KRlF4cUZyUmhlcmlPbWY4Qmk0TlEiLCJwaG9uZUlkIjoiMWY4OWQwOTgtMTJmOS00Y2QzLTg2YjctZGY0MjA2NWFmNGMzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlkzTHpyUGxJZSs3ckRCRG5MeFpmdGFIOHBQST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0THQvb1l5T1dFVTFpNHlTajFKdzZLKzh5T1E9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSDQxS01ZQkwiLCJtZSI6eyJpZCI6IjI1NDc1NTA4ODAyOToyMUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUDJxNU44SEVQQ09uTFFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiL3p5M3l1V3VwekordlgrVnBGcmptZ3FRcW1udHRhVkxXcFlTbU1ad053bz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRXczOUxHVk5WOWEwNXorZUFyVEo5bTNLdG9RYUl2NG9Tb3lmb1hJeE1hWUZrY0VaNDdjV1NLb3BkMCs1cWdtNkh5eFZ6OENyM3BkbTRyRWhKTERlQkE9PSIsImRldmljZVNpZ25hdHVyZSI6InJ0Ym9CUW9CbnBEWC84aTdMKzQwQ0g4bzZpSjJmelo2dGFYRFRtTUNLVk95bnFOMC83bTdXcVFNeENrN2VqdGhIanNJbXpnRU5WQS9IVTBYYldnU2lnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzU1MDg4MDI5OjIxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmY4OHQ4cmxycWN5ZnIxL2xhUmE0NW9La0twcDdiV2xTMXFXRXBqR2NEY0sifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjAxMjUzMDh9"
module.exports = {
  menu: process.env.MENU_STYLE || "G1", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "4.0.0",
  caption: process.env.CAPTION ||" 𝘽𝙇𝘼𝘾𝙆-𝙋𝘼𝙉𝙏𝙃𝙀𝙍-𝙈𝘿",
  author: process.env.STICKER_AUTHOR || "𝘽𝙇𝘼𝘾𝙆-𝙋𝘼𝙉𝙏𝙃𝙀𝙍-𝙈𝘿",
  packname: process.env.STICKER_NAME || "🐯",
  botname: process.env.BOT_NAME || "𝘽𝙇𝘼𝘾𝙆-𝙋𝘼𝙉𝙏𝙃𝙀𝙍-𝙈𝘿",
  ownername: process.env.OWNER_NAME || "𝑰𝒃𝒓𝒂𝒉𝒊𝒎 𝑨𝒅𝒂𝒎𝒔",
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


