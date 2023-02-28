const { youtubeSearch } = require('@bochilteam/scraper')
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw m.reply(`uhm.. cari apa?\n\ncontoh:\n${usedPrefix + command} i see your monster`)
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw m/reply('Video/Audio Tidak ditemukan')
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  
    await conn.send2ButtonImg(m.chat, thumbnail, `*Jumlah Penonton*: ${viewH}\n*Waktu*: ${durationH}\n*Link*: ${url}\n*Deskripsi*: ${description}`.trim(), wm, `🎵 AUDIO`, usedPrefix + `yta ${url}`, `📽 VIDEO 360P`, usedPrefix + `yt ${url}`, m)}
handler.help = ['play'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^(dj|musik|song|lagu|p(lay)?)$/i

handler.exp = 3
handler.limit = false
handler.register = false

module.exports = handler