const delay = time => new Promise(res => setTimeout(res, time))
let handler = async(m, { conn }) => {
	conn.p = conn.p ? conn.p : {}
	let id = m.chat
	const ftroli = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 999999,
    status: 404,
    surface : 404,
    message: `Inpo Min`, 
    orderTitle: ``,
    thumbnail: conn.resize(await (await fetch(global.takina)).buffer(), 300, 300), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let pp = await conn.profilePictureUrl(who, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
	conn.p[id] = [
	await conn.sendKontak(m.chat, kontak2, ftroli, { contextInfo: { externalAdReply :{ 
     showAdAttribution: true, 
      }} 
   })
	]
	await delay(100)
  return conn.sendButtonDoc(m.chat, `Owner Gwehj cuy`, 'Ngawi Mas Bro😎😅','Credits', '.tqto', m, { quoted: conn.p[id][0],
    contextInfo: { //forwardingScore: 99999, isForwarded: true,
        externalAdReply: { //showAdAttribution: true,
        	sourceUrl: 'https://github.com/lower-keys',
            title: 'OWNER XIZY_MD',
            body: 'Salam buyah',
          thumbnail: await (await fetch(pp)).buffer()
        }
     }
    }) 
  await delay(100)
  return delete conn.p[id]
}

handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

module.exports = handler
