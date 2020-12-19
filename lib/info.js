exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `🔰 -----[ *MENU ${BotName}* ]----- 🔰
  
Oi, Eu sou a May 👋️
Aqui estão as informações sobre mim! ✨

[ ️ *${tampilTanggal}* ]
[️ *${tampilWaktu}* ]



🔴 INFO BOT! :

=> *AUTHOR*: wa.me/+5511940787327

📺 *Propaganda* :

✅ Siga o instagram do administrador ${instagramlu}

⚠️ ÚLTIMAS INFORMAÇÕES SOBRE COVID-19

⚠️ POSITIVO: *${corohelp.confirmed.value}*
⚠️ CURADOS: *${corohelp.recovered.value}*
⚠️ MORREU: *${corohelp.deaths.value}*
⚠️ ATUALIZAR: *${corohelp.lastUpdate}*

♻️ _MANTENHA SUA SAÚDE E SEMPRE USE MÁSCARA!_

♻️ Quer postar um anúncio *${BotName} ?*
☎️ WA : *${whatsapplu}*
  
⚠️ Use-o com sabedoria‼ ️
⚠️ Este bot está rodando ${kapanbotaktif} ‼️

✅ Grupo oficial [1] : ${grupch1}

✅ Grupo oficial [2] : ${grupch2}

  
🔰 -----[ *${BotName}* ]----- 🔰`
}
