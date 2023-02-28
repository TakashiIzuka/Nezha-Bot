const uploadImage = require('../lib/uploadImage')
let { webp2png } = require('../lib/webp2mp4')
let handler = async (m, { conn, text, usedPrefix, command }) => {
    let [atas, bawah] = text.split`|`
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `balas gambar dengan perintah\n\n${usedPrefix + command} <${atas ? atas : 'teks atas'}>|<${bawah ? bawah : 'teks bawah'}>`
     if (/webp/.test(mime)) {
    let media = await m.quoted.download()
    let out = Buffer.alloc(0)
    out = await webp2png(media)
    let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : '')}/${encodeURIComponent(bawah ? bawah : '')}.png?background=${out}`
    conn.sendStimg(m.chat, meme, m, { packname: '𝙽𝙴𝚉𝙷𝙰-𝙱𝙾𝚃', author: author })
  }
    if (/image\/(jpe?g|png)/.test(mime)) {
    let img = await q.download()
    let url = await uploadImage(img)
    let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : '')}/${encodeURIComponent(bawah ? bawah : '')}.png?background=${url}`
    conn.sendStimg(m.chat, meme, m, { packname:'𝙽𝙴𝚉𝙷𝙰-𝙱𝙾𝚃', author: author })}

}
handler.help = ['stickermeme <teks>|<teks>']
handler.tags = ['sticker']
handler.command = /^(s(tic?ker)?me(me))$/i

handler.limit = false

module.exports = handler