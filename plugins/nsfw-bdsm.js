let handler = async (m, { conn }) => {
    let gambar = 'https://api.zeeoneofc.my.id/api/nsfw/bdsm?apikey=qz5F7WCG'
        conn.sendButtonImg(m.chat, gambar, '𝐍𝐈𝐇 𝐁𝐀𝐍𝐆 𝐊𝐀𝐑𝐓𝐔𝐍 𝐒𝐄𝐆𝐒 𝐁𝐑𝐔𝐓𝐀𝐋', wm, '𝗡𝗘𝗫𝗧', '.nsfwabdsm', m)
  }
    handler.command = /^(nsfwbdsm)$/i
    handler.premium = true
    
    module.exports = handler