

let handler = async (m, { conn, usedPrefix }) => {
	conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'INR',
      amount1000: 1339889,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: `
─「 Donasi • Pulsa 」
*Axis* : 083837261215

*-Note :* _Jika kebingungan menggunakan bot silahkan chat owner_
`,
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
}
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
