let handler = async (m, { conn }) => {
	let emot = conn.pickRandom(["๐", "๐", "โ ๏ธ", "๐ค", "๐คจ", "๐", "๐", "๐ฉ", "๐คฆโโ๏ธ", "๐ฅ", "๐คฎ"])
    conn.sendMessage(m.chat, {
    	react: {
    		text: emot,
    		key: m.key
    	}
    })	
}
handler.customPrefix = /(bile?k|ban?h|cum?|knt?l|y?|mmk|p|b(a|i)?c?(o|i)?(t|d)?|wibu|p(a)?nt(e)?k|pepe?k)/i
handler.command = new RegExp

module.exports = handler