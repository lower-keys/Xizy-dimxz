let handler = (m, {conn, command}) => {
	conn.send2ButtonDoc(m.chat, `*Truth Or Dare?*`, wm, `Truth`, `.truth`, `Dare`, `.dare`, m,)
	}
handler.help = ["truthordare"]
handler.tags = ["fun"]
handler.command = /^(truthordare)$/i
handler.owner = false

module.exports = handler