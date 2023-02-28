let handler = async (m, { conn}) => {


conn.sendButtonVid(m.chat,'https://telegra.ph/file/b3f1dfc76ce9dca66a599.mp4','Hadeh',wm,'NGELU','.ngelu',0)

}

handler.command = /^(hm)$/i

module.exports = handler