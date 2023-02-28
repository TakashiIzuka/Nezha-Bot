let fetch = require('node-fetch')

let handler = async (m, { conn, command }) => {
	let url = 'https://api.lolhuman.xyz/api/random/cecan?apikey=8dfc07930da4b0e874ff2816'

	conn.sendButtonImg(m.chat, url, wm, 'NEXT', `.${command}` 'm)
}

handler.command = /^(cecan)$/i
handler.tags = ['random']
handler.help = ['cecan']
handler.premium = false
handler.limit = true

module.exports = handler