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
global.sudo = process.env.SUDO_NUMBERS || "94767073275";
global.sudo = process.env.SUDO || "94767073275";
global.owner = process.env.OWNER_NUMBER || "94767073275";
global.style = process.env.STYLE || "1,2";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNERlY2I3VEtGb1dmamVlSWtKWGdiNHZUYThyQzhtYlU0dHBrcGp3SDRsUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUVEyMElaeFJNMjJreVAwV3BqS1hiZ1BBSVUzbVJ4YTBoT1ZXRGszZWZRMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVS1Q1TXdzMENydzRPYm1LcWdHSjhRbUpOYXpxMUVxekRtWFdxbms2UW5JPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaTU1GV200bFFZWEtIWnlKbFp5MGM0MEhKTnlQeXdIUVZLV2VCTy9tN1hRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9EVWc1VGtUdEFVeGdoWWNjVWJSWGt2UEpZVFpKZ1hQYkd5RnhmbnpnMmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJ4VnJiWk91TDJ2Y2QvZjJTaXhFZTRpRlZCdHhBbElnbzdRWmVoeTI2akk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE5ScUlIUDE3UWtzR0VFUkI5UDB0R3krcC9zM3ZidVFET1FQRHlHTlVuVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOGtZUUg3U3JIaHd4Qy9BcmFXWURGWkU5UFpuT0ZVOEQzZDlsQk1wWnJRWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVxakZOOGxWZFJKN093ZUkycHY3enNDcVhsR0p1N1o1c1pTYmdCV3dtTVRvejlzYlF4L3ZKc0w4aEJRK2lNOVprVktRNkp6QXc4bWJoSmQya005SGdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODAsImFkdlNlY3JldEtleSI6ImwrQlNuSlcxTEQ5Znd1NE1DRFlKeWppYU1hUFlvWEZ3WEVOV2VXSDR6UFk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImJhOGtrcGJkU21tYTBqejd0Q0htVGciLCJwaG9uZUlkIjoiYTcwYTY4MjQtNWFlYS00YzBhLTgxMzEtM2U5MWZlZTZlN2FlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVaVVlla3NWQTlXOGw5anl6eTlYWDc0UWpoYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJicHlBQW1GdENkbGt4MkFoTnhGQm9jSlh3U1k9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQVFaODZTWkIiLCJtZSI6eyJpZCI6Ijk0NzY3MDczMjc1Ojc1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuuCmOuRlCBfX+yCrOuUp+qwgCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSXpwc3VBQkVNQ1BtN1FHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQmpCRmpTZ0tZY09UQjN1MG5MUWwzWEFZMjhCWnhTRGZmSUlNWFlMRkNIUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVjA4SnVDYTQxaUFuMTlNRWp2MjRtTko3WFkrNDVacG14SDc5b3hNOXlZam9BVkVHeFovZnBUaGZBN0FWRWcyMldBYU9SV3dUWnRhMkJSUk04YWV2QUE9PSIsImRldmljZVNpZ25hdHVyZSI6InlwVlAwVFc0eE1QYk1TU0ZFZ0NXTjg4NjZ4R09HTTFFNSs5WmNtVzVNbk9qS1duSmpJUk5BcW5POE80UDEzK1AwOTBRcW5pMHQ3MUhTSE1nclRRQ2h3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjcwNzMyNzU6NzVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUVl3Ulkwb0NtSERrd2Q3dEp5MEpkMXdHTnZBV2NVZzMzeUNERjJDeFFoMCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDEwOTAwNSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHSEkifQ=="
module.exports = {
  menu: process.env.MENU_STYLE || "G1", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "4.0.0",
  caption: process.env.CAPTION ||" 𝘽𝙇𝘼𝘾𝙆-𝙋𝘼𝙉𝙏𝙃𝙀𝙍-𝙈𝘿",
  author: process.env.STICKER_AUTHOR || "𝗻𝗮𝗱𝘂𝘄𝗮-𝗺𝗱",
  packname: process.env.STICKER_NAME || "🐯",
  botname: process.env.BOT_NAME || "𝗡𝗔𝗗𝗨𝗪𝗔-𝗺𝗱",
  ownername: process.env.OWNER_NAME || "𝗻𝗮𝗱𝘂𝘄𝗮",
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


