let fetch = require('node-fetch') 
let handler  = async (m) => {
  let res = await fetch(global.API('https://raw.githubusercontent.com', '/BochilTeam/database/master/kata-kata/dare.json'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let a = pickRandom(json)
  conn.sendButtonDoc(m.chat, a, wm, `Truth Or Dare`, `.truthordare`, m)
}
handler.help = ['dare']
handler.tags = ['fun']
handler.command = /^(dare)$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.round(Math.random() * list.length)]
}