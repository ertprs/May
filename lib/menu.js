exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `∆ -----[ *MENU ${BotName}* ]----- ∆
  Olá *${id.split("@s.whatsapp.net")[0]}* 👋️


Aqui estão alguns dos recursos deste bot! ✨
⚠️ *${tampilTanggal}*
⚠️ *${tampilWaktu}*

∆ COMANDOS ∆
• #helpsticker
• #randomanime
• #apps 
• #filmes
• #series
• #criadores
• #bot
• #ytmp3
• #ig
• #fb
• #twt
• #letra
• #escrever

📺 *Propaganda* :

✅ Siga o instagram do administrador ${instagramlu}

⚠️ ÚLTIMAS INFORMAÇÕES SOBRE COVID-19!

⚠️ POSITIVO: *${corohelp.confirmed.value}*
⚠️ CURADOS: *${corohelp.recovered.value}*
⚠️ MORRERAM: *${corohelp.deaths.value}*
⚠️ ATUALIZADO: *${corohelp.lastUpdate}*

♻️ _MANTENHA SUA SAÚDE E SEMPRE USE MASCARA!_

♻️ Quer anunciar no *${BotName} ?*
☎️ WA : *${whatsapplu}*
  
⚠️ Use-o com sabedoria ‼️
⚠️ Este bot está rodando ${kapanbotaktif} ‼️

✅ Grupo oficial [1] : ${grupch1}

✅ Grupo oficial [2] : ${grupch2}

  
∆ -----[ *POWERED BY ${BotName}* ]----- ∆`
}
