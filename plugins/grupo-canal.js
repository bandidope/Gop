const handler = async (m, { conn }) => {
  const canalInfo = `╔══════════════════════════════╗
║     🐉 𝐂𝐀𝐍𝐀𝐋 𝐎𝐅𝐈𝐂𝐈𝐀𝐋 🗡️
╚══════════════════════════════╝

🌀 *Únete al poder del dragón*

✨ *CANAL:* Prime Bot 2025

📜 *¿Qué encontrarás?*
• ⚡ Actualizaciones épicas
• 🗡️ Nuevos comandos divinos
• 🔥 Tutoriales y guías
• 🌟 Soporte exclusivo
• 🐉 Noticias del ecosistema

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔗 *LINK OFICIAL:*
https://whatsapp.com/channel/0029Vb5oUp43LdQUVViHwc0m

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✨ *¡Únete guerrero! El poder te espera* ✨

🐉 _Poder Máximo Activado_ 🗡️`

  await conn.sendMessage(m.chat, { text: canalInfo }, { quoted: m })
  await m.react('🐉')
}

handler.command = ['canal', 'channel', 'kamehouse']
handler.tags = ['grupo']
handler.help = ['canal']

export default handler