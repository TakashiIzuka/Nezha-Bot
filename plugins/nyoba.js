let handler = async (m, { conn }) => {
    let gambar = 'https://gabutyanz.xyz/api/nsfw/ass?apikey=Alphabot'
        conn.sendButtonImg(m.chat, gambar, 'Nih', wm, 'NEXT', '.sa', m)
    }
    handler.help = ['sa']
    handler.tags = ['tesfitur']
    handler.command = /^(sa)$/i
    handler.premium = true
    handler.limit = true
    handler.owner = true
    
    module.exports = handler