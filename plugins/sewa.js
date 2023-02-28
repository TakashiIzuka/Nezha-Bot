let handler = async (m, { conn }) => {
	let sewa = `*────── 「 𝐋𝐈𝐒𝐓 𝐒𝐄𝐖𝐀 」 ──────*

Hᴀʟᴏ Bᴀɴɢ 👋
𝐈𝐧𝐢 𝐋𝐢𝐬𝐭 𝐒𝐞𝐰𝐚 𝐊𝐚𝐦𝐢 𝐒𝐢𝐥𝐚𝐡𝐤𝐚𝐧 𝐃𝐢𝐩𝐢𝐥𝐢𝐡

┏━━━•❅•°•〔卐 𝐋𝐈𝐒𝐓 𝐒𝐄𝐖𝐀 〕
┣卐ミ Pʀᴇᴍɪᴜᴍ : 4K/7Hᴀʀɪ
┣卐ミ Pʀᴇᴍɪᴜᴍ : 6K/14Hᴀʀɪ
┣卐ミ Pʀᴇᴍɪᴜᴍ : 8K/21Hᴀʀɪ
┣卐ミ Pʀᴇᴍɪᴜᴍ : 10K/1Bᴜʟᴀɴ
┣卐ミ Pʀᴇᴍɪᴜᴍ : 12K/37Hᴀʀɪ
┣卐ミ Pʀᴇᴍɪᴜᴍ : 14K/44Hᴀʀɪ
┣卐ミ Pʀᴇᴍɪᴜᴍ : 16K/51Hᴀʀɪ
┣卐ミ Pʀᴇᴍɪᴜᴍ : 18K/2Bᴜʟᴀɴ
┗━━━•❅•°•卐

┏━━━•❅•°•卐𝐊𝐞𝐮𝐧𝐭𝐮𝐧𝐠𝐚𝐧 𝐌𝐞𝐦𝐛𝐞𝐫 𝐏𝐫𝐞𝐦𝐢𝐮𝐦
┣➲ Uɴʟᴏᴄᴋ Fɪᴛᴜʀ Pʀᴇᴍɪᴜᴍ
┣➲ Aᴅᴀ Fɪᴛᴜʀ Hᴀʀᴀᴍ
┣➲ Dᴀɪʟʏ Rᴘɢ Aᴋᴀɴ Dɪ ᴋᴀsɪʜ Lᴇʙɪʜ Bᴀɴʏᴀᴋ
┗━━━•❅•°•卐
Cᴏɴᴛᴀᴋ Pᴇʀsᴏɴ Oᴡᴇʀ:
wa.me/6285704015608 (Oᴡɴᴇʀ)`

conn.sendButton(m.chat, sewa, 'Mᴏɴɢɢᴏ', '👤𝐎𝐖𝐍𝐄𝐑', '.nomorowner', fkontak)
}
handler.tags = ['info']
handler.help = ['sewa','nyewa','sewabot']
handler.command = /^(sewa|nyewa|sewabot)$/i

module.exports = handler