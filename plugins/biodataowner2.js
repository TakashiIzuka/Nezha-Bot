let handler = async (m, { conn }) => {

conn.sendButtonDoc(m.chat,  `Biar Lu Kenal Ama Owner Gw\n\nBio Data Owner:`,`Nama: NpC4LDi\nNama RL: Aldi\nUmur: 17\nKls: 12 SMA\nTanggal Lahir: 8 April 2005\nAgama: Islam\nHobby: Nonton Animek,Sinau,Main Genshin\nSifat: Banyak Omong Kalo Ama Temen Akrab\nAlamat: Jawa Timur - Jombang\nInstagram: @npc.aldi\nYoutube:NpC4LDi`,'MENU', '.menu', 0, {contextInfo:{externalAdReply:{mediaUrl: 'https://www.instagram.com/npc.aldi', mediaType: "VIDEO", description: 'Nih Banh ', title: 'NIH BANG BIO OWNER GW', thumbnail: {url: 'https://telegra.ph/file/baac3b27efb9fb4aea846.jpg'} ,  thumbnailUrl: 'https://telegra.ph/file/baac3b27efb9fb4aea846.jpg', sourceUrl: null}}})

}

handler.command = /^(biodataowner2)$/i
module.exports = handler