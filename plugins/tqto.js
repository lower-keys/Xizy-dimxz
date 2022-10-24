/**
* jangan dihapus/diganti ya kontol
* lu itu cuma make jadi jangan diapa apain ya bangsat
* mending lu tambahin deh nama lu jangan hapus kreditnya
**/

let handler = async (m, { conn, usedPrefix }) => {
    let tqto = `*THANKS TO*
    
Terimakasih Utama Nya Teruntuk:
➸Gweh(Dimxz)
➸Pedo(Caca)
➸Zaki Indomie(Zaki)

Terimakasih Juga Untuk Kang Banned:
➸ @${'0'.split('@')[0]}

──────────────────────
• God
• My ortu
• Nurutomo
• Adiwajshing
• Xteam
• Penyedia Layanan API
• Orang-orang yang Berdonasi
──────────────────────`
await conn.sendButtonLoc(m.chat, await conn.resize('https://i.postimg.cc/8zCXVkyY/ce6ffeea35742410166301aede74af0d.jpg', 300, 300),  tqto, `Ini Ucapan Terima Kasih Untuk Orang Nya Telah Berpatisipasi

Official By @${'0'.split('@')[0]}`, 'Owner', '.owner', m)
}
handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(credits?|thanks?to|tqto|ttq)$/i

module.exports = handler
