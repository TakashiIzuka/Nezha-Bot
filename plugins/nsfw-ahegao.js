let handler = async (m, { conn }) => {
    let gambar = 'https://gabutyanz.xyz/api/nsfw/ahegao?apikey=Alphabot'
        conn.sendButtonImg(m.chat, gambar, '𝐍𝐈𝐇 𝐁𝐀𝐍𝐆 𝐌𝐔𝐊𝐀 𝐒𝐀𝐍𝐆𝐄𝐊 𝟐𝐃 𝐋𝐔', wm, '𝗡𝗘𝗫𝗧', '.nsfwahegao', m)
  }
    handler.command = /^(nsfwahegao)$/i
    handler.premium = true
    
    module.exports = handler