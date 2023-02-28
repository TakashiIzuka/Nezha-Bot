let fs = require('fs')

let flaaa = JSON.parse(fs.readFileSync('./api/fla.json'))
let waifu = JSON.parse(fs.readFileSync('./api/waifu.json'))
let data = JSON.parse(fs.readFileSync('./data.json'))


global.owner = JSON.parse(fs.readFileSync('./settings/owner.json')) // Put your number to folder /src/owner.json
global.mods = JSON.parse(fs.readFileSync('./settings/moderator.json')) // Want some help?

global.APIs = { // API Prefix //
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  lol: 'https://api.lolhuman.xyz',
  adicug: 'https://api.adiofficial.xyz',
  males: 'https://malesin.xyz',
}
global.APIKeys = { // APIkey here //
  'https://api.zeeoneofc.xyz': 'ez5RSThO',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://api.xteam.xyz': 'apikeylu',
  'https://melcanz.com': 'apikeylu',
  'https://api.lolhuman.xyz': 'apikeylu',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apikeylu',
  'https://pencarikode.xyz': 'apikeylu',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'apikeylu',
  'https://api.adiofficial.xyz': 'apikeylu'
}

global.wait = '_*𝐬𝐞𝐝𝐚𝐧𝐠 𝐝𝐢 𝐩𝐫𝐨𝐬𝐞𝐬 ...*_'
global.eror = '_*мααƒ ѕєяνєя тι∂αк ѕтαвιℓ..*_'
global.Intervalmsg = 1800 //detik

//========Url Template Buttons=========//
global.dtu = 'IG'
global.urlnya = "https://www.instagram.com/nafanfalakhil"

//============= callButtons =============//
global.dtc = 'Takashi'
global.phn = '+62 857-9128-3043'

//============= Games ================//
global.benar = '_*Benar✅*_'
global.salah = '_*Salah❌*_'
global.dikit = "dikit lagi, semangat ya :')"

global.multiplier = 100 // The higher, The harder levelup

// Sticker WM
global.packname = data.namabot;'𝙽𝚎𝚣𝚑𝚊-𝙱𝚘𝚝'
global.author = data.owner;'Tᴀᴋᴀsʜɪ'

//=========== Requirements ==========//  
        global.colong1 = 'Ciss 📸'
        global.colong2 = 'By Takashi'
global.img = pickRandom(waifu)
global.fla = pickRandom(flaaa)

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🧬',
      limit: '🌌',
      healt: '❤️',
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      fishingrod: '🎣',
      pickaxe: '⛏️',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      iron: '⛓️',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      makananpet: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
