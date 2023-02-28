let handler = async (m, { conn }) => {
	
	// Link Script jgn di ganti ya pliss
    // Kalo mau masukin github kamu tinggal add aja link githubnya tapi jangan di hapus sumber script!
    // Jangan Ngeyell..
    // Kalo ngeyel gk bakal gw up sc lgi.
    
    let txt = `
𝙱𝚊𝚜𝚎:
https://github.com/FokusDotId/Family-MD.git

𝚈𝚐 𝚁𝚎𝚌𝚘𝚍𝚎 𝙶𝚠 𝚍𝚊𝚗 𝙳𝚒 𝙱𝚊𝚗𝚝𝚞 𝙿𝚊𝚛𝚊 𝚂𝚎𝚙𝚞𝚑
`
     conn.reply(m.chat, txt, m)
}
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sc(ript(bot)?)?|sourcecode)$/i

module.exports = handler


