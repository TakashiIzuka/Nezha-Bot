let { tiktokdl, tiktokdlv2, tiktokdlv3 } = require ('@bochilteam/scraper')
let fetch = require ('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    const { author: { nickname }, video, description } = await tiktokdl(args[0])
        .catch(async _ => await tiktokdlv2(args[0]))
        .catch(async _ => await tiktokdlv3(args[0]))
    const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
    if (!url) throw 'Can\'t download video!'
    await conn.sendFile(m.chat, url, 'tt.mp4', `
- *ɴɪᴄᴋɴᴀᴍᴇ:* ${nickname}
- *ᴅᴇsᴄʀɪᴘᴛɪᴏɴ:*
${description}
`, m, false, { contextInfo: { forwardingScore: 0, isForwarded: false }})
}
    
handler.help = ['tiktok', 'tiktok', 'tiktokdl'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tik(tok)?(tok)?(dl)?)$/i
handler.limit = 1
module.exports = handler