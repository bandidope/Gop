
import speed from 'performance-now'

let handler = async (m, { conn }) => {
  let timestamp = speed()
  
  await m.react('⚡')
  
  let sentMsg = await m.reply(`🐉 *Activando Comando...*`)
  
  let latency = speed() - timestamp
  
  // Velocidades Dragon Ball Z
  let velocidadDBZ = ''
  let ataqueDBZ = ''
  let emojiDBZ = ''
  
  if (latency < 50) {
    velocidadDBZ = '🌀 *VELOCIDAD INSTANTÁNEA*'
    ataqueDBZ = 'Instant Transmission'
    emojiDBZ = '✨'
  } else if (latency < 150) {
    velocidadDBZ = '⚡ *VELOCIDAD RELÁMPAGO*'
    ataqueDBZ = 'Afterimage Technique'
    emojiDBZ = '💫'
  } else if (latency < 300) {
    velocidadDBZ = '🔥 *VELOCIDAD SÓNICA*'
    ataqueDBZ = 'Super Speed'
    emojiDBZ = '🌟'
  } else if (latency < 500) {
    velocidadDBZ = '💨 *VELOCIDAD NIMBUS*'
    ataqueDBZ = 'Flying Nimbus Cloud'
    emojiDBZ = '☁️'
  } else {
    velocidadDBZ = '🐌 *VELOCIDAD LENTA*'
    ataqueDBZ = 'Master Roshi Walking'
    emojiDBZ = '🐢'
  }
  
  const result = `
${emojiDBZ} *「 PING 」* ${emojiDBZ}

${velocidadDBZ}
📊 *Tiempo:* ${latency.toFixed(0)}ms
🎯 *Ataque:* ${ataqueDBZ}

⚡ *Prime Beast* - ¡Conectado!
🐉 *By Whois*
`
  
  await conn.sendMessage(m.chat, {
    text: result,
    edit: sentMsg.key
  })
  
  await m.react('✅')
}

handler.help = ['ping']
handler.tags = ['beast', 'info']
handler.command = ['ping', 'p', 'velocidad', 'speed', 'beast']
export default handler