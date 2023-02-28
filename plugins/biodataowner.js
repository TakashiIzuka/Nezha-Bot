let handler = async (m, { conn }) => {

conn.sendButtonDoc(m.chat,  `Biar Lu Kenal Ama Owner Gw\n\nBio Data Owner:`,`Nama: Takashi Izuka\nNama RL: Nafan\nUmur: 14\nKls: 8 SMP\nTanggal Lahir: 26 Oktober 2008\nAgama: Islam\nHobby: Ngegem(Mungkin),Koding(Masih Belajar),Turu\nSifat: Banyak Omong Kalo Ama Temen,Nolep,Penyendiri,Pemalu Di Luar (Kalo Ama Temen Ga)\nAlamat: Jawa Timur - Gresik\nInstagram: Kaga Ada`,'MENU', '.menu', 0, {contextInfo:{externalAdReply:{mediaUrl: 'https://www.instagram.com/falakhilnafan', mediaType: "VIDEO", description: 'Nih Banh ', title: 'NIH BANG BIO OWNER GW', thumbnail: {url: 'https://telegra.ph/file/05aca0a93bfbfbd750fe7.jpg'} ,  thumbnailUrl: 'https://telegra.ph/file/05aca0a93bfbfbd750fe7.jpg', sourceUrl: null}}})

}

handler.command = /^(biodataowner)$/i
module.exports = handler