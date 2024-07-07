//GIFTED-MD//
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kajoxjoe@gmail.com";
global.location = "Kitale,Kenya";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://giftedte:SER3spXjIJSOwrPT@cluster0.ni61idp.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://giftedtech:ZMIkfrL3rHsvmfyGboVXKkeyoM0FPl6z@dpg-cpp83jlds78s73e39m10-a.oregon-postgres.render.com/giftedtech";
global.BUTTONS = process.env.BUTTON_MODE || "1";
global.timezone = process.env.TIME_ZONE || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/ibrahimaitech/BLACK-PANTHER-XMD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y";
global.website = process.env.GURL || "https://youtube.com/@ibrahimaitech";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://dailycannon.com/static/uploads/2023/09/arsenal-fc-v-psv-eindhoven-group-b-uefa-champions-league-2023-24-5.jpg";
global.devs = "254768370578";
global.sudo = process.env.SUDO_NUMBERS || "254768370578";
global.sudo = process.env.SUDO || "254768370578";
global.owner = process.env.OWNER_NUMBER || "254768370578";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 5;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.MENU_VIDEOS || "";
global.waPresence = process.env.WAPRESENCE || "composing";
global.userImages = process.env.USER_IMAGES || "https://dailycannon.com/static/uploads/2023/09/everton-fc-v-arsenal-fc-premier-league-4-1024x682.jpg";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254768370578";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "254768370578";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUxNTER1eEl6bmNST2JMa2NlcDlqSXEyVnFST0tqUzZncGFYcC9DODZGST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaGh3b1g5ajZRS1hzUFFQZzM3WWR2am9iNFZ5aURSenE0SDNFczV1ZGV5cz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyR0xyZEl2SkZZSlVneU04WHVpRThuM1p2a1EzWXlwTXlZY0Rza1J4NmtBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzZEQxOTRicWNRQ0F2dW1SUTNyZ21nOVRYOStFbFBMeXFTVC9nRlpmb1ZVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNNVjMrekdYYVNaUG0vTTFmd0tuNGhnNWlwM2xKUnAyS0E2NUt3c3NaRlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRtRStzOW5YSlI5cjZDWnFNbTZzRE5EbXhNQjJPdEdNWTJBei9aWGNOeDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUEvTGJUMGF3WlpDdGJ4VHI5NTJDQ2xUYW1ERThhN2ZFdXhWdzY2V2wwND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3Jyd3RyTnVLS0VRVm5sQ1lpRUVwNFF2b3dBMGVXSFFlcVQ3Y3N6RVAyRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InUxb0lnVW9rRUFNbGZEeUI2Qml2OEoveDlMK0FMUGRrWVF0TjdzRlljRmJDSmZ4TkVxZU4yWWduejZ3NWpaYWMyZCtmSnZONURuQTd4Y1dDVnNYVkFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI0LCJhZHZTZWNyZXRLZXkiOiJZSEJoellkejZ3SU9xWjYrZUNJTWQvMXU2blZjZDZQU3NEUWpMd21UYllVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ5YlhfdFFMQlMxYXZCWUhQLXV6OGNnIiwicGhvbmVJZCI6IjE1NjdjNGEyLTQ4ZTgtNDlkNS04ZGQyLTFjOTI2ZmYzMmE4NCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBYXFENWFaNkgxanh3VFpXR09xSkZmNEN4OHM9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldSVzhIbE9BcTkzc2NaWkVWbXcxdTBPKzhYQT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01XYmhOY0JFSUdFcHJRR0dGNGdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImU4SW41NldidTlqRmQ5Y3NDYllxY0NvK2lEZk1mYU1lTDZhcXYxQk8yVVE9IiwiYWNjb3VudFNpZ25hdHVyZSI6InM2RXRJdzFuRDh2RW54NXVIY3RNR0lsSlJ5SnFON2VkckViZXhRNzA3TmtxOXdJMk9HdGJ1L3pha29GcmdBV0szVlE1WjNKL3c5VWZBZDFrN1FxY0F3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJYL0xhRUZ0eUxOK1RRUmlHWVdmUHVJZDc3RlBGTktIYlBtSElkMDJEMlJlTmlrYXdyRjdhcmJIVE9EOWYyK1MyeE5HWFZ4Qyt4bU94aGIwNUc3RVhCdz09In0sIm1lIjp7ImlkIjoiMjU0NzY4MzcwNTc4OjYwQHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc2ODM3MDU3ODo2MEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYdkNKK2VsbTd2WXhYZlhMQW0yS25BcVBvZzN6SDJqSGkrbXFyOVFUdGxFIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwMjg3NzQ5fQ=="
module.exports = {
  menu: process.env.MENU_STYLE || "G1", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "4.0.0",
  caption: process.env.CAPTION ||" Created by Jonnie the Great-The best bot programmer.",
  author: process.env.STICKER_AUTHOR || "Jonnie-MD",
  packname: process.env.STICKER_NAME || "🐯",
  botname: process.env.BOT_NAME || "KaJonex-𝙈𝘿",
  ownername: process.env.OWNER_NAME || "Jonnie",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
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


