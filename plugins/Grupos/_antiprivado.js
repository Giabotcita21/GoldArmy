export async function before(m, {isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes("PIEDRA") || m.text.includes("PAPEL") || m.text.includes("TIJERA")) return !0;
  let bot = global.db.data.settings[this.user.jid] || {};

  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(
     Gold Army bot es un bot privado y tiene prohibido los mensajes a mi privado | seras bloqueado.
 
Creador:
👤 +51990185642

nota: no regalo bot a ningún grupo
`,
      false,
      {mentions: [m.sender]}
    );
    await this.updateBlockStatus(m.chat, "block");
  }
  return !1;
}
