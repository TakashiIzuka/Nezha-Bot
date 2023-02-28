let handler = async (m, { conn }) => {
    let gambar = 'https://gabutyanz.xyz/api/nsfw/blowjob?apikey=Alphabot'
        conn.sendButtonImg(m.chat, gambar, '𝐍𝐈𝐇 𝐁𝐀𝐍𝐆 𝐊𝐀𝐑𝐓𝐔𝐍 𝐋𝐀𝐆𝐈 𝐍𝐘𝐄𝐏𝐎𝐍𝐆𝐄', wm, '𝗡𝗘𝗫𝗧', '.nsfwblowjob', m)
  }
    handler.command = /^(nsfwblowjob)$/i
    handler.premium = true
    
    module.exports = handler