let fetch = require('node-fetch')
const canvafy = require("canvafy");
let handler = async (m, { conn, usedPrefix, text, args }) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let username = conn.getName(who)
    let pp = 'https://i.ibb.co/gS0XrNc/avatar-contact.png'
    try {
    pp = await conn.profilePictureUrl(who, 'image')
  } catch (e) {

  } finally {
const rank = await new canvafy.Rank()
    .setAvatar(pp)
    .setBackground("image", "https://telegra.ph/file/9aa1f06d18bd3032cd2e8.jpg")
    .setUsername(username)
    .setStatus('offline')
    .setLevel(1)
    .setRank(1)
    .setCurrentXp(100)
    .setRequiredXp(400)
    .build();
    let a = rank.toBuffer()
   conn.sendMessage(m.chat, {image: a,caption:'ya'}, {quoted: m}) 
}}
handler.help = ['le']
handler.tags = ['tesfitur']
handler.command = /^(le)$/i

module.exports = handler