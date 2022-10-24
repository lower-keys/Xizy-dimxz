let fs = require('fs')
let handler = async (m, { conn, message }) => {
	conn.sendFile(m.chat, 'global.takina', 'haori.mp3', `a
`.trim(), m, null, {
    asDocument: chat.useDocument, mimetype: 'audio/mp4', ptt: false, contextInfo: {
        externalAdReply: { showAdAttribution: true,
            title: 'Online', 
            body: 'Aaaaaaaaaa',
            description: 'Now Playing...',
            mediaType: 2,
          thumbnail: await (await fetch(global.takina)).buffer(),
         mediaUrl: `https://youtube.com/watch?v=uIedYGN3NQQ`
        }
     }
  })
  handler.customPrefix = /(te?s|xizy|bot)/i
  handler.command = new RegExp
  
  module.exports = handler