let handler = async (m, { conn }) => {
    let gambar = 'https://gabutyanz.xyz/api/nsfw/cuckold?apikey=Alphabot'
        conn.sendButtonImg(m.chat, gambar, '𝐍𝐈𝐇 𝐁𝐀𝐍𝐆', wm, '𝗡𝗘𝗫𝗧', '.nsfwcockold', m)
  }
    handler.command = /^(nsfwcockold)$/i
    handler.premium = true
    
    module.exports = handler