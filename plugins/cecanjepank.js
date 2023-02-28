let handler = async (m, { conn }) => {
    let gambar = 'https://lol.zeeoneofc.my.id/api/cecan/china?apikey=Alphabot'
        conn.sendButtonImg(m.chat, gambar, 'Yahaha cina', wm, 'NEXT', '.okecina', m)
    }
    handler.help = ['okecina']
    handler.tags = ['tesfitur']
    handler.command = /^(okecina)$/i
    handler.owner = true
    
    module.exports = handler