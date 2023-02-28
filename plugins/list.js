let handler = async(m, {conn}) => {
let judul = `${global.ucapan}`.trim()
const sections = [
   {
	title: `Sok asik`,
	rows: [
    {title: "Hem", rowId: '.hm', description: 'Malas' },
    {title: "Haram", rowId: '.cu', description: 'Kontol mmk' },
    {title: "Shah", rowId: '.sa', description: 'Ngatau'},
	]
    }, 

]

const listMessage = {
  text: 'Hem',
  footer: wm,
  title: null,
  buttonText: "KLIK SINI BEGO",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: 0})

}
handler.command = /^(waw)$/i
handler.help = ['waw']
handler.tags = ['tesfitur']
module.exports = handler