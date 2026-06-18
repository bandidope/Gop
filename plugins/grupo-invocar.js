import { randomBytes } from 'crypto'

let handler = async (m, { conn, participants, isOwner, isAdmin }) => {
  try {
    // Verificar permisos
    if (!m.isGroup) {
      return conn.reply(m.chat, '🌀 *PRIME BOT*\n\nEste poder solo puede ser invocado en grupos, ¡bro!', m)
    }

    // Verificar si el usuario es admin/owner
    if (!isAdmin && !isOwner) {
      return conn.reply(m.chat, 
        '⚡ *PODER NEGADO* ⚡\n\n' +
        '❌ Solo los administradores pueden invocar este poder divino.\n' +
        '¡Necesitas el poder de un Super Saiyan para esto!', m)
    }

    // INICIO DE LA INVOCACIÓN
    const inicio = Date.now()

    // Reacciones de poder
    await m.react('🌀')
    await m.react('⚡')
    await m.react('🔥')

    // Obtener TODOS los participantes
    const mentions = participants.map(a => a.id)

    // Crear mensaje épico con TODOS los mencionados
    const tiempoInvocacion = (Date.now() - inicio) / 1000

    // Generar lista completa de TODOS los guerreros
    const listaCompleta = mentions.map((jid, i) => 
      `┣━ ${i + 1}. @${jid.split('@')[0]}`
    ).join('\n')

    const mensajeDivino = 
      '╔═════════════════╗\n' +
      '║  𝗜𝗡𝗩𝗢𝗖𝗔𝗖𝗜𝗢𝗡 𝗗𝗜𝗩𝗜𝗡𝗔  ║\n' +
      '╚═════════════════╝\n\n' +

      '✨ *¡EL PODER DE PRIME BOT HA SIDO INVOCADO!* ✨\n\n' +

      '```\n' +
      '⚡ NIVEL DE PODER: SOBRE 9000\n' +
      '🌀 ENERGÍA DIVINA: ACTIVADA\n' +
      '🔥 MODO BESTIA: DESBLOQUEADO\n' +
      '```\n\n' +

      '👤 *Invocador:* @' + m.sender.split('@')[0] + '\n' +
      '👥 *TOTAL DE GUERREROS:* ' + mentions.length + '\n' +
      '⏱️ *Tiempo:* ' + tiempoInvocacion.toFixed(2) + 's\n' +
      '📅 *Fecha:* ' + new Date().toLocaleDateString() + '\n\n' +

      '🌀 *LISTA DE GUERREROS:*\n' +
      '┏━━━━━━━━━━━━━━━━━━\n' +
      listaCompleta + '\n' +
      '┗━━━━━━━━━━━━━━━━━━\n\n' +

      '🔥 *ONDA EXPANSIVA:*\n' +
      '`⚡⚡⚡⚡⚡ Energía máxima`\n' +
      '`🌀🌀🌀🌀🌀 Propagación divina`\n' +
      '`✨✨✨✨✨ Poder infinito`\n\n' +

      '✨ *¡HAN SIDOS INVOCADOS!* ✨\n\n' +

      '`⚡ Poder Prime Bot activado ⚡`'

    // ENVIAR UN SOLO MENSAJE CON TODOS MENCIONADOS
    await conn.sendMessage(m.chat, {
      text: mensajeDivino,
      mentions: mentions, // TODOS los participantes mencionados
      contextInfo: {
        mentionedJid: mentions,
        externalAdReply: {
          title: '⚡ PRIME BOT - INVOCACIÓN TOTAL ⚡',
          body: `${mentions.length} guerreros invocados`,
          thumbnailUrl: 'https://cdn.adoolab.xyz/dl/26172862.jpg',
          sourceUrl: 'https://whatsapp.com/channel/0029Vb5oUp43LdQUVViHwc0m',
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m })

    // REACCIONES FINALES
    await m.react('✅')
    await m.react('🌊')
    await m.react('✨')

    // LOG DE PODER
    console.log(`
🌀 INVOCACIÓN TOTAL COMPLETADA 🌀
┣━ Usuario: ${m.sender}
┣━ Grupo: ${m.chat}
┣━ Invocados: ${mentions.length} (TODOS)
┣━ Tiempo: ${tiempoInvocacion}s
┗━ Poder: MÁXIMO
    `)

  } catch (error) {
    console.error('💥 ERROR EN INVOCACIÓN BEAST:', error)

    await m.react('❌')
    await m.react('💥')

    return conn.reply(m.chat, 
      '💥 *¡EXPLOSIÓN DE ENERGÍA!* 💥\n\n' +
      'El poder de PRIME BOT ha colapsado temporalmente.\n' +
      '🔧 *Error:* ' + (error.message || 'Desconocido') + '\n\n' +
      'Intenta invocar de nuevo cuando la energía se estabilice.',
      m
    )
  }
}

// CONFIGURACIÓN DEL COMANDO
handler.command = ['invocar', 'invocacion', 'invocarbeast', 'llamartodos', 'mencionartodos', 'todos']
handler.tags = ['grupo', 'owner']
handler.help = ['invocar']
handler.group = true
handler.admin = true
handler.botAdmin = false
handler.rowner = false

export default handler