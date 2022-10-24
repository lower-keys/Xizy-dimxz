let fetch = require('node-fetch')
let { googleImage } = require('@bochilteam/scraper')
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `ᴜꜱᴇ ᴇxᴀᴍᴘʟᴇ ${usedPrefix}ɪᴍᴀɢᴇ ꜰɪʟʟᴏ ᴄʜᴀɴ`
    const res = await googleImage(text)
    let image = res.getRandom()
    let link = image
    conn.sendButtonImg(m.chat, link, `
*_IMAGE_*
🔎 *Result:* ${text}
🌎 *Source:* xizy.md
⛩ *ɴᴀᴍᴇ ᴜꜱᴇʀ:* ${conn.getName(m.sender)}
`,  wm, `Next`, `.image ${text}`, m)
}
handler.help = ['gimage <query>', 'image <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image)$/i

module.exports = handler
