let fetch = require('node-fetch') 
let handler  = async (m) => {
  let res = await fetch(global.API('https://raw.githubusercontent.com', '/BochilTeam/database/master/kata-kata/truth.json'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let h = pickRandom(json)
  conn.sendButtonDoc(m.chat, h, wm, `Truth Or Dare`, `.truthordare`, m)
}
handler.help = ['truth']
handler.tags = ['fun']
handler.command = /^(truth)$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.round(Math.random() * list.length)]
}
