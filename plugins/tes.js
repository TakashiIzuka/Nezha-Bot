let handler = async (m, { conn }) => {
    let gambar = 'https://api.zeeoneofc.my.id/api/nsfw/boobs?apikey=ez5RSThO'
        conn.sendButtonImg(m.chat, gambar, 'Nih', wm, 'NEXT', '.tes', m)
    }
    handler.help = ['yo']
    handler.tags = ['tesfitur']
    handler.command = /^(yo)$/i
    handler.owner = false
    handler.premium = true
    
    module.exports = handler