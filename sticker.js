const { sticker } = require('../lib/sticker')
const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')
let { webp2png } = require('../lib/webp2mp4')
let fetch = require("node-fetch")
let handler = async (m, { conn, args, usedPrefix, command }) => {
    const delay = time => new Promise(res => setTimeout(res, time))
     let key = {}
 try {
 	key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
	key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
	key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
 	key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
 } catch (e) {
 	console.error(e)
 }
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
if (/video/g.test(mime)) if ((q.msg || q).seconds > 11) return m.reply('Maksimal 10 detik!')
try {
      let img = await q.download()
   
if(!img) throw m.reply(`balas gambar/video/stiker dengan perintah .stiker`)
    await conn.sendImageAsSticker(m.chat , img, m, {packname: 'kuuhaku -bot', author: global.author})
    await delay(1000)
    await conn.sendMessage(m.chat, { delete: key })
    } catch { throw 'Gagal!, Balas Gambar/video dengan caption *.stiker*'}
}
handler.help = ['stiker (caption|reply media)', 'stiker <url>', 'stikergif (caption|reply media)', 'stikergif <url>']
handler.tags = ['sticker']
handler.command = /^s(tic?ker)?(gif)?(wm)?$/i

module.exports = handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}