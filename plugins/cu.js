let handler = async (m, { conn }) => {
    let gambar = 'https://api.zeeoneofc.my.id/api/nsfw/cum?apikey=ez5RSThO'
        conn.sendButtonImg(m.chat, gambar, 'Nih 2D', wm, 'NEXT', '.cu', m)
    }
    handler.help = ['cu']
    handler.tags = ['tesfitur']
    handler.command = /^(cu)$/i
    handler.owner = true
    handler.limit = true
    
    module.exports = handler