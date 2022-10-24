let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) throw `Apa yang mau di rate *${command.replace('rate', '').toUpperCase()}*`
	let g =  [{
urlButton: {
displayText: 'Instagram',
url: '-'
}
}]
	conn.sendButton(m.chat, `${command} ${text}\n${text} Is${Math.floor(Math.random() * 101)}% ${command.replace('rate', '').toUpperCase()}`.trim(), wm, g, m)
	}
	
handler.help = ['rate']
handler.tags = ['fun']
handler.owner = false

module.exports = handler