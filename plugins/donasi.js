const qrku = "https://telegra.ph/file/dfcf8943675cd4d8d04e3.png"

let handler = async (m, { conn, usedPrefix }) => conn.sendButtonImg(m.chat, qrku, `
╭─「 Donasi • Dana • Pulsa」
│ • Ime 3 [085791283043]
│ • Dana  [083162964447]
╰────
Seikhlasnya Bre 


Makasih Yg Udah Donasi/Support gw

Donasi Kalian sangat berarti buat gweh
Ama bikin gw semangat,gatau kenapa
Gwe aneh ga si?

Chat Owner:wa.me/6285704015608
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler