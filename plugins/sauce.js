const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')
const fetch = require('node-fetch')
let handler = async (m, { conn, command, usedPrefix }) => {
    let mentionedJid = [m.sender]
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `Kirim foto/video yang ingin dicari dengan caption *${usedPrefix}${command}* atau reply medianya`
  let media = await q.download()
  let isTele = /image\/(png|jpe?g)/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  let anime = await fetch(`https://api.trace.moe/search?anilistInfo&url=${link}`)
    let animenya = await anime.json()
    let similarity = animenya.result[0].similarity
    let text = `*Title Japanese*: ${animenya.result[0].anilist.title.native}\n*Title Romaji*: ${animenya.result[0].anilist.title.romaji}\n*Title English*: ${animenya.result[0].anilist.title.english}\n\n*Episode*: ${animenya.result[0].episode}\n*Kesamaan* : ${(similarity * 100).toFixed(1)}%`
    let videonya = await fetch(`${animenya.result[0].video}`)
  conn.sendMessage(m.chat, {image: {url:`${animenya.result[0].image}`}, caption: text, thumbnail: {url:`${animenya.result[0].image}`}, mentions: mentionedJid}, {quoted: m})
}
handler.help = ['sauce <media>']
handler.tags = ['tools']
handler.command = /^(sauce)$/i
handler.limit = true
module.exports = handler