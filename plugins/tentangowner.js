let handler = async(m, {conn}) => {
let judul = `${global.ucapan}`.trim()
const sections = [
  {
    title:`༒︎======[Iɴғᴏ Bᴏᴛ]======༒︎`,
    rows: [
    {title: "卐 |𝐌𝐄𝐍𝐔", rowId: '.menu', description: '╰►Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴇɴᴜシ︎' },
    {title: "卐 |𝐏𝐈𝐍𝐆", rowId: '.ping', description: '╰►Mᴇᴍʙᴇʀɪᴛᴀʜᴜ Pɪɴɢ/Kᴇᴄᴇᴘᴀᴛᴀɴ Bᴏᴛシ︎' },
    {title: "卐 |𝐒𝐓𝐀𝐓𝐔𝐒 𝐁𝐎𝐓", rowId: '.status', description: '╰►Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Sᴛᴀᴛᴜs Bᴏᴛシ︎' },
    {title: "卐 |𝐑𝐔𝐍𝐓𝐈𝐌𝐄", rowId: '.runtime', description: '╰►Mᴇᴍʙᴇʀɪᴛᴀʜᴜ Bᴇʀᴀᴘᴀ Lᴀᴍᴀ Bᴏᴛ Oɴシ︎' },
    {title: "卐 |𝐔𝐒𝐄𝐑", rowId: '.user', description: '╰►Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Jᴜᴍʟᴀʜ Pᴇɴɢɢᴜɴᴀ Bᴏᴛシ︎' },
    {title: "卐 |𝐋𝐈𝐒𝐓𝐏𝐑𝐄𝐌𝐈𝐔𝐌", rowId: '.listprem', description: '╰►Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Lɪsᴛ Pʀᴇᴍɪᴜᴍシ︎' },
    {title: "卐 |𝐒𝐎𝐔𝐑𝐂𝐄 𝐂𝐎𝐃𝐄", rowId: '.sc', description: '╰►Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Bᴀsᴇ Bᴏᴛシ︎' },
    {title: "卐 |𝐓𝐀𝐍𝐊𝐒 𝐓𝐎", rowId: '.tqto', description: '╰►Uᴄᴀᴘᴀɴ Tᴇʀɪᴍᴀ Kᴀsɪʜ Oᴡɴᴇʀシ︎' },
    ]
   },{
     title:`༒︎======[Sᴇᴡᴀ Bᴏᴛ]======༒︎`,
     rows:[
     {title:"卐 |𝐒𝐄𝐖𝐀 𝐁𝐎𝐓", rowId:'.sewabot', description:'╰►Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Lɪsᴛ Sᴇᴡᴀ Bᴏᴛシ︎'},
     ]
     },{
	title: `༒︎======[Oᴡɴᴇʀ Tᴀᴋᴀsʜɪ Iᴢᴜᴋᴀシ︎]======༒︎`,
	rows: [
    {title: "卐 |𝐁𝐈𝐎 𝐃𝐀𝐓𝐀", rowId: '.biodataowner ', description: '╰►Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Bɪᴏ Dᴀᴛᴀ Oᴡɴᴇʀシ︎' },
    {title: "卐 |𝐍𝐎𝐌𝐎𝐑 𝐎𝐖𝐍𝐄𝐑", rowId: '.nomorowner', description: '╰►Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Nᴏᴍᴏʀ Oᴡɴᴇʀシ︎' },
  ]
    },{
    title: `༒︎======[Oᴡɴᴇʀ NᴘC4LDɪシ︎]======༒︎`,
    rows: [
    {title: "卐 |𝐁𝐈𝐎 𝐃𝐀𝐓𝐀", rowId: '.biodataowner2', description: '╰►Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Bɪᴏ Dᴀᴛᴀ Oᴡɴᴇʀシ︎' },
    {title: "卐 |𝐍𝐎𝐌𝐎𝐑 𝐎𝐖𝐍𝐄𝐑", rowId: '.nomorowner2', description: '╰►Mᴇɴᴀᴍᴀᴍᴘɪʟᴋᴀɴ Nᴏᴍᴏʀ Oᴡɴᴇʀシ︎' },
 ]  
    },
]

const listMessage = {
  text: '𝐓𝐄𝐍𝐓𝐀𝐍𝐆 𝐎𝐖𝐍𝐄𝐑',
  footer: wm,
  title: null,
  buttonText: " ₭Ⱡł₭ Đł₴ł₦ł",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: fkontak})

}
handler.command = /^(aboutowner|tentangowner)$/i
handler.tags = ['info']
handler.help = ['aboutowner','tentangowner']
module.exports = handler