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

global.wait = '_*๐ฌ๐๐๐๐ง๐  ๐๐ข ๐ฉ๐ซ๐จ๐ฌ๐๐ฌ ...*_'
global.eror = '_*ะผฮฑฮฑฦ ัััฮฝัั ัฮนโฮฑะบ ััฮฑะฒฮนโ..*_'
global.Intervalmsg = 1800 //detik

//========Url Template Buttons=========//
global.dtu = 'IG'
global.urlnya = "https://www.instagram.com/nafanfalakhil"

//============= callButtons =============//
global.dtc = 'Takashi'
global.phn = '+62 857-9128-3043'

//============= Games ================//
global.benar = '_*Benarโ*_'
global.salah = '_*Salahโ*_'
global.dikit = "dikit lagi, semangat ya :')"

global.multiplier = 100 // The higher, The harder levelup

// Sticker WM
global.packname = data.namabot;'๐ฝ๐๐ฃ๐๐-๐ฑ๐๐'
global.author = data.owner;'Tแดแดแดsสษช'

//=========== Requirements ==========//  
        global.colong1 = 'Ciss ๐ธ'
        global.colong2 = 'By Takashi'
global.img = pickRandom(waifu)
global.fla = pickRandom(flaaa)

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '๐งฌ',
      limit: '๐',
      healt: 'โค๏ธ',
      exp: 'โ๏ธ',
      money: '๐ต',
      potion: '๐ฅค',
      diamond: '๐',
      common: '๐ฆ',
      uncommon: '๐',
      mythic: '๐ณ๏ธ',
      legendary: '๐๏ธ',
      pet: '๐',
      sampah: '๐',
      armor: '๐ฅผ',
      fishingrod: '๐ฃ',
      pickaxe: 'โ๏ธ',
      sword: 'โ๏ธ',
      kayu: '๐ชต',
      batu: '๐ชจ',
      iron: 'โ๏ธ',
      string: '๐ธ๏ธ',
      kuda: '๐',
      kucing: '๐' ,
      anjing: '๐',
      makananpet: '๐',
      gold: '๐',
      emerald: '๐'
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
