let handler = async(m, {conn}) => {


     conn.sendContactArrayS(m.chat, [ ['6285704015608', 'Tᴀᴋᴀsʜɪ Iᴢᴜᴋᴀ', 'Pᴇɴɢᴇᴍʙᴀɴɢ Bᴏᴛ', 'Lᴏ sᴘᴀᴍ ɢᴡ sᴇɴᴅ ʙᴜɢ', 'ғᴀʟᴀᴋʜɪʟɴ@ɢᴍᴀɪʟ.ᴄᴏᴍ',  'Iɴᴅᴏɴᴇsɪᴀ🇮🇩', 'Gak Punya', 'Mᴀᴀғ Jɪᴋᴀ Bᴀɴʏᴀᴋ Eʀʀᴏʀ Oᴡɴᴇʀ Mᴀsɪʜ Bᴇʟᴀᴊᴀʀ' ] ], m)
     
     }
   
handler.command = /^(nomorowner)$/i
module.exports = handler