const chalk = require('chalk');
const {WAConnection, MessageType, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const Axios = require('axios')

const msgs = '*🚀 Alpha-X , is a WhatsApp helper bot written by [Yusuf Usta] and edited by 🙂 (SL-Alpha-X-Team.) Does not log into your account 🔎 It is written on WhatsApp Web API. 🔏* \n\n More details below 👇'
const msg1 = '```Alpha-X Bot - Alpha Userbot is Open Source software open to development. \nThe user is responsible for all consequences that may arise from incorrect or misuse. \nSince it is an open source project, anyone can copy the software, add and remove,\nand use it in a way that they customize. In addition, plug-in support enables users to \ninstall their own plugins to the original software and use them as they wish.\nUsing the bot out of purpose will explicitly ban you.\nUsage is entirely the user\'s responsibility, Alpha Userbot is an \ninfrastructure only. Just as the operating system is not responsible \nfor the work done with the programs that are installed later, Alpha-X \nis not responsible for the usage purpose and method of the users.\nMarketing Alpha-X for money, making it available or having any material value\nıt is strictly forbidden to offer it for sale with anything. All legal investigations that may arise\nthe user is responsible.```'
const warn = '```Due to Userbot ; Your WhatsApp account may be banned. \nThis is an open source project, you are responsible for everything you do. \nAbsolutely, Alpha-X executives do not accept responsibility.\nBy establishing the Alpha-X , you are deemed to have accepted these responsibilities.```'
const msg2 = '```This project is open source so all the codes are clear. Neither less no more ; you can look what you want. We absolutely do not have access to your accounts.```'
const msg3 = '```If you are concerned about security, you can install it on your own computer. If you think someone else has captured your data, simply click on Whatsapp> Three Dots> Whatsapp Web> Logout from all sessions button.```'
const msg4 = '```Of course not. It will never happen. But you can donate to us. You can reach me via Telegram .```'

async function AlphaX () {
    const conn = new WAConnection();
    conn.version = [2, 2140, 12]
    conn.logger.level = 'warn'; 
    
    conn.on('connecting', async () => {
        console.log(`${chalk.blueBright.bold('<>======== ❇ Alpha-X ❇  ')}${chalk.red.bold('BOT QR CODE ========<>')}
${chalk.white.bold('[[ New and speed version of Alpha-X-Bot-QR Code ]]')}

${chalk.green.bold('⚙ Connecting to Whatsapp Please wait...💹')}`);
    });
    
// 'AlphaX;;;' + Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString('base64')

    conn.on('open', async () => {
        console.log(
            chalk.red('_____________________________ COPY THIS CODE ____________________________ \n'), 
            'Alpha-X;;;' + Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString('base64')
        );
        
        const rows = [
         {title: '<🔏> YOUR QR CODE <🔏>', description: '\n\nAlphaX;;;' + Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString('base64') + '\n\n*⚠ Please Do Not Share This Code With Anyone!* ' + conn.user.name , rowId:"rowid1"},
         {title: '<💡 About Alpha-X 💡>', description: `\n\n${msg1}`, rowId:"rowid2"},
         {title: '❌ Warning ❌', description: `\n\n${warn}`, rowId:"rowid3"},
         {title: 'Can you read my messages ?', description: `Answer a few frequently asked questions\n\n${msg2}`, rowId:"rowid4"},
         {title: 'What about our security ?', description: `Answer a few frequently asked questions\n\n${msg3}`, rowId:"rowid5"},
         {title: 'Is thid paid ?', description: `Answer a few frequently asked questions\n\n${msg4}`, rowId:"rowid6"}
         ]

        const sections = [{title: "⚔️ Alpha-X-Bot-QR-GEN v.2 🌏", rows: rows}]

       const button = {
        buttonText: 'Click here! 🔎',
        description: msgs ,
        sections: sections,
        listType: 1
        }
        
        await conn.sendMessage(conn.user.jid ,button, MessageType.listMessage)
        
        var alpha = await Axios.get(`https://telegra.ph/file/26a74a9135c705ad9043b.jpg`, { responseType: 'arraybuffer' })
        
          await conn.sendMessage(conn.user.jid,Buffer.from(alpha.data), MessageType.image , {mimetype: Mimetype.png, caption: '*💹 Thanks for using Alpha-X*' })

        console.log(
            chalk.white.bold('*⚠ Please Do Not Share This Code With Anyone\n*'), 
            chalk.greenBright.bold('IF YOU CANNOT COPY THE MESSAGE, PLEASE CHECK WHATSAPP. QR CODE SENT TO YOUR OWN NUMBER! >>')
        );
        process.exit(0);
    });

    await conn.connect();
}

AlphaX ()
