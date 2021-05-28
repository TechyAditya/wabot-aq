let handler = async m => m.reply(`
╭─「 Buy me a Coffee ☕ 」
│ • Gpay,Paytm [9987976505]
│ • Upi [9987976505@paytm]
╰────

╭─「 Donation • Credit 」
│ • Gpay, Paytm [9470002583]
│ • Upi [9470002583@ybl]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
