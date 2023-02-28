let handler = async(m, {conn}) => {
let judul = `${global.ucapan}`.trim()
const sections = [
   {
	title: `༒︎===𝐘𝐀 𝐔𝐃𝐀𝐇 𝐏𝐈𝐋𝐈𝐇 𝐒𝐄𝐒𝐔𝐀𝐈 𝐒𝐄𝐋𝐄𝐑𝐀===༒︎`,
	rows: [
    {title: "卐 |𝐀𝐒𝐒", rowId: '.nsfwass', description: '╰►Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Pᴀɴᴛᴀᴛ Kᴀʀᴛᴜɴシ︎' },
    {title: "卐 |𝐀𝐇𝐄𝐆𝐀𝐎", rowId: '.nsfwahegao', description: '╰►Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴜᴋᴀ Kᴀʀᴛᴜɴ Sᴀɴɢᴇᴀɴ  シ︎' },
    {title: "卐 |𝐁𝐃𝐒𝐌", rowId: '.nsfwbdsm', description: '╰►Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Kᴀʀᴛᴜɴ Sᴇɢs Bʀᴜᴛᴀʟシ︎' },
    {title: "卐 |𝐁𝐋𝐎𝐖𝐉𝐎𝐁", rowId: '.nsfwblowjob', description: '╰►Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Kᴀʀᴛᴜɴ Yɢ Sᴇᴅᴀɴɢ Nʏᴇᴘᴏɴɢᴇシ︎' },
    {title: "卐 |𝐂𝐎𝐂𝐊𝐎𝐋𝐃", rowId: '.nsfwcokold', description: '╰►Gᴀᴛᴀᴜ Gᴡ Iɴɪ Aᴘᴀᴀɴ:ᴠシ︎' },
        
	]
    }, 

]

const listMessage = {
  text: '𝐘𝐀𝐇𝐀𝐇𝐀 𝐋𝐀𝐆𝐈 𝐒𝐀𝐍𝐆𝐄𝐊',
  footer: wm,
  title: null,
  buttonText: " ₭Ⱡł₭ Đł₴ł₦ł",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: fkontak})

}
handler.command = /^(listnsfw|hentailist|nsfwlist|listhentai)$/i
handler.tags = ['nsfw']
handler.help = ['listnsfw']
handler.premium = true
handler.limit = true
module.exports = handler