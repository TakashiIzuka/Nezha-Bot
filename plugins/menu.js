let levelling = require('../lib/levelling')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
const defaultMenu = {
  before: `
┌─〔 %me 〕
├ *%ucapan*
├ Tersisa *%limit Limit*
├ Role *%role*
├ Level *%level (%exp / %maxexp)* 

├ Tinggal [%xp4levelup]
├ %totalexp XP secara Total
├ Hari: *%week %weton
├Tanggal: *%date*
├ Tanggal Islam: *%dateIslamic*
├ Waktu: *%time*
├ Uptime: *%uptime 
├ Uptime:(%muptime)*
├ Database: %rtotalreg
├ Dari %totalreg
└────
%readmore`.trim(),
  header: '┌─〔 %category 〕',
  body: '├ %cmd %islimit %isPremium',
  footer: '└────\n',
  after: `
*%npmname@^%version*
${'```%npmdesc```'}
`,
}
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {

  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'game', 'xp', 'stiker', 'kerangajaib', 'quotes', 'admin', 'grup', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'anime', 'database', 'quran', 'audio', 'jadibot', 'info', 'tanpakategori', 'owner', 'tesfitur','nsfw']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
    'main': 'UTAMA',
    'game': 'Game',
    'rpg': 'RPG',
    'xp': 'Exp & Limit',
    'sticker': 'Stiker',
    'kerang': 'Kerang Ajaib',
    'quotes': 'Quotes',
    'group': 'Grup',
    'premium': 'Premium',
    'internet': 'Internet',
    'anonymous': 'Anonymous Chat',
    'nulis': 'MagerNulis & Logo',
    'downloader': 'Downloader',
    'tools': 'Tools',
    'fun': 'Fun',
    'database': 'Database',
    'vote': 'Voting',
    'absen': 'Absen',
    'quran': 'Al Qur\'an',
    'audio': 'Pengubah Suara',
    'jadibot': 'Jadi Bot',
    'info': 'Info',
    '': 'Tanpa Kategori',
    'anime': 'Anime',
    'tesfitur': 'Test Fitur',
    'nsfw': 'Nsfw',
    
  }
  if (teks == 'game') tags = {
    'game': 'Game',
    'rpg': 'RPG'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'grup') tags = {
    'group': 'Grup'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'MagerNulis & Logo'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting',
    'absen': 'Absen'
  }
  if (teks == 'quran') tags = {
    'quran': 'Al Qur\'an'
  }
  if (teks == 'audio') tags = {
    'audio': 'Pengubah Suara'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'tanpakategori') tags = {
    '': 'Tanpa Kategori'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }
  if (teks == 'anime') tags = {
      'anime': 'Anime'
      
  }
  if (teks == 'tesfitur') tags = {
      'tesfitur': 'Test Fitur'
      }
 if (teks == 'nsfw') tags = {
     'nsfw': 'Nsfw'
     }
      


  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, age, money, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let umur = `*${age == '-1' ? 'Belum Daftar*' : age + '* Thn'}`
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    global.jam = time
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    if (teks == '404') {
      let judul = `${global.ucapan}

┌─〔 INFO 〕
├ Hari: ${week}, ${weton}
├ Tanggal: ${date}
├ Waktu: ${time}
├ Tanggal Islam: ${dateIslamic}
└────  

┌─〔 USER 〕
├ Name: ${name}
├ Umur: *${age == '-1' ? 'Belum Daftar' : age}*
├ Limit: ${limit}
├ Role: ${role}
├ Level: ${level}
└────
┌─〔 BOT 〕
├ Uptime: ${uptime}
├ User: ${rtotalreg} Dari ${totalreg} User
└────
`.trim()
      const sections = [
      {
        title: 'List Menu ' + namabot,
        rows: [
          { title: '️🗒️ |𝐒𝐄𝐌𝐔𝐀 𝐏𝐄𝐑𝐈𝐍𝐓𝐀𝐇️', rowId: `${_p}? all` ,description:'╰►Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Sᴇᴍᴜᴀ Pᴇʀɪɴᴛᴀʜ' },
          { title: '🎮 |𝐆𝐀𝐌𝐄', rowId: `${_p}? game` ,description:'╰►Fɪᴛᴜʀ Uɴᴛᴜᴋ Bᴇʀᴍᴀɪɴ Dᴇɴɢᴀɴ Bᴏᴛ' },
          { title: '️🎖️ |𝐗𝐏️', rowId: `${_p}? xp` ,description:'╰►Fɪᴛᴜʀ Uɴᴛᴜᴋ Mᴇʟɪʜᴀᴛ Sᴛᴀᴛɪsᴛɪᴄ RPG' },
          { title: '🖼️ |𝐒𝐓𝐈𝐊𝐄𝐑️', rowId: `${_p}? stiker` ,description:'╰►Fɪᴛᴜʀ Uɴᴛᴜᴋ Mᴇᴍʙᴜᴀᴛ Sᴛɪᴋᴇʀ' },
          { title: '🐚 |𝐊𝐄𝐑𝐀𝐍𝐆 𝐀𝐉𝐀𝐈𝐁', rowId: `${_p}? kerangajaib` ,description:'╰►Fɪᴛᴜʀ Bᴜᴀᴛ Kᴀᴍᴜ Yɢ Sᴇʀɪɴɢ Nᴀɴʏᴇᴀᴋ'},
          { title: '🎦 |𝐐𝐔𝐎𝐓𝐄𝐒', rowId: `${_p}? quotes`,description:'╰►Fɪᴛᴜʀ Yɢ Mᴇᴍʙᴇʀɪᴋᴀɴ Kᴀᴛᴀ-ᴋᴀᴛᴀ Mᴏᴛɪᴠᴀsɪ (Mᴜɴɢᴋɪɴ)'},
          { title: '👥 |𝐆𝐑𝐔𝐏', rowId: `${_p}? grup` ,description:'╰►Fɪᴛᴜʀ Uɴᴛᴜᴋ Mᴇɴɢᴀᴛᴜʀ Gʀᴜᴘ'},
          { title: '💵 |𝐏𝐑𝐄𝐌𝐈𝐔𝐌', rowId: `${_p}? premium` ,description:'╰►Mᴇɴᴜ Kʜᴜsᴜs Pᴇɴɢɢᴜɴᴀ Pʀᴇᴍɪᴜᴍ'},
          { title: '📡 |𝐈𝐍𝐓𝐄𝐑𝐍𝐄𝐓', rowId: `${_p}? internet` ,description:'╰►Fɪᴛᴜʀ Uɴᴛᴜᴋ Mᴇɴᴊᴇʟᴀᴊᴀʜɪ Iɴᴛᴇʀɴᴇᴛ' },
          { title: '🆔 |A𝐍𝐎𝐍𝐘𝐌𝐎𝐔𝐒', rowId: `${_p}? anonymous` ,description:'╰►Fɪᴛᴜʀ Cʜᴀᴛ Aɴᴏɴɪᴍ' },
          { title: '✏️ |𝐍𝐔𝐋𝐈𝐒 & 𝐋𝐎𝐆𝐎️', rowId: `${_p}? nulis` , description:'╰►Fɪᴛᴜʀ Bᴜᴀᴛ Yɢ Mᴀɢᴇʀ Nᴜʟɪs' },
          { title: '⬇️ |𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑', rowId: `${_p}? downloader` ,description:'╰►Fɪᴛᴜʀ Bᴜᴀᴛ Mᴇɴᴅᴏᴡɴʟᴏᴀᴅ Sᴇsᴜᴀᴛᴜ Lᴇᴡᴀᴛ Bᴏᴛ'},
          { title: '🔧 |𝐓𝐎𝐎𝐋𝐒', rowId: `${_p}? tools` ,description:'╰►Fiɪᴛᴜʀ Aʟᴀᴛ Bᴀɴᴛᴜ'},
          { title: '🕹️ |𝐅𝐔𝐍️', rowId: `${_p}? fun`,description:'╰►Fɪᴛᴜʀ Bᴜᴀᴛ Mᴀɪɴ-Mᴀɪɴ'},
          { title: '📝 |𝐃𝐀𝐓𝐀𝐁𝐀𝐒𝐄', rowId: `${_p}? database`,description:'╰►Uɴᴛᴜᴋ Mᴇʟɪʜᴀᴛ Dᴀᴛᴀʙᴀsᴇ Bᴏᴛ'},
          { title: '📘 |𝐕𝐎𝐓𝐄 & 𝐀𝐁𝐒𝐄𝐍', rowId: `${_p}? vote`,description:'╰►Fɪᴛᴜʀ Bᴜᴀᴛ Aʙsᴇɴ/Vᴏᴛᴇ'},
          { title: "📖 |𝐀𝐋-𝐐𝐔𝐑\'𝐀𝐍", rowId: `${_p}? quran`,description:'╰►Fɪᴛᴜʀ Isʟᴀᴍɪᴄ' },
          { title: '🎵 |𝐏𝐄𝐍𝐆𝐔𝐁𝐀𝐇 𝐒𝐔𝐀𝐑𝐀', rowId: `${_p}? audio`,description:'╰►Fɪᴛᴜʀ Uɴᴛᴜᴋ Mᴇɴɢᴇᴅɪᴛ Aᴜᴅɪᴏ (Bᴇʟᴏᴍ Aᴅᴀ)' },
          { title: '🤖 |𝐉𝐀𝐃𝐈𝐁𝐎𝐓', rowId: `${_p}? jadibot`,description:'╰►Fɪᴛᴜʀ Uɴᴛᴜᴋ Mᴇɴᴊᴀᴅɪ Bᴏᴛ (Bᴇʟᴏᴍ Aᴅᴀ)' },
          { title: '❓ |𝐈𝐍𝐅𝐎', rowId: `${_p}? info`,description:'Info bot',description:'╰►Iɴғᴏ Sᴇᴘᴜᴛᴀʀ Bᴏᴛ' },
          { title: '卐|𝐓𝐀𝐍𝐏𝐀 𝐊𝐀𝐓𝐄𝐆𝐎𝐑𝐈', rowId: `${_p}? tanpakategori` ,description:'╰►Gᴡ Gᴀᴛᴀᴜ Iɴɪ Aᴘᴀᴀɴ (Pᴏᴋᴏᴋ ɴʏᴀ ɢᴀ ᴀᴅᴀ)' },
          { title: '🤖 |𝐎𝐖𝐍𝐄𝐑', rowId: `${_p}? owner` ,description:'╰►Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴇɴᴜ Kʜᴜsᴜs Oᴡɴᴇʀ' },
          { title: '卐 |𝐀𝐍𝐈𝐌𝐄', rowId: `${_p}? anime` ,description:'╰►Mᴇɴᴜ Kʜᴜsᴜs Wɪʙᴜʜ Bᴀᴜ Bᴀᴡᴀɴɢ' },
          { title: '卐 |𝐓𝐄𝐒𝐓 𝐅𝐈𝐓𝐔𝐑', rowId: `${_p}? tesfitur` ,description:'╰►Tᴇs Fɪᴛᴜʀ Kʜᴜsᴜs Oᴡɴᴇʀ' },
          { title: '卐 |𝐍𝐒𝐅𝐖', rowId: `${_p}? nsfw` ,description:'╰►Mᴇɴᴀᴍᴘɪʟᴋᴀɴ Mᴇɴᴜ Kʜᴜsᴜs Bᴜᴀᴛ Oʀᴀɴɢ Yɢ Sᴀɴɢᴇᴋ Aᴍᴀ Kᴀʀᴛᴜɴ'},
        ]
      }
    ]
    const listMessage = {
      text: judul,
      footer: wm,
      mentions: await conn.parseMention(judul),
      title: '',
      buttonText: "₭Ⱡł₭ Đł₴ł₦ł",
      sections
    }
    return conn.sendMessage(m.chat, listMessage, { quoted: fkontak, mentions: await conn.parseMention(judul), contextInfo: { forwardingScore: 99999, isForwarded: true }})
    
    }

    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      ucapan: global.ucapan,
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `Siap untuk *${_p}levelup*` : `${max - exp} XP lagi untuk levelup`,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, umur, money, age, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    await conn.send3TemplateButtonImg(m.chat, fla + teks, text.trim(), wm, `🏅Owner`, `${_p}owner`, `🎖ThanksTo`, `${_p}tqto`, `🎗  Donasi  🎗`, `${_p}infobot`)
  } catch (e) {
    conn.reply(m.chat, 'Mᴀᴀғ,Mᴇɴᴜ Sᴇᴅᴀɴɢ Eʀʀᴏʀ', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(m(enu)?|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat dinihari"
  if (time >= 4) {
    res = "Selamat pagi bangun jan jadi kebo"
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