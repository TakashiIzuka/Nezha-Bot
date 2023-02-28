let handler = async (m, { conn }) => {
    let gambar = 'https://gabutyanz.xyz/api/nsfw/ass?apikey=Alphabot'
        conn.sendButtonImg(m.chat, gambar, '𝐍𝐈𝐇 𝐁𝐀𝐍𝐆 𝐏𝐀𝐍𝐓𝐀𝐓 𝟐𝐃 𝐋𝐔', wm, '𝗡𝗘𝗫𝗧', '.nsfwass', m)
  }
    handler.command = /^(nsfwass)$/i
    handler.premium = true
    
    module.exports = handler