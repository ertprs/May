exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `∆ -----[ *MENU DE AJUDA ${BotName}* ]----- ∆
  Olá *${id.split("@s.whatsapp.net")[0]}* 👋️


∆ PARA INICIAR DÊ #START ∆

📺 *Propaganda* :

✅ Siga o instagram do administrador ${instagramlu}

⚠️ ÚLTIMAS INFORMAÇÕES SOBRE COVID-19!

⚠️ POSITIVO: *${corohelp.confirmed.value}*
⚠️ CURADOS: *${corohelp.recovered.value}*
⚠️ MORRERAM: *${corohelp.deaths.value}*
⚠️ ATUALIZADO ⚠️

♻️ _MANTENHA SUA SAÚDE E SEMPRE USE MASCARA!_

♻️ Quer anunciar no *${BotName} ?*
☎️ WA : *${whatsapplu}*
  
⚠️ Use-o com sabedoria ‼️
⚠️ Este bot está rodando ${kapanbotaktif} ‼️

✅ Grupo oficial [1] : ${grupch1}

✅ Grupo oficial [2] : ${grupch2}

  
∆ -----[ *${BotName}* ]----- ∆`
}
