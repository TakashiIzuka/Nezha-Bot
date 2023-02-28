let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)

let handler  = async (m, { conn, args, text }) => {
  if (!text) return m.reply('Cari apa?\njangan nyari bok3p yaa')
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) return m.reply('Not Found\nGa Ketemu')
  conn.sendButtonImg(m.chat, url, `
*── 「 GOOGLE IMAGE 」 ──*
${text}
➸ *width*: ${width}
➸ *height*: ${height}
➸ *JANGAN DIPAKE BUAT CARI PORN CUY*
`.trim(), wm, 'NEXT', `.gimage ${text}`, m)
}
handler.help = ['image <query>', 'gimage <query>', 'googleimage <query>']
handler.tags = ['internet']
handler.command = /^(gimage|googleimage|image)$/i
handler.premium = false
handler.limit = true
module.exports = handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}