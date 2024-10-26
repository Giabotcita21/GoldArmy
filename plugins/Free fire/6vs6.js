var handler = async (m, { conn, participants, groupMetadata, args, text }) => {

const pp = './src/6vs6clk.png'
const groupAdmins = participants.filter(p => p.admin)
const listaAdmins = groupAdmins.map((v, i) => ``).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
if (!text) return m.reply(`🕓 𝗜𝗡𝗚𝗥𝗘𝗦𝗔 𝗨𝗡 𝗛𝗢𝗥𝗔𝗥𝗜𝗢.\n𝗘𝗷𝗲𝗺𝗽𝗹𝗼:\n.6vs6 4pm🇪🇨/3pm🇲🇽`)
if (text.length < 0) return m.reply(`⚙️ 𝗛𝗢𝗥𝗔𝗥𝗜𝗢 𝗠𝗔𝗟 𝗘𝗦𝗖𝗥𝗜𝗧𝗢, 𝗜𝗡𝗧𝗘𝗡𝗧𝗔 𝗗𝗘 𝗡𝗨𝗘𝗩𝗢.`)
let mensaje = args.join` `
let yo = `🕓 𝗛𝗢𝗥𝗔: *${text}*`
let texto = `╭──────⚔──────╮
   6𝗩𝗦6 𝗖𝗢𝗠𝗣𝗘𝗧𝗜𝗧𝗜𝗩𝗢 
╰──────⚔──────╯

${yo}
📑 𝗥𝗘𝗚𝗟𝗔𝗦: 𝗖𝗟𝗞

╭─────────────╮
│ 𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 
│👑 ➤ 
│🥷🏻 ➤  
│🥷🏻 ➤ 
│🥷🏻 ➤ 
│🥷🏻 ➤ 
│🥷🏻 ➤ 
╰─────────────╯
╭─────────────╮
│ 𝗦𝗨𝗣𝗟𝗘𝗡𝗧𝗘𝗦 
│🥷🏻 ➤  
│🥷🏻 ➤ 
╰─────────────╯
𝗦𝗘𝗕𝗫𝗦 𝗕𝗢𝗧  
❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘`.trim()
conn.sendFile(m.chat, pp, 'error.jpg', texto, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })

}
handler.help = ['admins']
handler.tags = ['grupo']
handler.command = /^(6x6|6vs6)$/i
handler.group = true

export default handler
