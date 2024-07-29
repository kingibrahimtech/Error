//GIFTED-MD//
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "ngoyaibraah@gmail.com";
global.location = "kisii,Kenya";
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
global.owner = process.env.OWNER_NUMBER || "254797446887"
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

global.SESSION_ID = "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1BJNzZjSmo2c2NSb2lzakhBM1JwT0owVGszOEdGZnp5UjBZL0xscDJsOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibTFvbm1qV0RBeEtpc3dZMHJodkYyV2doRUdHdStLalY4cC9SSXBBTVNnRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0T203amlIbkZVUGJxWEJCTTI4ZVg4YjlBUFRLdTBqMTlzcDZ0ZzI5UUVrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVdG9IU3dwNjdiUUFMZytKMnVvY2VONm93OTRVZk15K2VWT0VaQTV1enhRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVJZ2o4Y0paY3JReE90elNwNE5xcDJBaWorbTZ1eG12am4ydEt5OFNhbDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5EczZOVWl4bzJPRjFsenJsdU9zYWNmQnl3VkdSVFNqQVZBTmVRU25KMVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FzWjVHNVNzbStMUkFibFZDeGRJdTVKb3NyVDhueUswQk5RRzNicW5tdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN3UrQ0pTcVZTbkQ4dmJyWmNFZG9OUnNEeEJyVHliU3hXRjZ0NG5SRzQwbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9RQzkwMkd4ejBaVTZxb1VzSHI1QVlZR0tISzNydjNrTVQ4ZVNicXdpejlWSzRUYzdNd0pUTnZoZk1PcTFabzBXMnptWmZIUGZub2R2VzNRUTdOMEJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc1LCJhZHZTZWNyZXRLZXkiOiJrSUFJMnVPNjdRQTR6OGIrd1RTTVBVNG5BUDJoVzNtMWYyaG5tVksvemVJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJpcDBmSGFvN1JiTzBiS1o1WDVySXVBIiwicGhvbmVJZCI6Ijg3ODAzMGM3LTQyNDgtNGIyZi04MjJkLTc2Y2FkNTBiNGE1MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6dGoyUmc1YWZ3MGhDSExkSmRjSE9zSS9NTTg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS2Y1dWNzdWFucWJiMlRuZFpzNDVmeU9NTGhFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjhMNTFXWEpNIiwibWUiOnsiaWQiOiIyNTQ3OTc0NDY4ODc6NjFAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01qUGsvNEZFUFRXbkxVR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImQzSjFidWlPRUVkRWVWUFRnalcwaXBQSWorYjB4MGFZR21mMXZJM1N2VUk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjJhTHUrcGU2VWYzT1ZkbC95UTJNYWYxeWJNdXBuRDNjNlNvVC9wMUJjdlZQOFpHcUozYmsxdEtyZXlpb2tmTWUzdnZuV3pFOXgydm9idUo0NmZESUJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJLcWE5T2RTTTd4SUNYcW1XQkEvbmxwTTF2ZGJlNGhDSklFMENUUlhzNjNrY3hvdFNORUVremNySDUzS0ExcGdnZzRqVlRhRlhQeW1jemI2aE1NNFlEZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc5NzQ0Njg4Nzo2MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYZHlkVzdvamhCSFJIbFQwNEkxdElxVHlJL205TWRHbUJwbjlieU4wcjFDIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyMjMxNjgxfQ==
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0c5bU9hUVo0SEowOXBrTWU4ZDZXSG9GaU5mU2JzWEVhWEhkN2FxbGwwcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWxlLzRBdlJmU3BmSVYzblk0RjBVMlQ2eGc1ZW1XYjhXczQ1bWcrTHBYaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJQ1hiN2dCak92TDhDSWxlVlVCcmJUU3crSnlZNlQ1elMxR0xONjNvNmw0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0OENoVGw5SmpZQWluYkgvQlVjWEc4OEl4VXp6bkFpQURDUytVSTNJL2pFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitPNDBzZXMxRExuSmpsYWhNSzdMWERVNk5ZU21BZXJXb1FYV1dYNE9yMFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBJc21NY2V0RUJMZEt1eWdmSWZMcFhZbXZVRm8xd1JRandiRC9vM0drRW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUZ5ajlxUzdHVENZUmw0VVJES1FqMXgvempxWXFiUnMyMUNyTU1GMEsxWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUZ0N1p1UHVxRzZUUTRxSGZ0VHdycXdneTBOZElYREtZUDZHemptQjFHcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFLTlF0UGgweEJMcDhlcGxmZERQQTBxa003MU9XN0tpTHYySmJ0dWVnL0hwYmh4VzJwOGlDOWlZU21vN0plekFhajhmK0FsSVdKbEVBdGp1dWNHRUJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzgsImFkdlNlY3JldEtleSI6IkRPV3lVVWNRMmF2Wjk2R0lCMHZVRGtnbSt3SzhTVDFOZVc1cytPSGUyZlk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImM1anhXU09tUlhDcXBGRVNibk84MkEiLCJwaG9uZUlkIjoiYzJmMmU5YTctZjc3OC00OGU1LWFmOTgtZTdmMzYxMDZiMjBlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVvUk1GWmtMWWZiMk44UTVKRU9FTnNrUTBnZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKNE5KU1g5SFB3NFRoK2NzVUwzWkpCL1FQaW89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMkFYREQ1NUoiLCJtZSI6eyJpZCI6IjI1NDcxMDc3MjY2NjozQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IklicmFoaW0gQWRhbXMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xyYi9hMEhFSjNnaWJVR0dBY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlFPL29MWHlPYTB5Y2FVZmd3dnA5Y1pyZ2VKUmp0LzBTbTdZQVhjV3pUU2M9IiwiYWNjb3VudFNpZ25hdHVyZSI6InNCbHp6aFdu
module.exports = {
  menu: process.env.MENU_STYLE || "G1", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "4.0.0",
  caption: process.env.CAPTION ||" 𝘽𝙇𝘼𝘾𝙆-𝙋𝘼𝙉𝙏𝙃𝙀𝙍-𝙈𝘿",
  author: process.env.STICKER_AUTHOR || "𝘽𝙇𝘼𝘾𝙆-𝙋𝘼𝙉𝙏𝙃𝙀𝙍-𝙈𝘿",
  packname: process.env.STICKER_NAME || "nico teen",
  botname: process.env.BOT_NAME || "𝘽𝙇𝘼𝘾𝙆-𝙋𝘼𝙉𝙏𝙃𝙀𝙍-𝙈𝘿",
  ownername: process.env.OWNER_NAME || "nico teen"
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || 658566
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


