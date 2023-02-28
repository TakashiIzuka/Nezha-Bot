const cheerio = require('cheerio')
const axios = require('axios')
let fetch = require('node-fetch')
let handler  = async (m, { conn, args, text, usedPrefix }) => {
let cer = await cerpen(text)
let pen = `
	*Judul:* ${cer.title}
*Cerpen Karangan:* ${cer.author}
*Kategori:* ${cer.kategori}
*Lolos moderasi:* ${cer.lolos}
	
*Cerita:*
	${cer.cerita}
	`
conn.reply(m.chat, pen.trim(), 0)
}
handler.command = /^(listcerpen)$/i
module.exports = handler

const baseUrl = 'https://cerpenmu.com'

async function cerpen(category) {
return new Promise((resolve, reject) => {
let title = category.toLowerCase().replace(/[()*]/g, "")
let judul = title.replace(/\s/g, "-")
let page = Math.floor(Math.random() * 5)
axios.get('http://cerpenmu.com/category/cerpen-'+judul+'/page/'+page)
.then((get) => {
let $ = cheerio.load(get.data)
let link = []
$('article.post').each(function (a, b) {
link.push($(b).find('a').attr('href'))
})
let random = link[Math.floor(Math.random() * link.length)]
axios.get(random)
.then((res) => {
let $$ = cheerio.load(res.data)
let hasil = {
title: $$('#content > article > h1').text(),
author: $$('#content > article').text().split('Cerpen Karangan: ')[1].split('Kategori: ')[0],
kategori: $$('#content > article').text().split('Kategori: ')[1].split('\n')[0],
lolos: $$('#content > article').text().split('Lolos moderasi pada: ')[1].split('\n')[0],
cerita: $$('#content > article > p').text().replaceAll('\n\n', '\n\n').trim()
}
resolve(hasil)
})
})
})
}