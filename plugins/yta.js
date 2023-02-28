const { youtubedl, youtubedlv2, youtubedlv3 } =require('@bochilteam/scraper')
let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
if (!args[0]) throw m.reply('Link nya Mana Anjink')
let q = '128kbps'
let v = args[0]
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: ' ', mimetype: 'audio/mpeg', fileName: `${ttl}.mp3`}, { quoted: m })
}
handler.help = ['ytmp3 <query>']
handler.tags = ['downloader']
handler.command = /^yt(a(udio)?|mp3|musik|lagu)$/i
handler.limit = false
module.exports = handler