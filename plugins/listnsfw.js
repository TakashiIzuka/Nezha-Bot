let handler = async(m, {conn}) => {
let judul = `${global.ucapan}`.trim()
const sections = [
   {
	title: `เผ๏ธ===๐๐ ๐๐๐๐ ๐๐๐๐๐ ๐๐๐๐๐๐ ๐๐๐๐๐๐===เผ๏ธ`,
	rows: [
    {title: "ๅ |๐๐๐", rowId: '.nsfwass', description: 'โฐโบMแดษดแดแดแดษชสแดแดษด Pแดษดแดแดแด Kแดสแดแดษดใท๏ธ' },
    {title: "ๅ |๐๐๐๐๐๐", rowId: '.nsfwahegao', description: 'โฐโบMแดษดแดแดแดษชสแดแดษด Mแดแดแด Kแดสแดแดษด Sแดษดษขแดแดษด  ใท๏ธ' },
    {title: "ๅ |๐๐๐๐", rowId: '.nsfwbdsm', description: 'โฐโบMแดษดแดแดแดษชสแดแดษด Kแดสแดแดษด Sแดษขs Bสแดแดแดสใท๏ธ' },
    {title: "ๅ |๐๐๐๐๐๐๐", rowId: '.nsfwblowjob', description: 'โฐโบMแดษดแดแดแดษชสแดแดษด Kแดสแดแดษด Yษข Sแดแดแดษดษข Nสแดแดแดษดษขแดใท๏ธ' },
    {title: "ๅ |๐๐๐๐๐๐๐", rowId: '.nsfwcokold', description: 'โฐโบGแดแดแดแด Gแดก Iษดษช Aแดแดแดษด:แด ใท๏ธ' },
        
	]
    }, 

]

const listMessage = {
  text: '๐๐๐๐๐๐ ๐๐๐๐ ๐๐๐๐๐๐',
  footer: wm,
  title: null,
  buttonText: " โญโฑ ลโญ ฤลโดลโฆล",
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