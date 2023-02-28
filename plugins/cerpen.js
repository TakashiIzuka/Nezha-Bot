let handler = async(m, {conn}) => {
let judul = `${global.ucapan}`.trim()
const sections = [
   {
	title: `Pilih Salah Satu Kategori Ya Bang`,
	rows: [
    {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝙍𝙤𝙢𝙖𝙣𝙩𝙞𝙨", rowId: '.pen romantis', description: 'Cerpen Tentang Pasangan Romantis' },
{title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝙅𝙖𝙬𝙖", rowId: '.pen jawa', description: 'Cerpen Tentang Berbahasa Jawa' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝘼𝙣𝙖𝙠", rowId: '.pen anak', description: 'Cerpen Tentang Anak' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝘾𝙞𝙣𝙩𝙖", rowId: '.pen cinta', description: 'Cerpen Tentang Cinta' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝙍𝙚𝙢𝙖𝙟𝙖", rowId: '.pen remaja', description: 'Cerpen Tentang Remaja' },
    {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝘾𝙞𝙣𝙩𝙖 𝙎𝙚𝙜𝙞𝙩𝙞𝙜𝙖", rowId: '.pen cinta segitiga', description: 'Cerpen Tentang Cinta Segitiga' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝙆𝙚𝙝𝙞𝙙𝙪𝙥𝙖𝙣", rowId: '.pen kehidupan', description: 'Cerpen Tentang Kehidupan' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝙋𝙚𝙧𝙟𝙪𝙖𝙣𝙜𝙖𝙣", rowId: '.pen perjuangan', description: 'Cerpen Tentang Perjuangan' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝘾𝙞𝙣𝙩𝙖 𝙄𝙨𝙡𝙖𝙢𝙞", rowId: '.pen cinta islami', description: 'Cerpen Tentang Cinta Islami' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝙋𝙚𝙣𝙮𝙚𝙨𝙖𝙡𝙖𝙣", rowId: '.pen penyesalan', description: 'Cerpen Tentang Penyesalan' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝙋𝙚𝙧𝙥𝙞𝙨𝙖𝙝𝙖𝙣", rowId: '.pen perpisahan', description: 'Cerpen Tentang Perpisahan' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝙋𝙚𝙧𝙖𝙨𝙖𝙝𝙖𝙗𝙖𝙩𝙖𝙣", rowId: '.pen persahabatan', description: 'Cerpen Tentang Persahabatan' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝙈𝙤𝙩𝙞𝙫𝙖𝙨𝙞", rowId: '.pen motivasi', description: 'Cerpen Tentang Motivasi' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝙉𝙖𝙨𝙞𝙝𝙖𝙩", rowId: '.pen nasihat', description: 'Cerpen Tentang Nasihat' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝘾𝙞𝙣𝙩𝙖 𝙋𝙚𝙧𝙩𝙖𝙢𝙖", rowId: '.pen cinta pertama', description: 'Cerpen Tentang Cinta Pertama' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝘽𝙖𝙝𝙖𝙨𝙖 𝘿𝙖𝙚𝙧𝙖𝙝", rowId: '.pen bahasa daerah', description: 'Cerpen Tentang Bahasa Daerah' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝘽𝙖𝙝𝙖𝙨𝙖 𝙎𝙪𝙣𝙙𝙖", rowId: '.pen sunda', description: 'Cerpen Tentang Bahasa Sunda' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝙂𝙤𝙠𝙞𝙡", rowId: '.pen gokil', description: 'Cerpen Cerita Gokil' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝙇𝙞𝙣𝙜𝙠𝙪𝙣𝙜𝙖𝙣", rowId: '.pen lingkungan', description: 'Cerpen Tentang Lingkungan' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝙄𝙣𝙨𝙥𝙞𝙧𝙖𝙩𝙞𝙛", rowId: '.pen inspiratif', description: 'Cerpen Tentang Inspiratif' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝙎𝙚𝙟𝙖𝙧𝙖𝙝", rowId: '.pen sejarah', description: 'Cerpen Tentang Sejarah' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝙎𝙚𝙙𝙞𝙝", rowId: '.pen sedih', description: 'Cerpen Tentang Kang Sad' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝙎𝙖𝙨𝙩𝙧𝙖", rowId: '.pen sastra', description: 'Cerpen Tentang Sastra' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝙍𝙤𝙝𝙖𝙣𝙞", rowId: '.pen rohani', description: 'Cerpen Tentang Rohani' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝙍𝙞𝙣𝙙𝙪", rowId: '.pen rindu', description: 'Cerpen Tentang Rindu' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝙍𝙚𝙣𝙪𝙣𝙜𝙖𝙣", rowId: '.pen renungan', description: 'Cerpen Tentang Renungan' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝙋𝙚𝙣𝙜𝙤𝙧𝙗𝙖𝙣𝙖𝙣", rowId: '.pen pengorbanan', description: 'Cerpen Tentang Pengorbanan' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝙋𝙚𝙣𝙜𝙖𝙡𝙖𝙢𝙖𝙣 𝙋𝙧𝙞𝙗𝙖𝙙𝙞", rowId: '.pen pengalaman pribadi', description: 'Cerpen Tentang Pengalaman Pribadi' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝙋𝙚𝙣𝙙𝙞𝙙𝙞𝙠𝙖𝙣", rowId: '.pen pendidikan', description: 'Cerpen Tentang Pendidikan' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝙋𝙚𝙣𝙖𝙣𝙩𝙞𝙖𝙣", rowId: '.pen penantian', description: 'Cerpen Tentang Penantian' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝙋𝙖𝙩𝙖𝙝 𝙃𝙖𝙩𝙞", rowId: '.pen patah hati', description: 'Cerpen Tentang Patah Hati' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝙊𝙡𝙖𝙝𝙧𝙖𝙜𝙖", rowId: '.pen olahraga', description: 'Cerpen Tentang Olahraga' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝙉𝙖𝙨𝙞𝙤𝙣𝙖𝙡𝙞𝙨𝙢𝙚", rowId: '.pen nasionalisme', description: 'Cerpen Tentang Nasionalisme' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝙈𝙞𝙨𝙩𝙚𝙧𝙞", rowId: '.pen misteri', description: 'Cerpen Tentang Misteri' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝙈𝙚𝙣𝙜𝙝𝙖𝙧𝙪𝙠𝙖𝙣", rowId: '.pen mengharukan', description: 'Cerpen Tentang Mengharukan' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝙆𝙞𝙨𝙖𝙝 𝙉𝙮𝙖𝙩𝙖", rowId: '.pen kisah nyata', description: 'Cerpen Tentang Kisah Nyata' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝙂𝙖𝙡𝙖𝙪", rowId: '.pen Galau', description: 'Cerpen Tentang Orang Galau' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝘾𝙞𝙣𝙩𝙖 𝙎𝙚𝙟𝙖𝙩𝙞", rowId: '.pen cinta sejati', description: 'Cerpen Tentang Cinta Sejati' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝘽𝙪𝙙𝙖𝙮𝙖", rowId: '.pen budaya', description: 'Cerpen Tentang Budaya' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝙃𝙤𝙧𝙧𝙤𝙧", rowId: '.pen horor (hantu)', description: 'Cerpen Tentang Kisah Horror' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝙁𝙖𝙣𝙩𝙖𝙨𝙞", rowId: '.pen fantasi (fiksi', description: 'Cerpen Tentang Fantasi (Fiksi)' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝙁𝙖𝙗𝙚𝙡", rowId: '.pen fabel (hewan)', description: 'Cerpen Fabel (Hewan)' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝘾𝙞𝙣𝙩𝙖 𝘿𝙖𝙡𝙖𝙢 𝙃𝙖𝙩𝙞", rowId: '.pen cinta dalam hati (terpendam)', description: 'Cerpen Tentang Cinta Dalam Hati (Terpendam)' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝙄𝙨𝙡𝙖𝙢𝙞", rowId: '.pen islami (religi)', description: 'Cerpen Tentang Islami (Religi)' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝘾𝙤𝙧𝙤𝙣𝙖", rowId: '.pen covid 19 (corona)', description: 'Cerpen Tentang Covid 19 (Corona)' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝙁𝙞𝙠𝙨𝙞 𝙋𝙚𝙣𝙜𝙜𝙚𝙢𝙖𝙧", rowId: '.pen fiksi penggemar (fanfiction)', description: 'Cerpen Tentang Fiksi Penggemar (Fanfiction)' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝙏𝙝𝙧𝙞𝙡𝙡𝙚𝙧", rowId: '.pen thriller (aksi)', description: 'Cerpen Tentang Thriller (Aksi)' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝙆𝙤𝙧𝙚𝙖", rowId: '.pen korea', description: 'Cerpen Tentang Kisah Di Korea' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝙅𝙚𝙥𝙖𝙣𝙜", rowId: '.pen jepang', description: 'Cerpen Tentang Kisah Di Jepang' },
        {title: "☂︎ | 𝘾𝙚𝙧𝙥𝙚𝙣 𝙎𝙡𝙞𝙘𝙚 𝙊𝙛 𝙇𝙞𝙛𝙚", rowId: '.pen slice of life', description: 'Cerpen Tentang Slice Of Life' },
	]
    }, 

]

const listMessage = {
  text: '𝘾𝙀𝙍𝙄𝙏𝘼 𝙋𝙀𝙉𝘿𝙀𝙆 𝙈𝘼𝙎𝘽𝙍𝙊',
  footer: wm,
  title: null,
  buttonText: "KLIK DISINI",
  sections
}
await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})

}
handler.help = ['cerpen']
handler.tags = ['internet']
handler.command = /^(cerpen|listcerpen)$/i

handler.limit = true

module.exports = handler