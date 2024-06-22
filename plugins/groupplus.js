/*


GIFTED-MD
VERSION 3.0.0


*/


const axios = require("axios");
const sᴜʜᴀɪʟ_ᴍᴅ = require("../lib/plugins");
const { groupdb, smd } = require("../lib/plugins");
smd({
  'pattern': "lydea",
  'alias': ["chatbot"],
  'desc': "activates and deactivates chatbot.\nuse buttons to toggle.",
  'fromMe': true,
  'category': "misc",
  'filename': __filename
}, async (_0x461919, _0x449924, {
  cmdName: _0x48d6cb
}) => {
  try {
    let _0x20e2a4 = _0x449924.split(" ")[0x0].toLowerCase().trim();
    let _0x3037de = (await groupdb.findOne({
      'id': _0x461919.chat
    })) || (await groupdb["new"]({
      'id': _0x461919.chat
    }));
    let _0x2da108 = (await bot_.findOne({
      'id': "bot_" + _0x461919.user
    })) || (await groupdb["new"]({
      'id': 'bot_' + _0x461919.user
    })) || {
      'chatbot': "false"
    };
    if (_0x20e2a4 == "all" || _0x20e2a4 === "global") {
      if (_0x2da108.chatbot == 'true') {
        return await _0x461919.send('*' + _0x48d6cb + " was already enabled to all chat!.*");
      }
      await bot_.updateOne({
        'id': "bot_" + _0x461919.user
      }, {
        'chatbot': "true"
      });
      return await _0x461919.send('*' + _0x48d6cb + " successfully enabled to all chats!.*");
    } else {
      if (_0x20e2a4.startsWith('on') || _0x20e2a4.startsWith("act") || _0x20e2a4.startsWith('enable')) {
        if (_0x3037de.chatbot == "true" || _0x2da108.chatbot == "true") {
          return await _0x461919.send('*' + _0x48d6cb + " was already enabled.*");
        }
        await groupdb.updateOne({
          'id': _0x461919.chat
        }, {
          'chatbot': "true"
        });
        return await _0x461919.send('*' + _0x48d6cb + " activated successfully.*");
      } else {
        if (_0x20e2a4.startsWith("off") || _0x20e2a4.startsWith('deact') || _0x20e2a4.startsWith("disable")) {
          if (_0x3037de.chatbot == "false" && _0x2da108.chatbot == "false") {
            return await _0x461919.send('*' + _0x48d6cb + " was already disabled.*");
          }
          await bot_.updateOne({
            'id': 'bot_' + _0x461919.user
          }, {
            'chatbot': 'false'
          });
          await groupdb.updateOne({
            'id': _0x461919.chat
          }, {
            'chatbot': "false"
          });
          return await _0x461919.send('*' + _0x48d6cb + " deactivated successfully.*");
        } else {
          return await _0x461919.reply('*_' + _0x48d6cb + " Currently *" + (_0x2da108.chatbot == "true" ? "Enabled in 'all' Chats" : _0x3037de.chatbot == "true" ? "Enabled in Chat" : "Disabled in Chat") + "!_*\n*_Use On/Off/all to enable/disable " + _0x48d6cb + '_*');
        }
      }
    }
  } catch (_0x4b7590) {
    _0x461919.error(_0x4b7590 + "\n\ncommand: lydea(chatbot)", _0x4b7590);
  }
});
let warn = {
  'addwarn': async (_0x26da25, _0x4a17ff, _0xc6f067 = {}) => {
    try {
      let _0x1ae9f5 = (await userdb.findOne({
        'id': _0x26da25
      })) || (await userdb["new"]({
        'id': _0x26da25
      }));
      let _0x41e216 = _0x1ae9f5.warn || {};
      if (!_0x41e216[_0x4a17ff]) {
        _0x41e216[_0x4a17ff] = [];
      }
      var _0x905f97 = {
        'chat': "PRIVATE",
        'reason': "Inapropriate Behaviour",
        'date': new Date(),
        'warnedby': tlang().title,
        ..._0xc6f067
      };
      _0x41e216[_0x4a17ff].push(_0x905f97);
      _0x1ae9f5 = await userdb.updateOne({
        'id': _0x26da25
      }, {
        'warn': _0x41e216
      });
      return {
        'status': true,
        'warning': _0x41e216[_0x4a17ff].length,
        'user': _0x1ae9f5
      };
    } catch (_0x43bd49) {
      return {
        'status': false,
        'warning': 0x0,
        'user': {},
        'error': _0x43bd49
      };
    }
  }
};
smd({
  'pattern': "checkwarn",
  'alias': ["listwarn", "chatwarn", "allwarn"],
  'desc': "create paste of text.",
  'category': "general",
  'filename': __filename
}, async (_0x504e1c, _0x559e2b) => {
  try {
    let _0x4f9fb2 = '';
    let _0x595725 = _0x504e1c.sender;
    if (_0x504e1c.isCreator) {
      _0x595725 = _0x504e1c.reply_message ? _0x504e1c.reply_message.sender : _0x504e1c.mentionedJid[0x0] ? _0x504e1c.mentionedJid[0x0] : _0x595725;
    }
    let _0x140b2d = (await userdb.findOne({
      'id': _0x595725
    })) || (await userdb['new']({
      'id': _0x595725
    }));
    let _0x5c3657 = _0x140b2d.warn || false;
    let _0x537732 = {};
    if (_0x5c3657 && _0x559e2b === "all") {
      _0x5c3657 = _0x140b2d.warn;
    } else if (_0x5c3657 && _0x5c3657[_0x504e1c.chat]) {
      _0x537732[_0x504e1c.chat] = [..._0x5c3657[_0x504e1c.chat]];
      _0x5c3657 = _0x537732;
    } else {
      _0x5c3657 = false;
    }
    let _0x549971 = _0x559e2b === "all" ? true : !_0x5c3657[_0x504e1c.chat];
    if (!_0x140b2d || !_0x5c3657 || !_0x549971) {
      return await _0x504e1c.send("*_User didn't have any warning yet!!_*");
    }
    console.log("allwarn : ", _0x5c3657);
    for (const _0x1f1598 in _0x5c3657) {
      let _0x2edb8c = _0x5c3657[_0x1f1598];
      _0x4f9fb2 += "\n╭─────────────◆\n│ *[ID] : " + (_0x1f1598.includes('@') ? (await _0x504e1c.bot.getName(_0x1f1598)) || _0x1f1598 : _0x1f1598) + "*\n│ *[TOTAL WARNING] : " + _0x5c3657[_0x1f1598].length + "*\n┝─────────────◆\n";
      for (let _0x21a0a2 = 0x0; _0x21a0a2 < _0x2edb8c.length; _0x21a0a2++) {
        _0x4f9fb2 += "┝── *WARNING " + (_0x21a0a2 + 0x1) + "* ──\n│  *DATE:* " + _0x2edb8c[_0x21a0a2].date + " " + (_0x2edb8c[_0x21a0a2].reason ? "  \n│  *REASON:* " + _0x2edb8c[_0x21a0a2].reason : '') + "\n│  *WARNED BY:* " + _0x2edb8c[_0x21a0a2].warnedby + "\n│  *CHAT:* " + _0x2edb8c[_0x21a0a2].chat + "\n";
      }
      _0x4f9fb2 += "╰─────────────◆\n";
    }
    return await _0x504e1c.reply(_0x4f9fb2 ? _0x4f9fb2 : "*_User didn't have any warning yet!!_*");
  } catch (_0x3f3a1e) {
    await _0x504e1c.error(_0x3f3a1e + "\n\nCommand: chatwarn", _0x3f3a1e);
  }
});
smd({
  'pattern': 'warn',
  'fromMe': true,
  'desc': "warn a user!",
  'category': "general",
  'filename': __filename,
  'use': " < USER >"
}, async (_0x25b613, _0x5601c7) => {
  try {
    let _0x151e80 = _0x25b613.reply_message ? _0x25b613.reply_message.sender : _0x25b613.mentionedJid[0x0] ? _0x25b613.mentionedJid[0x0] : false;
    if (!_0x151e80) {
      return await _0x25b613.send("*_Uhh please, reply to a user!!_*");
    }
    let _0xdba68e = (await userdb.findOne({
      'id': _0x151e80
    })) || (await userdb["new"]({
      'id': _0x151e80
    }));
    let _0x227643 = _0xdba68e.warn || {};
    if (!_0x227643[_0x25b613.chat]) {
      _0x227643[_0x25b613.chat] = [];
    }
    var _0x23ca05 = {
      'chat': _0x25b613.isGroup ? _0x25b613.metadata?.["subject"] || "GROUP" : "PRIVATE CHAT",
      'reason': _0x5601c7,
      'date': _0x25b613.date,
      'warnedby': _0x25b613.senderName
    };
    _0x227643[_0x25b613.chat].push(_0x23ca05);
    await userdb.updateOne({
      'id': _0x151e80
    }, {
      'warn': _0x227643
    });
    let _0x1ece42 = parseInt(Config.warncount) || 0x3;
    if (_0x227643[_0x25b613.chat].length > _0x1ece42 && !_0x25b613.checkBot(_0x151e80)) {
      if (_0x25b613.isGroup) {
        if (_0x25b613.isBotAdmin) {
          await _0x25b613.send("*_Hey @" + _0x151e80.split('@')[0x0] + ", Kicking you from group!_*\n*_Because Your warn limit exceed!_*", {
            'mentions': [_0x151e80]
          });
          await _0x25b613.bot.groupParticipantsUpdate(_0x25b613.chat, [_0x151e80], "remove");
        } else {
          return await _0x25b613.send("*_Hey @" + _0x151e80.split('@')[0x0] + " Dont Spam, Your warn limit exceed!_*");
        }
      } else {
        await _0x25b613.send("*_Hey @" + _0x151e80.split('@')[0x0] + ", Blocking you!_*\n*_Because Your warn limit exceed!_*", {
          'mentions': [_0x151e80]
        });
        await _0x25b613.bot.updateBlockStatus(_0x151e80, "block");
      }
    } else {
      return await _0x25b613.send("*_Hey @" + _0x151e80.split('@')[0x0] + " warning added, Don't spam!_*", {
        'mentions': [_0x151e80]
      });
    }
  } catch (_0x1643cd) {
    await _0x25b613.error(_0x1643cd + "\n\nCommand: warn ", _0x1643cd, false);
  }
});
smd({
  'pattern': "resetwarn",
  'desc': "create paste of text.",
  'category': "general",
  'filename': __filename,
  'use': " user "
}, async (_0x368fba, _0x572e41) => {
  try {
    if (!_0x368fba.isCreator && !_0x368fba.isAdmin) {
      return await _0x368fba.reply(tlang().admin);
    }
    let _0x3aebc9 = _0x368fba.reply_message ? _0x368fba.reply_message.sender : _0x368fba.mentionedJid[0x0] ? _0x368fba.mentionedJid[0x0] : false;
    if (!_0x3aebc9) {
      return await _0x368fba.send("*_Uhh please, reply to a user!!_*");
    }
    let _0x5ba6ae = (await userdb.findOne({
      'id': _0x3aebc9
    })) || (await userdb['new']({
      'id': _0x3aebc9
    })) || {};
    let _0x401daf = _0x5ba6ae.warn || {};
    if (_0x368fba.isCreator && _0x572e41.toLowerCase() === "all" && _0x401daf) {
      _0x401daf = {};
    } else {
      if (!_0x5ba6ae || !_0x401daf || !_0x401daf[_0x368fba.chat]) {
        return await _0x368fba.send("*_User didn't have any warning yet!!_*");
      }
      delete _0x401daf[_0x368fba.chat];
    }
    await userdb.updateOne({
      'id': _0x3aebc9
    }, {
      'warn': _0x401daf
    });
    await _0x368fba.reply("*User is free as a bird now!*\n*All warns has been deleted!*");
  } catch (_0x4311db) {
    await _0x368fba.error(_0x4311db + "\n\nCommand: resetwarn", _0x4311db);
  }
});
smd({
  'pattern': 'act',
  'alias': ["activate", "active"],
  'desc': "Switches for varios works.",
  'category': "moderation",
  'filename': __filename
}, async (_0x3ea19a, _0x17e107) => {
  try {
    if (!_0x3ea19a.isGroup) {
      return _0x3ea19a.reply(tlang().group);
    }
    const _0x425c15 = _0x3ea19a.isAdmin;
    let _0x7daa2a = _0x17e107?.["split"](" ")[0x0]['toLowerCase']()?.['trim']() || false;
    if (!_0x425c15 && !_0x3ea19a.isCreator) {
      return _0x3ea19a.reply(tlang().admin);
    }
    let _0x3712a2 = (await groupdb.findOne({
      'id': _0x3ea19a.chat
    })) || (await groupdb['new']({
      'id': _0x3ea19a.chat
    })) || false;
    if (!_0x3712a2) {
      return await _0x3ea19a.reply("*_Uhh dear, Group not found in Databse!_*");
    }
    switch (_0x7daa2a) {
      case "antilink":
        {
          if (_0x3712a2.antilink !== "false") {
            return await _0x3ea19a.reply("*_Antilink was alredy enabled here!_*");
          }
          await groupdb.updateOne({
            'id': _0x3ea19a.chat
          }, {
            'antilink': "warn"
          });
          await _0x3ea19a.reply("*_Enabled antilink in current chat.!_*");
        }
        break;
      case "economy":
        {
          if (_0x3712a2.economy == "true") {
            return await _0x3ea19a.reply("*_Economy was alredy enabled.!_*");
          }
          await groupdb.updateOne({
            'id': _0x3ea19a.chat
          }, {
            'economy': "true"
          });
          await _0x3ea19a.reply("*_Economy enabled in current chat.!_*");
        }
        break;
      case "events":
      case "event":
        {
          await groupdb.updateOne({
            'id': _0x3ea19a.chat
          }, {
            'welcome': "true",
            'goodbye': 'true'
          });
          return await _0x3ea19a.reply("*Successfully Enabled Events!*");
        }
        break;
      case "nsfw":
        {
          if (_0x3712a2.nsfw == 'true') {
            return await _0x3ea19a.reply("*_NSFW is already enabled!_*");
          }
          await groupdb.updateOne({
            'id': _0x3ea19a.chat
          }, {
            'nsfw': "true"
          });
          await _0x3ea19a.reply("*_Successfully Enabled NSFW_*");
        }
        break;
      case "bot":
        {
          if (_0x3712a2.botenable == "true") {
            return await _0x3ea19a.reply("*_bot is already enabled!_*");
          }
          await groupdb.updateOne({
            'id': _0x3ea19a.chat
          }, {
            'botenable': "true"
          });
          await _0x3ea19a.reply("*_Successfully Enabled bot_*");
        }
        break;
      default:
        {
          _0x3ea19a.reply("Please provide me term like.\n1-events\n2-antilink\n3-nsfw\n4-economy\n5-bot");
        }
    }
  } catch (_0x270457) {
    await _0x3ea19a.error(_0x270457 + "\n\ncommand: act", _0x270457);
  }
});
smd({
  'pattern': 'deact',
  'alias': ["deactive", 'deactivate'],
  'desc': "Switches for varios works.",
  'category': "moderation",
  'filename': __filename
}, async (_0x22c191, _0xc5e250) => {
  try {
    if (!_0x22c191.isGroup) {
      return _0x22c191.reply(tlang().group);
    }
    const _0x570522 = _0x22c191.isAdmin;
    let _0x23e9b6 = _0xc5e250?.["split"](" ")[0x0]['toLowerCase']()?.["trim"]() || false;
    if (!_0x23e9b6) {
      return _0x22c191.reply("❌ Please provide me term like like\n1-events\n2-antilink\n3-nsfw\n4-bot\n5-economy");
    }
    if (!_0x570522 && !_0x22c191.isCreator) {
      return _0x22c191.reply(tlang().admin);
    }
    let _0x4f5d81 = (await groupdb.findOne({
      'id': _0x22c191.chat
    })) || (await groupdb["new"]({
      'id': _0x22c191.chat
    })) || false;
    if (!_0x4f5d81) {
      return await _0x22c191.reply("*_Uhh dear, request not be proceed due to error!_*");
    }
    switch (_0x23e9b6) {
      case "antilink":
        {
          if (_0x4f5d81.antilink == 'false') {
            return _0x22c191.reply("*_Antilink was alredy disabled_*");
          }
          await groupdb.updateOne({
            'id': _0x22c191.chat
          }, {
            'antilink': "false"
          });
          _0x22c191.reply("*_disabled antilink in current chat!_*");
        }
        break;
      case 'economy':
        {
          if (_0x4f5d81.economy == 'false') {
            return _0x22c191.reply("*_Economy was alredy disabled!_*");
          }
          await groupdb.updateOne({
            'id': _0x22c191.chat
          }, {
            'economy': 'false'
          });
          _0x22c191.reply("*disabled Economy in current chat.*");
        }
        break;
      case "events":
      case "event":
        {
          if (_0x4f5d81.events == "false") {
            return _0x22c191.reply("*_Events are already disabled!_*");
          }
          await groupdb.updateOne({
            'id': _0x22c191.chat
          }, {
            'welcome': "false",
            'goodbye': "false"
          });
          return _0x22c191.reply("*Successfully disabled Events!*");
        }
        break;
      case "nsfw":
        {
          if (_0x4f5d81.nsfw == "false") {
            return _0x22c191.reply("*_NSFW is already disabled!_*");
          }
          await groupdb.updateOne({
            'id': _0x22c191.chat
          }, {
            'nsfw': "false"
          });
          _0x22c191.reply("*Successfully disabled NSFW*");
        }
        break;
      case "bot":
        {
          if (_0x4f5d81.botenable == "false") {
            return await _0x22c191.reply("*_bot is already disabled!_*");
          }
          await groupdb.updateOne({
            'id': _0x22c191.chat
          }, {
            'botenable': "true"
          });
          await _0x22c191.reply("*_Successfully disabled bot_*");
        }
        break;
      default:
        {
          _0x22c191.reply("Please provide me term like.\n1-events\n2-antilink\n3-nsfw\n4-bot\n5-economy");
        }
    }
  } catch (_0x58dd2d) {
    await _0x22c191.error(_0x58dd2d + "\n\ncommand: deact", _0x58dd2d);
  }
});
smd({
  'pattern': "bot",
  'desc': "activates and deactivates bot.\nuse buttons to toggle.",
  'fromMe': true,
  'category': "misc",
  'filename': __filename
}, async (_0x36023e, _0x417a09) => {
  try {
    let _0x312252 = _0x417a09 ? _0x417a09.toLowerCase().trim() : false;
    let _0x788c96 = _0x312252 ? _0x312252.split(" ")[0x0] : false;
    let _0x483f15 = (await groupdb.findOne({
      'id': _0x36023e.chat
    })) || (await groupdb["new"]({
      'id': _0x36023e.chat
    }));
    if (!_0x788c96) {
      await _0x36023e.send("*_Bot *" + (_0x483f15.botenable === "false" ? "Disabled" : "Enabled") + " in this Chat!_*");
    } else if (_0x788c96.startsWith("off") || _0x788c96.startsWith('deact') || _0x788c96.startsWith("disable")) {
      if (_0x483f15.botenable === "false") {
        await _0x36023e.send("*_Bot already disabled in current Chat!!_*");
      } else {
        await groupdb.updateOne({
          'id': _0x36023e.chat
        }, {
          'botenable': "false"
        });
        await _0x36023e.send("*_Bot Disabled Succesfully!_*");
      }
    } else if (_0x788c96.startsWith('on') || _0x788c96.startsWith("act") || _0x788c96.startsWith("enable")) {
      if (_0x483f15.botenable === "true") {
        await _0x36023e.send("*_Bot already enabled in current Chat!!_*");
      } else {
        await groupdb.updateOne({
          'id': _0x36023e.chat
        }, {
          'botenable': "true"
        });
        await _0x36023e.send("*_Bot Succesfully Enabled!_*");
      }
    } else {
      await _0x36023e.send("*_Provide Valid Instruction_*\n*Ex: _" + prefix + "bot on/off_*");
    }
  } catch (_0x19d04e) {
    _0x36023e.error(_0x19d04e + "\n\ncommand: bot", _0x19d04e);
  }
});
smd({
  'pattern': "antitag",
  'desc': "detect tagall in group chat, then kick them",
  'fromMe': true,
  'category': "misc",
  'filename': __filename
}, async (_0x162be2, _0x460b82) => {
  try {
    let _0x517c21 = _0x460b82 ? _0x460b82.toLowerCase().trim() : false;
    let _0x3fc673 = _0x517c21 ? _0x517c21.split(" ")[0x0] : false;
    let _0x22415a = (await groupdb.findOne({
      'id': _0x162be2.chat
    })) || (await groupdb["new"]({
      'id': _0x162be2.chat
    }));
    if (!_0x3fc673) {
      await _0x162be2.send("*_Anti_tag *" + (_0x22415a.antitag === 'false' ? "Disabled" : "Enabled") + " in this Chat!_*");
    } else if (_0x3fc673.startsWith("off") || _0x3fc673.startsWith("deact") || _0x3fc673.startsWith('disable')) {
      if (_0x22415a.antitag === "false") {
        await _0x162be2.send("*_Anti_tag already disabled in current Chat!!_*");
      } else {
        await groupdb.updateOne({
          'id': _0x162be2.chat
        }, {
          'antitag': "false"
        });
        await _0x162be2.send("*_Anti_tag Disabled Succesfully!_*");
      }
    } else if (_0x3fc673.startsWith('on') || _0x3fc673.startsWith('act') || _0x3fc673.startsWith("enable")) {
      if (_0x22415a.antitag === "true") {
        await _0x162be2.send("*_Anti_tag already enabled in current Chat!!_*");
      } else {
        await groupdb.updateOne({
          'id': _0x162be2.chat
        }, {
          'antitag': "true"
        });
        await _0x162be2.send("*_Anti_tag succesfully enabled in chat!_*\n*_Now bot kick user who tag all members!_*");
      }
    } else {
      await _0x162be2.send("*_Provide Valid Instruction_*\n*Ex: _" + prefix + "antitag on/off_*");
    }
  } catch (_0x8e73b8) {
    _0x162be2.error(_0x8e73b8 + "\n\ncommand: antitag", _0x8e73b8);
  }
});
smd({
  'pattern': 'antilink',
  'desc': "activates and deactivates antilink.\nuse buttons to toggle.",
  'category': "group",
  'filename': __filename
}, async (_0x4766e6, _0x2f2161, {
  smd: _0x30fd76
}) => {
  try {
    if (!_0x4766e6.isGroup) {
      return _0x4766e6.reply(tlang().group);
    }
    if (!_0x4766e6.isAdmin && !_0x4766e6.isCreator) {
      return _0x4766e6.reply(tlang().admin);
    }
    let _0x473f72 = _0x2f2161 ? _0x2f2161.toLowerCase().trim() : false;
    let _0x2b014c = _0x473f72 ? _0x473f72.split(" ")[0x0] : false;
    let _0x30e685 = (await groupdb.findOne({
      'id': _0x4766e6.chat
    })) || (await groupdb["new"]({
      'id': _0x4766e6.chat
    }));
    if (!_0x2b014c) {
      return await _0x4766e6.send("*_Antilink " + (_0x30e685.antilink === "false" ? "Disabled" : 'Enabled') + " in this Group!_* \n" + (_0x30e685.antilink === "false" ? '' : "*Current Mode:* _" + _0x30e685.antilink + '_') + "\n\n*Antilink Modes:* ```\n" + (prefix + _0x30fd76) + " kick (Delete Links & Kick Senders)\n" + (prefix + _0x30fd76) + " delete (Delete Links Only)\n" + (prefix + _0x30fd76) + " warn (warn & delete links)\n" + (prefix + _0x30fd76) + " off (Disable Antilink in chat) ```\n\n\n" + Config.caption);
    } else {
      if (_0x2b014c.startsWith("off") || _0x2b014c.startsWith('deact') || _0x2b014c.startsWith('disable')) {
        if (_0x30e685.antilink === "false") {
          return await _0x4766e6.send("*_Anti_Link already disabled in current Chat!!_*");
        }
        await groupdb.updateOne({
          'id': _0x4766e6.chat
        }, {
          'antilink': "false"
        });
        return await _0x4766e6.send("*_Anti_Link Disabled Succesfully!_*");
      } else {
        if (_0x2b014c.startsWith('kick')) {
          if (_0x30e685.antilink === "kick") {
            return await _0x4766e6.send("*_Anti_Link already set to kick link senders!!_*");
          }
          await groupdb.updateOne({
            'id': _0x4766e6.chat
          }, {
            'antilink': "kick"
          });
          return await _0x4766e6.send("*_Anti_Link Succesfully set to kick link senders!_*");
        } else {
          if (_0x2b014c.startsWith("delete")) {
            if (_0x30e685.antilink === 'delete') {
              return await _0x4766e6.send("*_Anti_Link already set to delete links!!_*");
            }
            await groupdb.updateOne({
              'id': _0x4766e6.chat
            }, {
              'antilink': "delete"
            });
            return await _0x4766e6.send("*_Anti_Link Succesfully set to delete links from chat!_*");
          } else {
            if (_0x2b014c.startsWith("warn")) {
              if (_0x30e685.antilink === "warn") {
                return await _0x4766e6.send("*_Anti_Link already set to warn link senders!!_*");
              }
              await groupdb.updateOne({
                'id': _0x4766e6.chat
              }, {
                'antilink': 'warn'
              });
              return await _0x4766e6.send("*_Anti_Link set to warn and delete links!_*");
            } else {
              return await _0x4766e6.send("*_Uhh Please, Provide Valid Instruction_*\n*Eg: _" + prefix + "antilink kick/delete/warn/off_*");
            }
          }
        }
      }
    }
  } catch (_0x3c9308) {
    _0x4766e6.error(_0x3c9308 + "\n\ncommand: antilink", _0x3c9308);
  }
});
smd({
  'pattern': 'welcome',
  'alias': ["setwelcome"],
  'desc': "sets welcome message in specific group.",
  'category': 'group',
  'filename': __filename
}, async (_0x17ea45, _0x25b1e4) => {
  try {
    if (!_0x17ea45.isGroup) {
      return _0x17ea45.reply(tlang().group);
    }
    if (!_0x17ea45.isAdmin && !_0x17ea45.isCreator) {
      return _0x17ea45.reply(tlang().admin);
    }
    let _0x32a08b = _0x25b1e4.toLowerCase().trim();
    let _0x3c3e07 = (await groupdb.findOne({
      'id': _0x17ea45.chat
    })) || (await groupdb['new']({
      'id': _0x17ea45.chat
    }));
    if (_0x32a08b === 'on' || _0x32a08b === "act" || _0x32a08b === "enable") {
      if (_0x3c3e07.welcome === "true") {
        return await _0x17ea45.send("*_Welcome already enabled in current group!!_*");
      }
      await groupdb.updateOne({
        'id': _0x17ea45.chat
      }, {
        'welcome': "true"
      });
      await _0x17ea45.send("*Welcome successfully enabled!!*");
    }
    if (_0x3c3e07.welcome !== "true") {
      return await _0x17ea45.send("*_Welcome *Disabled in this Group!_* \n*_Use on/off to enable/disable welcome_*");
    }
    if (!_0x25b1e4 || _0x32a08b === "get") {
      return await _0x17ea45.reply("*Welcome :* " + _0x3c3e07.welcometext);
    }
    if (_0x32a08b === "off" || _0x32a08b === 'deact' || _0x32a08b === "disable") {
      if (_0x3c3e07.welcome === "false") {
        return await _0x17ea45.send("*_Welcome already disabled in current group!!_*");
      }
      await groupdb.updateOne({
        'id': _0x17ea45.chat
      }, {
        'welcome': "false"
      });
      return await _0x17ea45.send("*Welcome message disabled!!*");
    }
    await groupdb.updateOne({
      'id': _0x17ea45.chat
    }, {
      'welcometext': _0x25b1e4,
      'welcome': "true"
    });
    await sendWelcome(_0x17ea45, _0x25b1e4);
  } catch (_0xcdd570) {
    _0x17ea45.error(_0xcdd570 + "\n\ncommand: setwelcome", _0xcdd570);
  }
});
smd({
  'pattern': "goodbye",
  'alias': ['setgoodbye', 'setbye'],
  'desc': "sets goodbye message in specific group.",
  'category': "group",
  'filename': __filename
}, async (_0x417086, _0x21164c) => {
  try {
    if (!_0x417086.isGroup) {
      return _0x417086.reply(tlang().group);
    }
    if (!_0x417086.isAdmin && !_0x417086.isCreator) {
      return _0x417086.reply(tlang().admin);
    }
    let _0xa1f065 = _0x21164c.toLowerCase().trim();
    let _0x123d29 = (await groupdb.findOne({
      'id': _0x417086.chat
    })) || (await groupdb["new"]({
      'id': _0x417086.chat
    }));
    if (_0xa1f065 === 'on' || _0xa1f065 === "act" || _0xa1f065 === "enable") {
      if (_0x123d29.goodbye === "true") {
        return await _0x417086.send("*_Goodbye already enabled in current group!!_*");
      }
      await groupdb.updateOne({
        'id': _0x417086.chat
      }, {
        'goodbye': 'true'
      });
      await _0x417086.send("*Goodbye successfully enabled!!*");
    }
    if (_0x123d29.goodbye !== "true") {
      return await _0x417086.send("*_Goodbye *Disabled in this Group!_* \n*_Use on/off to enable/disable goodbye_*");
    }
    if (!_0x21164c || _0xa1f065 === "get") {
      return await _0x417086.reply("*Goodbye Message :* " + _0x123d29.goodbyetext);
    }
    if (_0xa1f065 === "off" || _0xa1f065 === "deact" || _0xa1f065 === 'disable') {
      if (_0x123d29.goodbye === "false") {
        return await _0x417086.send("*_Goodbye already disabled in current group!!_*");
      }
      await groupdb.updateOne({
        'id': _0x417086.chat
      }, {
        'goodbye': "false"
      });
      return await _0x417086.send("*Goodbye message disabled!!*");
    }
    await groupdb.updateOne({
      'id': _0x417086.chat
    }, {
      'goodbyetext': _0x21164c,
      'goodbye': "true"
    });
    await sendWelcome(_0x417086, _0x21164c);
  } catch (_0x19c984) {
    _0x417086.error(_0x19c984 + "\n\ncommand: setgoodbye", _0x19c984);
  }
});
smd({
  'pattern': "onlyadmin",
  'alias': ["antimessge"],
  'desc': "activates and deactivates onlyadmin.",
  'category': 'group',
  'filename': __filename
}, async (_0x5b77f7, _0x54769f, {
  cmdName: _0x4af34c
}) => {
  try {
    if (!_0x5b77f7.isGroup) {
      return _0x5b77f7.reply(tlang().group);
    }
    if (!_0x5b77f7.isAdmin && !_0x5b77f7.isCreator) {
      return _0x5b77f7.reply(tlang().admin);
    }
    let _0x25ad19 = (await groupdb.findOne({
      'id': _0x5b77f7.chat
    })) || (await groupdb["new"]({
      'id': _0x5b77f7.chat
    }));
    let _0x47b53f = _0x54769f ? _0x54769f.toLowerCase().trim() : false;
    let _0x4a6ac9 = _0x47b53f ? _0x47b53f.split(" ")[0x0] : false;
    if (!_0x4a6ac9) {
      return await _0x5b77f7.send('*_' + _0x4af34c + " *" + (_0x25ad19.onlyadmin === "false" ? "Disabled" : 'Enabled') + " in this Group!_*\n *_Use on/off to enable/disable_*");
    } else {
      if (_0x4a6ac9.startsWith('off') || _0x4a6ac9.startsWith("deact") || _0x4a6ac9.startsWith("disable")) {
        if (_0x25ad19.onlyadmin === "false") {
          return await _0x5b77f7.reply("*_Onlyadmin Already Disabled in Current Chat_*");
        }
        await groupdb.updateOne({
          'id': _0x5b77f7.chat
        }, {
          'onlyadmin': "false"
        });
        await _0x5b77f7.bot.groupSettingUpdate(_0x5b77f7.chat, 'not_announcement');
        return await _0x5b77f7.send('*' + _0x4af34c + " succesfully disable in group!_*\n*_Now everyone send message in group_*");
      } else {
        if (_0x4a6ac9.startsWith('on') || _0x4a6ac9.startsWith("act") || _0x4a6ac9.startsWith('enable')) {
          if (_0x25ad19.onlyadmin === "true") {
            return await _0x5b77f7.reply("*_Onlyadmin Already Enabled in Current Chat_*");
          }
          return _0x5b77f7.isBotAdmin ? (await groupdb.updateOne({
            'id': _0x5b77f7.chat
          }, {
            'onlyadmin': "true"
          }), await _0x5b77f7.bot.groupSettingUpdate(_0x5b77f7.chat, 'announcement'), await _0x5b77f7.send('*' + _0x4af34c + " succesfully set to kick msg senders!_*\n*_Now only admins allow to send msg in group_*")) : await _0x5b77f7.reply("*_UHH Please, Provide Admin Role First_*");
        } else {
          return await _0x5b77f7.reply("*_Please Provide Valid Instruction_*\n*_Use on/off to enable/disable_*");
        }
      }
    }
  } catch (_0x31a764) {
    _0x5b77f7.error(_0x31a764 + "\n\ncommand: onlyadmin", _0x31a764);
  }
});
smd({
  'pattern': "antibot",
  'desc': "kick Bot Users from Group.!",
  'category': "group",
  'filename': __filename
}, async (_0x13af7e, _0x4f012c, {
  cmdName: _0x16bd7d
}) => {
  try {
    if (!_0x13af7e.isGroup) {
      return _0x13af7e.reply(tlang().group);
    }
    if (!_0x13af7e.isAdmin && !_0x13af7e.isCreator) {
      return _0x13af7e.reply(tlang().admin);
    }
    let _0x4ac106 = (await groupdb.findOne({
      'id': _0x13af7e.chat
    })) || (await groupdb["new"]({
      'id': _0x13af7e.chat
    }));
    let _0x31a4cf = _0x4f012c ? _0x4f012c.toLowerCase().trim() : '';
    let _0x28ec37 = _0x31a4cf.startsWith('on') || _0x31a4cf.startsWith("act") || _0x31a4cf.startsWith("enable") || _0x31a4cf.startsWith("del") || _0x31a4cf.startsWith("warn") ? "warn" : _0x31a4cf.startsWith("kic") ? "kick" : _0x31a4cf.startsWith("off") || _0x31a4cf.startsWith('reset') || _0x31a4cf.startsWith("deact") || _0x31a4cf.startsWith("disable") ? 'false' : '';
    if (!_0x28ec37) {
      return await _0x13af7e.send("*_Antibot Currently *" + (_0x4ac106.antibot === "false" ? "Disabled" : 'Enabled') + " in this Group!_*\n*_Use warn/kick/off to enable/disable Antibot_*");
    } else {
      if (_0x28ec37 === 'false') {
        if (_0x4ac106.antibot === "false") {
          return await _0x13af7e.reply("*_Antibot Already Disabled in Current Chat_*");
        }
        await groupdb.updateOne({
          'id': _0x13af7e.chat
        }, {
          'antibot': "false"
        });
        return await _0x13af7e.send("*_Antibot Succesfully Disable in group!_*");
      } else {
        if (_0x28ec37 === "warn" || _0x28ec37 === "kick") {
          if (_0x4ac106.antibot === _0x28ec37) {
            return await _0x13af7e.reply("*_Antibot Already set to " + _0x28ec37 + " bots!_*");
          }
          if (!_0x13af7e.isBotAdmin) {
            return await _0x13af7e.reply("*_Uhh Please, Provide Admin Role First_*");
          }
          await groupdb.updateOne({
            'id': _0x13af7e.chat
          }, {
            'antibot': _0x28ec37
          });
          return await _0x13af7e.send("*_Antibot Succesfully set to " + _0x28ec37 + " Bot Users!_*");
        } else {
          return await _0x13af7e.reply("*_Please provide valid instructions!_*\n*_Use warn/kick/off to enable/disable Antibot!_*");
        }
      }
    }
  } catch (_0x4571c1) {
    _0x13af7e.error(_0x4571c1 + "\n\ncommand: antibot", _0x4571c1);
  }
});
smd({
  'pattern': 'disable',
  'desc': "disable cmds in Group.!",
  'category': 'group',
  'filename': __filename
}, async (_0x181384, _0x24f339) => {
  try {
    if (!_0x181384.isGroup) {
      return _0x181384.reply(tlang().group);
    }
    if (!_0x181384.isAdmin && !_0x181384.isCreator) {
      return _0x181384.reply(tlang().admin);
    }
    let _0x576751 = (await groupdb.findOne({
      'id': _0x181384.chat
    })) || (await groupdb["new"]({
      'id': _0x181384.chat
    }));
    let _0xdca5b3 = _0x24f339 ? _0x24f339.toLowerCase().trim() : false;
    let _0xb5a22c = _0xdca5b3 ? _0xdca5b3.split(" ")[0x0] : '';
    if (!_0xb5a22c) {
      return await _0x181384.send("*Provide cmd name to disable in group*\n*Ex " + prefix + "disable tag(to disabled 'tag' cmd)/info*");
    } else {
      if (_0xb5a22c.startsWith('info') || _0xb5a22c.startsWith("list") || _0xb5a22c.startsWith("cmds")) {
        return await _0x181384.send(_0x576751.disablecmds === "false" ? "*_Uhh Dear, Theres no cmd disabled in current group_*" : "*_Disable cmds :_* ```" + _0x576751.disablecmds.replace('false,', '') + "```");
      } else {
        if (_0xb5a22c.startsWith("enable") || _0xb5a22c.startsWith("disable") || _0xb5a22c.startsWith("bot")) {
          return await _0x181384.reply("*_Uhh Dear, I can't disable that cmd_*");
        } else {
          if (_0xb5a22c) {
            const _0x4032ef = sᴜʜᴀɪʟ_ᴍᴅ.commands.find(_0x27aff1 => _0x27aff1.pattern === _0xb5a22c) || sᴜʜᴀɪʟ_ᴍᴅ.commands.find(_0x54486f => _0x54486f.alias && _0x54486f.alias.includes(_0xb5a22c));
            if (_0x4032ef) {
              let _0x413db3 = _0x4032ef.pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
              let _0x1f0ca4 = new RegExp("\\b" + _0x413db3 + "\\b");
              if (_0x1f0ca4.test(_0x576751.disablecmds)) {
                return await _0x181384.send("*Uhh Dear, Provided cmd already in disable cmds*");
              }
              var _0x3bdbce = _0x576751.disablecmds + ',' + _0x4032ef.pattern;
              await groupdb.updateOne({
                'id': _0x181384.chat
              }, {
                'disablecmds': _0x3bdbce
              });
              let _0x239172 = _0x3bdbce.replace('false,', '');
              return await _0x181384.send("*_\"" + _0xb5a22c + "\" Succesfully added in disable cmds_*" + (_0x239172 === '' ? '' : "\n*_Disable cmds :_* ```" + _0x239172 + "```"));
            } else {
              return await _0x181384.reply("*_'" + _0xb5a22c + "' is not a bot command, Provide valid command_*");
            }
          }
        }
      }
    }
  } catch (_0x52646c) {
    _0x181384.error(_0x52646c + "\n\ncommand: enable", _0x52646c);
  }
});
smd({
  'pattern': 'enable',
  'desc': "enable a cmd in Group.!",
  'category': "group",
  'filename': __filename
}, async (_0x235985, _0x21cafa) => {
  try {
    if (!_0x235985.isGroup) {
      return _0x235985.reply(tlang().group);
    }
    if (!_0x235985.isAdmin && !_0x235985.isCreator) {
      return _0x235985.reply(tlang().admin);
    }
    let _0x36c845 = (await groupdb.findOne({
      'id': _0x235985.chat
    })) || (await groupdb["new"]({
      'id': _0x235985.chat
    }));
    let _0x4daba9 = _0x21cafa ? _0x21cafa.toLowerCase().trim() : false;
    let _0x405e67 = _0x4daba9 ? _0x4daba9.split(" ")[0x0] : '';
    let _0x2c1317 = _0x405e67.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    let _0x2240d7 = new RegExp("\\b" + _0x2c1317 + "\\b");
    if (!_0x405e67 || _0x405e67 === '') {
      return await _0x235985.send("*Please provide disabled cmd name to enable it*\n*Ex " + prefix + "enable tag(if 'tag' cmd disabled)/all(reset disables)*");
    } else {
      if (_0x4daba9.startsWith("all")) {
        await groupdb.updateOne({
          'id': _0x235985.chat
        }, {
          'disablecmds': "false"
        });
        return await _0x235985.send("*_All disable cmds succesfully enabled_*");
      } else {
        if (_0x2240d7.test(_0x36c845.disablecmds) && _0x36c845.disablecmds.includes(_0x405e67)) {
          let _0x4c964d = _0x36c845.disablecmds.replace(_0x2240d7, '');
          await groupdb.updateOne({
            'id': _0x235985.chat
          }, {
            'disablecmds': _0x4c964d
          });
          return await _0x235985.send("*_\"" + _0x405e67.replace(',', '') + "\" Succesfully removed from disable cmds_*");
        } else {
          return await _0x235985.send("_There's no cmd disabled with *" + _0x405e67.replace(',', '') + "* name");
        }
      }
    }
  } catch (_0x23b198) {
    _0x235985.error(_0x23b198 + "\n\ncommand: disable", _0x23b198);
  }
});
smd({
  'pattern': 'antifake',
  'desc': "𝗗𝗲𝘁𝗲𝗰𝘁𝘀 𝗽𝗿𝗼𝗺𝗼𝘁𝗲/𝗱𝗲𝗺𝗼𝘁𝗲 𝗮𝗻𝗱 𝘀𝗲𝗻𝗱𝘀 𝗮𝗹𝗲𝗿𝘁. ",
  'category': "group",
  'filename': __filename
}, async (_0x23dc54, _0x57ed5b) => {
  try {
    if (!_0x23dc54.isGroup) {
      return _0x23dc54.reply(tlang().group);
    }
    if (!_0x23dc54.isAdmin && !_0x23dc54.isCreator) {
      return _0x23dc54.reply(tlang().admin);
    }
    let _0x4ec99d = (await groupdb.findOne({
      'id': _0x23dc54.chat
    })) || (await groupdb["new"]({
      'id': _0x23dc54.chat
    }));
    let _0x291b47 = _0x57ed5b ? _0x57ed5b.toLowerCase().trim() : '';
    if (_0x291b47.startsWith("off") || _0x291b47.startsWith('deact') || _0x291b47.startsWith("disable")) {
      if (_0x4ec99d.antifake == "false") {
        return await _0x23dc54.send("*Anti_Fake Already Disabled In Current Chat!*");
      }
      await groupdb.updateOne({
        'id': _0x23dc54.chat
      }, {
        'antifake': "false"
      });
      return await _0x23dc54.send("*Anti_Fake Disable Succesfully!*");
    } else {
      if (!_0x57ed5b) {
        return await _0x23dc54.send("*_Antifake " + (_0x4ec99d.antifake === "false" ? "Not set to any" : "set to \"" + _0x4ec99d.antifake + "\"") + " Country Code!_*\n *Provide Country code to Update Antifake Status*\n*Eg: _.antifake 92_*");
      }
    }
    let _0x425a16 = _0x57ed5b ? _0x57ed5b.split(',').map(_0x3d487b => parseInt(_0x3d487b)).filter(_0x1929f9 => !isNaN(_0x1929f9)).join(',') : false;
    return !_0x57ed5b || !_0x425a16 ? await _0x23dc54.send("*_Please provide a country code First_*\n *_Only numbers to join this group._*\n*_eg: " + prefix + "antifake 92_*") : _0x425a16 ? (await groupdb.updateOne({
      'id': _0x23dc54.chat
    }, {
      'antifake': '' + _0x425a16
    }), await _0x23dc54.send("*Anti_Fake Succesfully set to \"" + _0x425a16 + "\"!*\n*_Now People Joined Group Who's Number Start With " + _0x425a16 + '_*')) : await _0x23dc54.send("*_Please provide a Valid country code First_*\n *_Only numbers to join this group._*\n*_eg: " + prefix + "antifake 92_*");
  } catch (_0x2b6707) {
    _0x23dc54.error(_0x2b6707 + "\n\ncommand: antifake", _0x2b6707);
  }
});
smd({
  'pattern': "antidemote",
  'desc': "Detects Promote and Automaticaly demote promoted person.",
  'category': "group",
  'filename': __filename
}, async (_0x5ef18c, _0x349f6a) => {
  try {
    if (!_0x5ef18c.isGroup) {
      return _0x5ef18c.reply(tlang().group);
    }
    if (!_0x5ef18c.isAdmin && !_0x5ef18c.isCreator) {
      return _0x5ef18c.reply(tlang().admin);
    }
    let _0x33da62 = (await groupdb.findOne({
      'id': _0x5ef18c.chat
    })) || (await groupdb['new']({
      'id': _0x5ef18c.chat
    }));
    let _0x419d18 = _0x349f6a ? _0x349f6a.toLowerCase().trim() : '';
    if (_0x419d18.startsWith('on') || _0x419d18.startsWith("act") || _0x419d18.startsWith("enable")) {
      if (_0x33da62.antidemote == "true") {
        return await _0x5ef18c.send("*Anti_Demote Already Enabled In Current Chat!*");
      }
      await groupdb.updateOne({
        'id': _0x5ef18c.chat
      }, {
        'antidemote': 'true'
      });
      return await _0x5ef18c.send("*Anti_Demote Enable Succesfully! _No One Demote Here Now_.*");
    } else {
      if (_0x419d18.startsWith("off") || _0x419d18.startsWith("deact") || _0x419d18.startsWith('disable')) {
        if (_0x33da62.antidemote == 'false') {
          return await _0x5ef18c.send("*Anti_Demote Already Disabled In Current Chat!*");
        }
        await groupdb.updateOne({
          'id': _0x5ef18c.chat
        }, {
          'antidemote': "false"
        });
        return await _0x5ef18c.send("*Anti_Demote Disable Succesfully!*");
      } else {
        return await _0x5ef18c.reply("*Uhh Dear, Please Toggle between \"On\" And \"Off\".* \n*_To Enable & Disable Stop Demoting Peoples!_*");
      }
    }
  } catch (_0x314811) {
    _0x5ef18c.error(_0x314811 + "\n\ncommand: antidemote", _0x314811);
  }
});
smd({
  'pattern': "antipromote",
  'desc': "Detects Promote and Automaticaly demote promoted person.",
  'category': 'group',
  'filename': __filename
}, async (_0x1db510, _0x1feb4a) => {
  try {
    if (!_0x1db510.isGroup) {
      return _0x1db510.reply(tlang().group);
    }
    if (!_0x1db510.isAdmin && !_0x1db510.isCreator) {
      return _0x1db510.reply(tlang().admin);
    }
    let _0x237a65 = (await groupdb.findOne({
      'id': _0x1db510.chat
    })) || (await groupdb["new"]({
      'id': _0x1db510.chat
    }));
    let _0x340a52 = _0x1feb4a ? _0x1feb4a.toLowerCase().trim() : '';
    if (_0x340a52.startsWith('on') || _0x340a52.startsWith("act") || _0x340a52.startsWith("enable")) {
      if (_0x237a65.antipromote == 'true') {
        return await _0x1db510.send("*Anti_Promote Already Enabled In Current Chat!*");
      }
      await groupdb.updateOne({
        'id': _0x1db510.chat
      }, {
        'antipromote': "true"
      });
      return await _0x1db510.send("*Anti_Promote Enable Succesfully! _No One Promote Here Now_.*");
    } else {
      if (_0x340a52.startsWith("off") || _0x340a52.startsWith("deact") || _0x340a52.startsWith("disable")) {
        if (_0x237a65.antipromote == "false") {
          return await _0x1db510.send("*Anti_Promote Already Disabled In Current Chat!*");
        }
        await groupdb.updateOne({
          'id': _0x1db510.chat
        }, {
          'antipromote': "false"
        });
        return await _0x1db510.send("*Anti_Promote Disable Succesfully!*");
      } else {
        return await _0x1db510.reply("*Uhh Dear, Please Toggle between \"On\" And \"Off\".* \n*_To Stop Promoting Peoples in Chat_*");
      }
    }
  } catch (_0x444575) {
    _0x1db510.error(_0x444575 + "\n\ncommand: antipromote", _0x444575);
  }
});
smd({
  'pattern': 'pdm',
  'desc': "Detect Promote/Demote Users And Send Alerts in Chat ",
  'category': "group",
  'filename': __filename
}, async (_0x281b09, _0x338403) => {
  try {
    if (!_0x281b09.isGroup) {
      return _0x281b09.reply(tlang().group);
    }
    if (!_0x281b09.isAdmin && !_0x281b09.isCreator) {
      return _0x281b09.reply(tlang().admin);
    }
    let _0x38b130 = (await groupdb.findOne({
      'id': _0x281b09.chat
    })) || (await groupdb["new"]({
      'id': _0x281b09.chat
    }));
    let _0x32f09c = _0x338403 ? _0x338403.toLowerCase().trim() : '';
    if (_0x32f09c.startsWith('on') || _0x32f09c.startsWith("act") || _0x32f09c.startsWith("enable")) {
      if (_0x38b130.pdm == "true") {
        return await _0x281b09.send("*Promote/Demote Alerts Already Enabled In Current Chat!*");
      }
      await groupdb.updateOne({
        'id': _0x281b09.chat
      }, {
        'pdm': "true"
      });
      return await _0x281b09.send("*Promote/Demote Alerts Enable Succesfully!*");
    } else {
      if (_0x32f09c.startsWith("off") || _0x32f09c.startsWith("deact") || _0x32f09c.startsWith("disable")) {
        if (_0x38b130.pdm == "false") {
          return await _0x281b09.send("*Promote/Demote Alerts Already Disabled In Current Chat!*");
        }
        await groupdb.updateOne({
          'id': _0x281b09.chat
        }, {
          'pdm': 'false'
        });
        return await _0x281b09.send("*Promote/Demote Alerts Disable Succesfully!*");
      } else {
        return await _0x281b09.reply("*Uhh Dear, Please use between \"On\" And \"Off\".* \n*_To get And Stop Promote/Demote Alerts_*");
      }
    }
  } catch (_0x32af6b) {
    _0x281b09.error(_0x32af6b + "\n\ncommand: pdm", _0x32af6b);
  }
});
smd({
  'pattern': 'amute',
  'desc': "sets auto mute time in group.",
  'category': "moderation"
}, async (_0x5f2029, _0x45229e) => {
  try {
    if (!_0x5f2029.isGroup) {
      return _0x5f2029.reply(tlang().group);
    }
    if (!_0x5f2029.isAdmin && !_0x5f2029.isCreator) {
      return _0x5f2029.reply(tlang().admin);
    }
    let _0x4eec14 = (await groupdb.findOne({
      'id': _0x5f2029.chat
    })) || (await groupdb["new"]({
      'id': _0x5f2029.chat
    }));
    if (!_0x45229e) {
      return await _0x5f2029.reply("*Auto_Mute *" + (_0x4eec14.mute === "false" ? "disable" : "enabled") + " for current group*" + (_0x4eec14.mute !== "false" ? "\n *Auto mute status set at : " + _0x4eec14.mute + "* " : ''));
    }
    let [_0xca7d16, _0x5a2c38] = _0x45229e.split(':').map(Number);
    if (isNaN(_0xca7d16) || isNaN(_0x5a2c38) || _0xca7d16 < 0x0 || _0xca7d16 >= 0x18 || _0x5a2c38 < 0x0 || _0x5a2c38 >= 0x3c) {
      return _0x5f2029.reply("Please provide correct form.\nEg: " + prefix + "amute 22:00");
    }
    let _0x251a09 = _0xca7d16.toString().padStart(0x2, '0') + ':' + _0x5a2c38.toString().padStart(0x2, '0');
    await groupdb.updateOne({
      'id': _0x5f2029.chat
    }, {
      'mute': _0x251a09
    });
    return _0x5f2029.reply("*_Successfully done, Group auto mute at " + _0x251a09 + '_*');
  } catch (_0x586c06) {
    _0x5f2029.error(_0x586c06 + "\n\ncommand: amute", _0x586c06);
  }
});
smd({
  'pattern': "aunmute",
  'desc': "sets unmute time in group.",
  'category': "moderation"
}, async (_0x69de34, _0x2eb0b8) => {
  try {
    if (!_0x69de34.isGroup) {
      return _0x69de34.reply(tlang().group);
    }
    if (!_0x69de34.isAdmin && !_0x69de34.isCreator) {
      return _0x69de34.reply(tlang().admin);
    }
    let _0x1c5fe2 = (await groupdb.findOne({
      'id': _0x69de34.chat
    })) || (await groupdb["new"]({
      'id': _0x69de34.chat
    }));
    if (!_0x2eb0b8) {
      return await _0x69de34.reply("*Auto_Unmute *" + (_0x1c5fe2.unmute === "false" ? "disable" : "enabled") + " for current group*" + (_0x1c5fe2.unmute !== "false" ? "\n *Auto unmute status set at : " + _0x1c5fe2.unmute + "* " : ''));
    }
    let [_0x1691f1, _0x27fab] = _0x2eb0b8.split(':').map(Number);
    if (isNaN(_0x1691f1) || isNaN(_0x27fab) || _0x1691f1 < 0x0 || _0x1691f1 >= 0x18 || _0x27fab < 0x0 || _0x27fab >= 0x3c) {
      return _0x69de34.reply("Please provide correct form.\nEg: " + prefix + "aunmute 22:00");
    }
    let _0x4df4d7 = _0x1691f1.toString().padStart(0x2, '0') + ':' + _0x27fab.toString().padStart(0x2, '0');
    await groupdb.updateOne({
      'id': _0x69de34.chat
    }, {
      'unmute': _0x4df4d7
    });
    return _0x69de34.reply("*_Successfully done, Group auto unmute at " + _0x4df4d7 + '_*');
  } catch (_0x5d99e7) {
    _0x69de34.error(_0x5d99e7 + "\n\ncommand: aunmute", _0x5d99e7);
  }
});
smd({
  'pattern': 'dunmute',
  'desc': "Delete unmute from group.",
  'category': "moderation"
}, async _0x1a38b6 => {
  try {
    if (!_0x1a38b6.isGroup) {
      return _0x1a38b6.reply(tlang().group);
    }
    if (!_0x1a38b6.isAdmin && !_0x1a38b6.isCreator) {
      return _0x1a38b6.reply(tlang().admin);
    }
    let _0x574238 = await groupdb.findOne({
      'id': _0x1a38b6.chat
    });
    if (!_0x574238 || !_0x574238.unmute || _0x574238.unmute == 'false') {
      return await _0x1a38b6.reply("*There's no auto unmute set in group.*");
    }
    await groupdb.updateOne({
      'id': _0x1a38b6.chat
    }, {
      'unmute': "false"
    });
    return await _0x1a38b6.reply("*Auto unmute deleted successfully.*");
  } catch (_0x53aead) {
    _0x1a38b6.error(_0x53aead + "\n\ncommand: dunmute", _0x53aead);
  }
});
smd({
  'pattern': 'dmute',
  'desc': "Delete mute from group.",
  'category': "moderation"
}, async (_0x30c2f1, _0x25e8e2) => {
  try {
    if (!_0x30c2f1.isGroup) {
      return _0x30c2f1.reply(tlang().group);
    }
    if (!_0x30c2f1.isAdmin && !_0x30c2f1.isCreator) {
      return _0x30c2f1.reply(tlang().admin);
    }
    let _0x551d0e = await groupdb.findOne({
      'id': _0x30c2f1.chat
    });
    if (!_0x551d0e || !_0x551d0e.mute || _0x551d0e.mute == "false") {
      return await _0x30c2f1.reply("*There's no auto mute set in group.*");
    }
    await groupdb.updateOne({
      'id': _0x30c2f1.chat
    }, {
      'mute': "false"
    });
    return await _0x30c2f1.reply("*Auto mute deleted successfully.*");
  } catch (_0x3c4bed) {
    _0x30c2f1.error(_0x3c4bed + "\n\ncommand: dmute", _0x3c4bed);
  }
});
async function haveEqualMembers(_0x5b53ea, _0x272a98) {
  if (_0x5b53ea.length === 0x0 || _0x272a98.length === 0x0) {
    return false;
  }
  const _0x8a6f69 = _0x5b53ea.filter(_0x5870d1 => _0x272a98.includes(_0x5870d1));
  const _0xf56c33 = _0x8a6f69.length / _0x5b53ea.length * 0x64;
  return _0xf56c33 >= 0x50;
}
smd({
  'pattern': "antiword",
  'desc': "Detects words from chat,and delete/warn senders.",
  'category': "group",
  'filename': __filename,
  'use': "< action | words >"
}, async (_0x42b651, _0x55f3cf, {
  cmdName: _0x591dfd
}) => {
  try {
    if (!_0x42b651.isGroup) {
      return _0x42b651.reply(tlang().group);
    }
    if (!_0x42b651.isAdmin && !_0x42b651.isCreator) {
      return _0x42b651.reply(tlang().admin);
    }
    let _0x421af8 = (await groupdb.findOne({
      'id': _0x42b651.chat
    })) || (await groupdb["new"]({
      'id': _0x42b651.chat,
      'antiword': {
        'status': "false",
        'words': ''
      }
    }));
    let _0x327731 = _0x55f3cf ? _0x55f3cf.toLowerCase().trim() : false;
    let _0x27ca6d = _0x421af8.antiword;
    let _0x15b666 = "*Antiword Currently *" + (_0x27ca6d.status !== "false" ? "enabled" : 'disabled') + "!!!* ```\n  STATUS: " + (_0x27ca6d.status ? _0x27ca6d.status : "--Empty Yet--") + " \n  WORDS: " + (_0x27ca6d.words ? _0x27ca6d.words.replace(/,/gi, " -- ") : "--Empty Yet--") + "```\n\n*Available Cmds:* ```\n  " + (prefix + _0x591dfd) + " off \n  " + (prefix + _0x591dfd) + " reset\n  " + (prefix + _0x591dfd) + " warn | bad,words\n  " + (prefix + _0x591dfd) + " delete | hot,badas\n``` \n\n\n " + Config.caption;
    if (!_0x327731 || !_0x55f3cf) {
      return await _0x42b651.send(_0x15b666);
    }
    let _0x10640c = _0x327731.split('|')[0x1] || '';
    let _0x2fb6c9 = _0x327731.startsWith('on') || _0x327731.startsWith("act") || _0x327731.startsWith("enable") || _0x327731.startsWith("del") ? 'delete' : _0x327731.startsWith("warn") ? "warn" : _0x327731.startsWith("off") || _0x327731.startsWith("deact") || _0x327731.startsWith("disable") ? "false" : _0x327731.startsWith('reset') ? "reset" : '';
    _0x2fb6c9 = !_0x2fb6c9 && _0x10640c && _0x27ca6d.status !== "false" ? _0x27ca6d.status : _0x2fb6c9;
    if (_0x2fb6c9 === 'reset') {
      await groupdb.updateOne({
        'id': _0x42b651.chat
      }, {
        'antiword': {}
      });
      return await _0x42b651.send("*_Anti_Word status cleard!_*");
    } else {
      if (_0x2fb6c9 === "delete" || _0x2fb6c9 === "warn") {
        if (_0x27ca6d.status == _0x2fb6c9 && !_0x10640c) {
          return await _0x42b651.send("*Please provide badWords, like " + (prefix + _0x591dfd) + " " + _0x2fb6c9 + " | bad,words");
        }
        _0x10640c = _0x10640c ? _0x10640c : _0x27ca6d.words;
        await groupdb.updateOne({
          'id': _0x42b651.chat
        }, {
          'antiword': {
            'status': _0x2fb6c9,
            'words': _0x10640c
          }
        });
        return await _0x42b651.send("*_Anti_Word succesfully set to '" + _0x2fb6c9 + "' badward!_*\n*Antiwords are:```" + (_0x10640c ? _0x10640c.replace(/,/gi, " | ") : "--Empty Yet--") + "``` *");
      } else {
        if (_0x2fb6c9 === "false") {
          if (_0x27ca6d.status === _0x2fb6c9) {
            return await _0x42b651.send("*Anti_Word Already Disabled In Current Chat!*");
          }
          await groupdb.updateOne({
            'id': _0x42b651.chat
          }, {
            'antiword': {
              'status': "false",
              'words': _0x27ca6d.words
            }
          });
          return await _0x42b651.send("*Anti_Word Disable Succesfully!*");
        } else {
          return await _0x42b651.reply("*Uhh dear, Please follow instructions!!*\n\n" + _0x15b666);
        }
      }
    }
  } catch (_0x3de0e3) {
    _0x42b651.error(_0x3de0e3 + "\n\ncommand: antiword", _0x3de0e3);
  }
});
let bott = false;
let chatbotCount = 0x0;
smd({
  'on': "main"
}, async (_0x53ba25, _0x1b949d, {
  botNumber: _0x1a9817,
  isCreator: _0x2ad936,
  budy: _0x2c4bcf,
  body: _0x366c1c,
  icmd: _0x79a688
}) => {
  try {
    if (Config.MsgsInLog === "true") {
      console.log('' + (_0x53ba25.isGroup ? "[MESSAGE IN GROUP] From => " + _0x53ba25.metadata.subject + "\n[USER]:" : "[MESSAGE IN PRIVATE] From =>") + (" " + _0x53ba25.senderName + " " + _0x53ba25.senderNum + "\n[" + _0x53ba25.mtype.toUpperCase() + "]: " + _0x53ba25.body + "\n============== [SMD] ================="));
    }
    let _0x21fd02 = (await groupdb.findOne({
      'id': _0x53ba25.chat
    })) || false;
    let _0xc46fd5 = false;
    try {
      if (!global.AstroOfficial && global.AstroOfficial !== "yes") {
        return;
      }
      if (_0x21fd02 && _0x21fd02.antitag == "true" && !_0x53ba25.checkBot() && _0x53ba25.mtype !== "reactionMessage" && _0x21fd02.botenable == 'true') {
        const _0x30e1c6 = await haveEqualMembers(_0x53ba25.metadata.participants.map(_0x5a2d3a => _0x5a2d3a.id), _0x53ba25.mentionedJid);
        if (_0x30e1c6 && _0x53ba25.isBotAdmin) {
          let _0x5ec914 = {
            'reason': "tagging all members!",
            'chat': _0x53ba25.metadata?.["subject"] || "GROUP",
            'warnedby': tlang().title,
            'date': _0x53ba25.date
          };
          _0xc46fd5 = await warn.addwarn(_0x53ba25.sender, _0x53ba25.chat, _0x5ec914);
          await _0x53ba25.reply("*_[TAG DETECTED] Hey @" + _0x53ba25.senderNum + " warning!!_*\n*_Tagging all members is not allowed!_*", {
            'mentions': [_0x53ba25.sender]
          });
          await _0x53ba25["delete"]();
        } else if (_0x30e1c6 && !_0x53ba25.isBotAdmin) {
          await _0x53ba25.reply("*_[TAGALL DETECTED] Can't do anything, without getting admin role!_*", {
            'mentions': [_0x53ba25.sender]
          });
        }
      }
      if (_0x21fd02 && _0x53ba25.isGroup && !_0x53ba25.isAdmin && !_0x2ad936 && _0x53ba25.mtype !== 'reactionMessage' && _0x21fd02.botenable == "true") {
        if (_0x21fd02.antibot && _0x21fd02.antibot !== "false" && _0x53ba25.isBot && !_0x53ba25.checkBot(_0x53ba25.sender)) {
          if (_0x53ba25.isBotAdmin) {
            var _0x39120e = "*_Bot user not allowed, please make it private!_*";
            if (_0x21fd02.antibot === 'warn') {
              let _0x1a85b0 = {
                'reason': "Bots not allowed!",
                'chat': _0x53ba25.metadata?.["subject"] || "GROUP",
                'date': _0x53ba25.date
              };
              _0xc46fd5 = _0xc46fd5 ? _0xc46fd5 : await warn.addwarn(_0x53ba25.sender, _0x53ba25.chat, _0x1a85b0);
              if (_0xc46fd5.status) {
                _0x39120e = "*_Hey @" + _0x53ba25.senderNum + " warning, Due To Antibot!_*";
              }
            } else {
              if (_0x21fd02.antibot === "kick") {
                try {
                  sleep(0x3e8);
                  await _0x53ba25.bot.groupParticipantsUpdate(_0x53ba25.chat, [_0x53ba25.sender], "remove");
                  _0x39120e = "*_User @" + _0x53ba25.senderNum + " kick Due To Antibot!_*";
                } catch {}
              }
            }
            await _0x53ba25['delete']();
            await _0x53ba25.send(_0x39120e, {
              'mentions': [_0x53ba25.sender]
            });
          } else if (!_0x53ba25.isBotAdmin && _0x53ba25.isBot) {
            await _0x53ba25.reply("*_Uhh Please, Provide Admin Role To Kick Other Bot_*\n*_Or Disable Antibot (On/Off) In Current Group_*");
          }
        }
        if (_0x21fd02.onlyadmin && _0x21fd02.onlyadmin === "true" && AstroOfficial == 'yes') {
          var _0x39120e = '';
          if (_0x53ba25.isBotAdmin) {
            let _0xf35c5d = {
              'reason': "Only Admin can Chat!",
              'chat': _0x53ba25.metadata?.['subject'] || "PRIVATE",
              'warnedby': tlang().title,
              'date': _0x53ba25.date
            };
            _0xc46fd5 = _0xc46fd5 ? _0xc46fd5 : await warn.addwarn(_0x53ba25.sender, _0x53ba25.chat, _0xf35c5d);
            if (_0xc46fd5.status) {
              _0x39120e = "*Warns you for chat here!*\n";
            }
            await _0x53ba25['delete']();
            sleep(0x5dc);
            await _0x53ba25.send("*Hey @" + _0x53ba25.senderNum + "* " + _0x39120e + "*Deleteing message,while onlyadmin activated!!* ", {
              'mentions': [_0x53ba25.sender]
            });
          } else {
            await _0x53ba25.send("*_Provide admin role to kick Message Senders_*\n*Or _Disable onlyadmin(on/off) in currentchat_*");
          }
        }
        if (_0x21fd02.antilink && _0x21fd02.antilink !== "false" && AstroOfficial === "yes") {
          const _0x2c347c = Config.antilink_values && Config.antilink_values !== "all" ? Config.antilink_values.split(',').filter(_0x1c1c7d => _0x1c1c7d.trim() !== '') : ['https://', 'chat.whatsapp.com', "fb.com"];
          let _0x48a6cf = _0x366c1c.toLowerCase();
          if (_0x2c347c.some(_0x17d61b => _0x48a6cf.includes(_0x17d61b))) {
            if (!_0x53ba25.isBotAdmin) {
              let _0x3edc1f = " *[LINK DETECTED]*\nUser @" + _0x53ba25.sender.split('@')[0x0] + " detected sending a link.\nPromote " + Config.botname + " as admin to " + (_0x21fd02.antilink === "kick" ? "kick \nlink senders." : "delete \nlinks from this Chat") + " \n";
              await _0x53ba25.send(_0x3edc1f, {
                'mentions': [_0x53ba25.sender]
              });
            } else {
              if (_0x21fd02.antilink === 'delete') {
                await _0x53ba25.send("*_Link Detected.. Deletion Done!_*");
                await _0x53ba25["delete"]();
              } else {
                if (_0x21fd02.antilink === "warn" || _0x21fd02.antilink === "true") {
                  let _0x7cf98e = {
                    'reason': "links not allowed!",
                    'chat': _0x53ba25.metadata?.["subject"] || "PRIVATE",
                    'warnedby': tlang().title,
                    'date': _0x53ba25.date
                  };
                  _0xc46fd5 = _0xc46fd5 ? _0xc46fd5 : await warn.addwarn(_0x53ba25.sender, _0x53ba25.chat, _0x7cf98e);
                  var _0x39120e = _0xc46fd5.status ? "*_[LINK DETECTED] Hey @" + _0x53ba25.senderNum + " warning!!_*\n*_links not allowed in current group!_*" : "*_[LINK DETECTED]!_*";
                  await _0x53ba25.reply(_0x39120e, {
                    'mentions': [_0x53ba25.sender]
                  });
                  await _0x53ba25["delete"]();
                } else {
                  if (_0x21fd02.antilink === 'kick') {
                    await _0x53ba25.send("*_Link Detected!!_*");
                    try {
                      await _0x53ba25["delete"]();
                      await sleep(0x5dc);
                      await _0x53ba25.bot.groupParticipantsUpdate(_0x53ba25.chat, [_0x53ba25.sender], "remove");
                    } catch {
                      await _0x53ba25.send("*Link Detected*\n" + tlang().botAdmin);
                    }
                  }
                }
              }
            }
          }
        }
      }
    } catch (_0x50e5bb) {
      console.log("Error From Antilinks : ", _0x50e5bb);
    }
    var _0x52ed59 = _0x21fd02?.['antiword'] || {
      'status': "false"
    };
    if (_0x1b949d.length > 0x1 && !_0x53ba25.isBot && _0x52ed59 && _0x52ed59.status !== 'false' && _0x52ed59.words) {
      var _0x4eec4c = _0x52ed59.words.split(',') || [];
      let _0x5936bc = false;
      _0x4eec4c.map(async _0xd0ac84 => {
        if (_0x53ba25.isAdmin || !global.AstroOfficial || global.AstroOfficial != "yes") {
          return;
        }
        let _0x26c44e = new RegExp("\\b" + _0xd0ac84?.["trim"]() + "\\b", 'ig');
        let _0x36e7ad = _0x2c4bcf.toLowerCase();
        if (!_0x5936bc && _0xd0ac84 && _0x26c44e.test(_0x36e7ad)) {
          _0x5936bc = true;
          await sleep(0x1f4);
          try {
            var _0x468f39 = '';
            if (_0x52ed59.status === "warn") {
              let _0x200432 = {
                'reason': "For using Bad Word",
                'chat': _0x53ba25.metadata?.['subject'] || "PRIVATE",
                'warnedby': tlang().title,
                'date': _0x53ba25.date
              };
              _0xc46fd5 = _0xc46fd5 ? _0xc46fd5 : await warn.addwarn(_0x53ba25.sender, _0x53ba25.chat, _0x200432);
              if (_0xc46fd5.status) {
                _0x468f39 = "\n*Warns you for using badWord!!*\n";
              }
            }
            if (_0x53ba25.isBotAdmin) {
              await _0x53ba25.send("*[BAD WORD DETECTED] Hey @" + _0x53ba25.senderNum + "* " + _0x468f39 + "*Deleting your message from chat!*\n", {
                'mentions': [_0x53ba25.sender]
              }, "asta", _0x53ba25);
              await _0x53ba25["delete"]();
            } else {
              await _0x53ba25.reply("*_[BAD WORD DETECTED] provide admin to take action!_*", {
                'mentions': [_0x53ba25.sender]
              });
            }
          } catch (_0x3d62a6) {
            console.log("Error From Bad Words : ", _0x3d62a6);
          }
        }
      });
    }
    if (_0xc46fd5) {
      let _0x141249 = parseInt(Config.warncount) || 0x3;
      if (_0xc46fd5.warning >= _0x141249) {
        if (_0x53ba25.isGroup) {
          if (_0x53ba25.isBotAdmin) {
            await _0x53ba25.send("*_Hey @" + _0x53ba25.senderNum + " Kicking you from group!_*\n*_Because Your warn limit exceed!_*", {
              'mentions': [_0x53ba25.sender]
            });
            await _0x53ba25.bot.groupParticipantsUpdate(_0x53ba25.chat, [_0x53ba25.sender], "remove");
          }
        } else {
          await _0x53ba25.send("*_Hey @" + _0x53ba25.senderNum + " Blocking you!_*\n*_Because Your warn limit exceed!_*", {
            'mentions': [_0x53ba25.sender]
          });
          await _0x53ba25.bot.updateBlockStatus(_0x53ba25.sender, "block");
        }
      }
    }
    try {
      if (!global.AstroOfficial || _0x53ba25.mtype == "reactionMessage") {
        return;
      }
      let _0x3ad8a9 = (await groupdb.findOne({
        'id': _0x53ba25.chat
      })) || {
        'chatbot': 'false'
      };
      if (!bott || chatbotCount >= 0xa) {
        bott = (await bot_.findOne({
          'id': "bot_" + _0x53ba25.user
        })) || {
          'chatbot': 'false'
        };
      } else {
        chatbotCount++;
      }
      let _0x1199ea = bott && bott.chatbot && bott.chatbot == "true" ? 'true' : _0x3ad8a9.chatbot || "false";
      if (_0x1199ea === 'true' && !_0x79a688 && !_0x53ba25.isBot && _0x53ba25.text) {
        let _0xac22bf = !_0x53ba25.isGroup ? _0x53ba25.user : _0x53ba25.quoted ? _0x53ba25.quoted.sender : _0x53ba25.mentionedJid[0x0] || false;
        if (_0x53ba25.isGroup && _0xac22bf && !_0x53ba25.checkBot(_0xac22bf)) {
          return;
        }
        let {
          data: _0x206a86
        } = await axios.get("http://api.brainshop.ai/get?bid=175685&key=Pg8Wu8mrDQjfr0uv&uid=[" + _0x53ba25.senderNum + "]&msg=[" + _0x2c4bcf + ']');
        if (_0x206a86 && _0x206a86.cnt) {
          _0x53ba25.send(_0x206a86.cnt, {}, "asta", _0x53ba25);
        } else {
          '';
        }
      }
    } catch (_0x33d5af) {
      console.log("Error From ChatBot : ", _0x33d5af);
    }
  } catch (_0x3b691a) {
    console.log("Group Settings error in command.main() \n", _0x3b691a);
  }
});
let users = {};
let user_warns = {};
smd({
  'group': "add"
}, async (_0x30bcd0, {
  Void: _0x4e75f8
}) => {
  try {
    let _0x160ed4 = await groupdb.findOne({
      'id': _0x30bcd0.chat
    });
    if (!_0x160ed4 || !_0x30bcd0.isGroup || _0x160ed4.botenable !== "true" || _0x30bcd0.blockJid || _0x30bcd0.fromMe) {
      return;
    }
    let _0xcc70ea = _0x160ed4 && _0x160ed4.welcome ? _0x160ed4.welcome : "false";
    let _0x392f5e = _0x160ed4 && _0x160ed4.antifake ? _0x160ed4.antifake.toLowerCase() : "false";
    let _0x4edf80 = _0x392f5e.split(',');
    const _0x270649 = _0x4edf80.some(_0x16adeb => _0x30bcd0.user.startsWith(_0x16adeb));
    if (_0x392f5e !== "false" && !_0x270649 && !_0x30bcd0.isCreator) {
      if (_0x30bcd0.isBotAdmin) {
        try {
          await _0x30bcd0.kick();
          return await sendWelcome(_0x30bcd0, "*[ANTIFAKE START] @User kicked automaticaly!* @pp");
        } catch (_0x3b1f6f) {
          await _0x30bcd0.error(" Can't kick user in antifake\n❲❒❳ GROUP: " + _0x30bcd0.metadata.subject + "\n❲❒❳ ERROR: " + _0x3b1f6f + "\n", _0x3b1f6f, false);
        }
      } else {
        await _0x30bcd0.send("*[ANTI_FAKE ERROR] Need admin role to kick fake users!!*");
      }
    } else if (_0xcc70ea === 'true') {
      await sendWelcome(_0x30bcd0, _0x160ed4.welcometext);
    }
  } catch (_0x19e737) {
    console.log("Error From Welcome : ", _0x19e737);
  }
});
smd({
  'group': 'remove'
}, async (_0x42bc06, {
  Void: _0x279709
}) => {
  try {
    let _0x276ad9 = (await groupdb.findOne({
      'id': _0x42bc06.chat
    })) || false;
    if (!_0x42bc06 || !_0x276ad9 || !_0x42bc06.isGroup || _0x276ad9.botenable !== "true" || _0x42bc06.blockJid || _0x42bc06.fromMe) {
      return;
    }
    let _0x339394 = _0x276ad9 && _0x276ad9.goodbye ? _0x276ad9.goodbye : "false";
    if (_0x339394 === "true") {
      await sendWelcome(_0x42bc06, _0x276ad9.goodbyetext);
    }
  } catch (_0x3b002e) {
    console.log("Error From Goodbye : ", _0x3b002e);
  }
});
smd({
  'group': "promote"
}, async (_0x454d07, {
  Void: _0x2e4b11
}) => {
  try {
    let _0x70f01a = (await groupdb.findOne({
      'id': _0x454d07.chat
    })) || false;
    if (!_0x70f01a || !_0x454d07.isGroup || _0x70f01a.botenable !== "true" || _0x454d07.blockJid) {
      return;
    }
    if (!user_warns[_0x454d07.sender]) {
      user_warns[_0x454d07.sender] = {
        [_0x454d07.action]: 0x1
      };
    } else {
      user_warns[_0x454d07.sender][_0x454d07.action]++;
    }
    let _0x3b3e60;
    if (_0x70f01a.antipromote == "true" && !_0x454d07.isCreator) {
      _0x3b3e60 = !_0x454d07.isBotAdmin;
      if (users[_0x454d07.sender] && users[_0x454d07.sender].previous_Action === "antidemote") {
        delete users[_0x454d07.sender];
        return;
      }
      if (_0x454d07.isBotAdmin) {
        try {
          await _0x454d07.demote();
          users[_0x454d07.sender] = {
            'previous_Action': 'antipromote'
          };
          if (user_warns[_0x454d07.sender][_0x454d07.action] > 0x2) {
            return;
          }
          return await sendWelcome(_0x454d07, "*[ANTIPROMOTE START] @User Demoted Automatically!* @pp ");
        } catch (_0x5732c2) {
          await _0x454d07.error(" Can't demote user in antipromote\n❲❒❳ GROUP: " + _0x454d07.metadata.subject + "\n❲❒❳ ERROR: " + _0x5732c2 + "\n", _0x5732c2, false);
        }
      }
    }
    if (_0x70f01a.pdm == 'true' || _0x3b3e60) {
      if (user_warns[_0x454d07.sender][_0x454d07.action] > 0x2) {
        return;
      }
      var _0x176b10 = " *[SOMEONE PROMOTE HERE]*\n" + (_0x3b3e60 ? "*Note : _I'm Not Admin Here, So I Can't Demote Someone while Anti_Promote Activated_*" : '') + "\n           \n  ❲❒❳ *User:* _@user_\n❲❒❳ *Position:* _Member -> Admin_ @pp\n  ❲❒❳ *Total Members:* _@count_Members_\n❲❒❳ *Group Name:* @gname\n\n\n" + Config.caption;
      return await sendWelcome(_0x454d07, _0x176b10);
    }
  } catch (_0x16768d) {
    console.log("Error From Promote : ", _0x16768d);
  }
});
smd({
  'group': "demote"
}, async (_0xdf48bd, {
  Void: _0x297cc0
}) => {
  try {
    let _0x103abc = (await groupdb.findOne({
      'id': _0xdf48bd.chat
    })) || false;
    if (!_0x103abc || !_0xdf48bd.isGroup || _0x103abc.botenable !== 'true' || _0xdf48bd.blockJid) {
      return;
    }
    if (!user_warns[_0xdf48bd.sender]) {
      user_warns[_0xdf48bd.sender] = {
        [_0xdf48bd.action]: 0x1
      };
    } else {
      user_warns[_0xdf48bd.sender][_0xdf48bd.action]++;
    }
    let _0x4dd4b3;
    if (_0x103abc.antidemote == "true" && !_0xdf48bd.isCreator) {
      _0x4dd4b3 = !_0xdf48bd.isBotAdmin;
      if (users[_0xdf48bd.sender] && users[_0xdf48bd.sender].previous_Action === "antipromote") {
        delete users[_0xdf48bd.sender];
        return;
      }
      if (_0xdf48bd.isBotAdmin) {
        try {
          await _0xdf48bd.promote();
          users[_0xdf48bd.sender] = {
            'previous_Action': "antidemote"
          };
          if (user_warns[_0xdf48bd.sender][_0xdf48bd.action] > 0x2) {
            return;
          }
          return await sendWelcome(_0xdf48bd, "*[ANTIPROMOTE START] User promote automatically!* @pp ");
        } catch (_0x1a35b9) {
          await _0xdf48bd.error(" Can't promote user in antidemote\n❲❒❳ GROUP: " + _0xdf48bd.metadata.subject + "\n❲❒❳ ERROR: " + _0x1a35b9 + "\n", _0x1a35b9, false);
        }
      }
    }
    if (_0x103abc.pdm == "true" || _0x4dd4b3) {
      if (user_warns[_0xdf48bd.sender][_0xdf48bd.action] > 0x2) {
        return;
      }
      var _0x3e0451 = " *[SOMEONE DEMOTE HERE]*\n  " + (_0x4dd4b3 ? "*Note : _I'm Not Admin Here, So I Can't promote Someone while Anti_Demote Activated_*" : '') + "\n\n  ❲❒❳ *User:* _@user_\n❲❒❳ *Position:* _Admin -> Member_ @pp\n  ❲❒❳ *Total Members:* _@count_Members_\n❲❒❳ *Group Name:* @gname\n  \n\n" + Config.caption;
      return await sendWelcome(_0xdf48bd, _0x3e0451);
    }
  } catch (_0x17197f) {
    console.log("Error From Demote : ", _0x17197f);
  }
});

