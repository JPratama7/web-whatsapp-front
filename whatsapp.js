const {Client} = require('whatsapp-web.js')
const fs = require('fs')
const qrcode = require('qrcode-terminal')
const path_sess = './auth.json'

let sessionData;
if(fs.existsSync(path_sess)){
    sessionData = require(path_sess);
}

const client = new Client({
    session: sessionData
})



client.on('qr', qr =>{
    console.log('QR')
    qrcode.generate(qr, {small:true})
})


client.on('authenticated', (session) =>{
    sessionData = session
    fs.writeFile(path_sess,JSON.stringify(sessionData), (err) =>{
        if(err){
            console.log(err)
        }
    })
})


client.on('auth_failure', (msg) =>{
    console.error('Error terjadi', msg)
})

client.on('ready', () =>{
    console.log('Bot Ready')
})

client.on('message', async msg =>{
    console.log(msg.body)
    console.log(msg.from)
    console.log(msg.author.split('@')[0])
})

client.initialize()