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
  process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUI1Yi9FOEI2Z3kyZWxtSmFwRXBKZlJkREhwUDFmNSs1Yk45dTdmdVlYRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaDVyc3gwWVJxaStCbW5kZDdDcVJiTklVNGc3dTllcEVHT0JjTWdpK1owRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzR3l4THlITEIrOTJnSS9SaDVYa0tFdmNuRlhKbWk4eWd2UTh2ZUhIREhjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4cWsyNE9jZ25TSDJsSnI5YnRUMUVPVEJwbHRiRFVRRitkRFJ3b3VxV3hJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdBSGIxbmFRS2VISFZ6YTFyNmlyRldZY09NYm9udXlHZENmWHNYWjcyM0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imc2Q0xNTnd0b3hiRXlrZTFwcGFBaDNvNHFzR0dObWFzMlEyRkVOYU9GM2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFBvTG1aOGNZeUlublFGbnYzU1VxYjZta2xib2lublBOb3oxZXd0dElFcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNFd0R3IyeXNiUTd3YWFWQmhqNVpKaXlLL1BXOFVRSmovVDJOQitaVVQyZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imh2cG1Rc1h6Q29HbDJ2bCtIQ01IYXowK0s4YnlhS2F5ZWlhRGZTNU1GdkduSWRJUm40QkY2cG04TGFLYmdRbHhTRXJVUkx5aW5iS2VZUlhVSTZWcmpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MywiYWR2U2VjcmV0S2V5IjoiYUtHNTd6bElBRVVNeFlYa2JFSmxEcUdHR1VsamtsSEFaU1dPTjNacjBPVT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3MTk2NDY4MzdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNjJBRjI1QUQ5NDAyRjQwNjdGMTdCNDVGRTNBMzE0QkQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDI1ODc2OH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzE5NjQ2ODM3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjkwQ0FDOTg2QTU3RjZENUI3NTg5RjI4NzgyMjg0QzE4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjAyNTg3Njh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ikw0ZjBYZkhGUkd5aVZZcHQ2eThielEiLCJwaG9uZUlkIjoiOWFmYzVhODktNjk0MC00NzVmLTkxN2MtOWZmZDYwMWMwNDNkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZoTWRCcHFUUnkxM1dNVjh0VHdBWmJOd3R6TT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYZ2x2T25zaVE5d3RlYnJHSGVLa094dTN4K1U9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSzJSMTZIM0MiLCJtZSI6eyJpZCI6IjI1NDcxOTY0NjgzNzo0NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJKQUNFTE9XIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJTGc2TXdFRU1HaHBMUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJpcDFocHdOdm9oZDVIT1dCaUJTNXJ4UnA0d3ZvSXRpblM0ci9aOXBqTERrPSIsImFjY291bnRTaWduYXR1cmUiOiJyeko2dFZHVVlvejVSVC82STF3bjhSNUR3QUxVUTdwNGxlRlB1VnJCZDltV214NE14TWZGS0FDQ0hqUkcxaHArcE11TVA2Z0g5KzRLMGVuN1FGbm9Edz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQ0FsMTU5QTFvdzRvbFJFTkdlV0RXQzdqc1ZVczlDYTRqUWRnQXZrT1pCT0hmZ2ppa2wvS01mTTNVVkQ1aDV0YnVtQ1lhZ243UUxRQVZ5ZWVJZXBWaGc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3MTk2NDY4Mzc6NDZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWXFkWWFjRGI2SVhlUnpsZ1lnVXVhOFVhZU1MNkNMWXAwdUsvMmZhWXl3NSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDI1ODc2NSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHTDAifQ=="
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEFIbUFwNTBCa2FHdi9sa3BKSzRvaWMxVC9rMDVrK3RCcnlPWVVhRDlFQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWVowTCtUS1daa0NXOHNoWUJ0c21xYkZYY2x5djZIVi81Sy9ZOXExVFNnVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3UHZmVnNpVy9UbXV0VzlEWlhTdkErWmQydTdPVzNOVm5FTkZhVlEyaVZBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzaEx4ZDJrQ2IwNWRSNWl5L1BaU21jVTU2VGQ3NjdiNVphaUFqRTZkY1RZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZONFZHK1ZpeHpjUmxKOGEreUpLRHZwTjA2aXRaQVYzWTlIRSs5YlhoRW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZZQVFSZ1lFaGx1ZUJVbG9DRXdBdmFnb2h5VnQ5SFB5RytTMU9VT3RPREk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUliOWs3TmNEaEJ0a3BQbGlsazhUQ3k5a2FYQnREMzJCSzdOaTc4dEFuZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTHdNVFo1ampWSUZzWlR6RWF2dFdhVE5xWGg2c2hPdmZZcnpQOHhxczgzQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImkzcCtNZHBab3FUMlhPak4vR1JKVjUwMUM4L01MNENkVDhPOVh6ZWdUdHB3ZFkxeTkzSUZrdDFtN2kxMHJCWTh0bHRVMzFUd3cxV2o0WnRNeDhhUWlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE5LCJhZHZTZWNyZXRLZXkiOiJrQjNIWUowYXNBQ2FqZmE5MUFPTlpxcElxU1lxaWdrSXZHaDR4T3BYbGJVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJJaXlOZ2pqOVRfT0o2aWZzb29rMlhBIiwicGhvbmVJZCI6IjFjMTA1ZTc3LThlZDgtNGE5MC05NDVhLTE0ZmYyNjAzN2U3YSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiT1FmQ3NWK2lkK3ZYajlPYXd6YW1CQzRKeGs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibXZ0K1I3SnpVK21qeXErRitVT1FUNm5LMXVBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ijg4U1JYMlY1IiwibWUiOnsiaWQiOiIyNTQ3NjQwODIwNTA6NUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTmlEdExzR0VLMmFtclFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNDdyVEE4SHhkWW9HOVNKamxGTGZrVlRhdmZnQ2dQZk9laVY4ZVZhL0EzTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUHZ5SFNpTkVFVjdISGlvUDc4Qzg1SHNjclNnRkdMT0xjZ2wxcU1sdExxMThtMVhOeWZua0N0RzkzSmxyLy82bkp5aFFNZE04ay9XWC9RTWpHS2JZQlE9PSIsImRldmljZVNpZ25hdHVyZSI6IlM3NlAzWlkvQlQzNEpwRTRCZ21ybEdjcUJOMm5IRE9sc2d6cDl2Q0NqRXUxU0EzTmFxLzUrL0x2NWtHRnpUeEo1VVA0NGYwV2xaZFI5N09JOE1kVGdRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzY0MDgyMDUwOjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZU82MHdQQjhYV0tCdlVpWTVSUzM1RlUycjM0QW9EM3pub2xmSGxXdndOeiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDA5NDAxMSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOaHcifQ=="
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


