let fs = require('fs')
let moment = require('moment-timezone')

let handler = m => m

handler.all = async function (m) {
    if (m.chat.endsWith('status@broadcast')) {
        console.log('sw cok')
    }
    let { isBanned } = db.data.chats[m.chat]
    let { banned } = db.data.users[m.sender]
    let { group } = db.data.settings[this.user.jid]
    let setting = db.data.settings[this.user.jid]
    let user = global.db.data.users[m.sender]
    let izuka = '6285704015608@s.whatsapp.net'
    let satyo = '6282143350197@s.whatsapp.net'
    
    // salam
    let reg = /(ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم)/i
    let isSalam = reg.exec(m.text)
    if (isSalam && !m.fromMe) {
        m.reply(`وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ\n_wa\'alaikumussalam wr.wb._`)
    }
    
    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
        this.sendButton(m.chat, `┌「 *Undang Bot ke Grup/Premium* 」
├ 7 Hari / Rp 4,000
├ 14 Hari / Rp 6,000
├ 22 Hari / Rp 8,000
├ 30 Hari / Rp 10,000
└────
`.trim(), wm, 'Pemilik Bot', '.owner', m)
    }

    if (m.isGroup) {
    if (m.fromMe) return
    if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
        await this.sendStimg(m.chat , 'https://telegra.ph/file/6160f017dd8365a232078.png', 0, {packname: 'BOT NYA ON KAK >///<'})
        }
 }
    if (m.isGroup) {
    if (m.fromMe) return
    if (m.mentionedJid.includes(izuka) && m.isGroup) {
        await this.sendStimg(m.chat , 'https://telegra.ph/file/d60e33b2766637580c921.png', m, {packname: 'KNP CARI OWNER BANH?'})
        }
        
}
    if (m.isGroup) {
    if (m.fromMe) return
    if (m.mentionedJid.includes(satyo) && m.isGroup) {
        await this.sendStimg(m.chat , 'https://telegra.ph/file/1e7701a6b7c9e2530fb64.png', m, {packname: 'KEJA SLEBEW'})
        }
        
}
    if (/^bot$/i.test(m.text)) {
        await this.sendButton(m.chat, !(m.isGroup || m.isPrems) && group ? 'hanya grup' : isBanned ? 'chat banned' : banned ? 'user banned' : 'Aᴘᴀ Bᴀɴʜ? ', wm, !(m.isGroup || m.isPrems) && group ? 'donasi' : isBanned ? 'unban' : banned ? 'minta ke owner kalo mau di unban' : 'donasi', !(m.isGroup || m.isPrems) && group ? '.donasi' : isBanned ? '.unban' : banned ? '.owner' : '.donasi', m)
    }

    if (new Date() * 1 - setting.status > 100) {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
await this.setBio(`Nᴇᴢʜᴀ-Bᴏᴛ Aᴋᴛɪғ Sᴇʟᴀᴍᴀ:${uptime}`).catch(_ => _)
setting.status = new Date() * 1 
}
    
   if (/^.hentai|.bokep|.nsfw$/i.test(m.text)) {

        await this.sendImageAsSticker(m.chat , 'https://telegra.ph/file/519d5c3c3cad45fee0d7c.png','https://telegra.ph/file/5d921c67dc719ec8c9d74.png', m, {packname: 'Tobat Bang'})

    }

    return !0
}

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari tod"
    if (time >= 4) {
        res = "Selamat pagi tod"
    }
    if (time > 10) {
        res = "Selamat siang tod"
    }
    if (time >= 15) {
        res = "Selamat sore tod"
    }
    if (time >= 18) {
        res = "Selamat malam tod"
    }
    return res
}

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}