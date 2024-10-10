const { Client, Account, Databases, ID, Query } = Appwrite
const projectId = '67003257000db7f8e9a6'
const databaseId = '67028114003c323d7fb2'
const collectionId = '67028171001deee31d81'


const client = new Client();
client
    .setEndpoint("https://cloud.appwrite.io/v1") 
    .setProject(projectId)
    


// const sdk = require("node-appwrite");

// const client = new sdk.Client();
    
// client
//     .setEndpoint("https://cloud.appwrite.io/v1")
//     .setProject("<67003257000db7f8e9a6>")
//     .setKey("<standard_4db87f8da1037a638b1a5de86fec102da03e067602ff4092e39b93d356dc75f21e54bf94d6f6c60e4034bd0d11e74ba9c879acec2bf27016dd01e023da0b51cc4e281f375b36bf4345539a6e65e728b0f6ebf2632547c7f3e637dfe526d3ead2468a3c0d46965db6306a35f776f14f2bfd799c6db56f38a305fae5f66409a4b8>");

    
        
const account = new Account(client)
const database = new Databases(client)
 
//  створюєм аккаунт користувачц!!!
//  функція реєстрації: визначаємо значення(value) для всього що вводить користувач - імейл, пароль, username
//  event.target.elements['register-email'].value - значення для імейлу 
//  event.target.elements['register-password'].value - значення для паролю 
//  event.target.elements['register-username'].value - значення для юзернейму 
//  щоб взяти їх і створити аккаунт ( account.create(ID.unique() )

function register(event) {
    account.create(
        ID.unique(), // ID це ніштячок з апрайту. внизу перелічуєм з чого буде складатись аккаунт
        event.target.elements['register-email'].value,
        event.target.elements['register-password'].value,
        event.target.elements['register-username'].value,
        //знизу response - ми підєднали відповідь на на консоль, тут це (console.log(response))
    ).then(response => {
        console.log(response)
        database.createDocument(
            databaseId,
            collectionId,
            response.$id,
            {
                "userId": response.$id,
                "highscore": 0
            }
        )


        //створюємо документ в database (emailsession), куди буде заливатись інфа яку ввів користувач і створюватись аккаунт!!!
    account.createEmailSession( 
        event.target.elements['register-email'].value,
        event.target.elements['register-password'].value
    ).then(() => {
        showDisplay() /// після того як ми створил и імейлсесію ми показум дисплей(гру), визначаєм display нижче>>>
    })
}).catch(error => console.error(error))
event.preventDefault() //запобігає тому щоб .form не reload сторінку 
}



function showDisplay() {
    const modalElement = document.getElementById('modal')
    modalElement.classList.add('hidden')
}

showDisplay() 

kaboom({
    global: true,
    fullscreen: true,
    scale: 2
})

//kaboom game
// function startGame() {
//     kaboom({
//         global: true,
//         fullscreen: true,
//         scale: 2
//     }) }

    //speed identifiers
    const moveSpeed = 120
    const jumpForce = 360
    const bigJumpForce = 550
    let currentJumpForce = jumpForce
    const fallDeath = 400
    const enemyDeath = 20



//game_iframe.contentDocument.getElementById('block').style.display = "block";

//gamelogic//
// let isJumping = true

// loadRoot('https://i.imgur.com/')
// loadSprite('coin', 'wbKxhcd.png')
// loadSprite('evil-shroom', 'KPO3fR9.png')
// loadSprite('brick', 'pogC9x5.png')
// loadSprite('block', 'M6rwarW.png')
// loadSprite('mario', 'Wb1qfhK.png')
// loadSprite('mushroom', '0wMd92p.png')
// loadSprite('suprise', 'gesQ1QP.png')
// loadSprite('unboxed', 'bdrLpi6.png')
// loadSprite('pipe-top-left', 'ReTPiWY.png')
// loadSprite('pipe-top-right', 'hj2GK4n.png')
// loadSprite('pipe-bottom-left', 'c1cYSbt.png')
// loadSprite('pipe-bottom-right', 'nqQ79eI.png')
// loadSprite('blue-block', 'fVscIbn.png')
// loadSprite('blue-brick', '3e5YRQd.png')
// loadSprite('blue-steel', 'gqVoI2b.png')
// loadSprite('blue-evil-mushroom', 'SvV4ueD.png')
// loadSprite('blue-suprise', 'RMqCc1G.png')




loadSprite('block', 'block.png')

scene("game", ({ level, score}) => {
    layers(["bg", "obj", "ui"], "obj")
    const maps = [        
        [
            '                                      ',
            '                                      ',
            '                                      ',
            '                                      ',
            '                                      ',
            '                                      ',
            '                                      ',
            '                                      ',
            '                                      ',
            '==============================   ====='
    ],
    [

    ]
]

const levelCfg = {
    width : 20,
    height : 20,
    '=': [sprite('block'), solid()],
}

const gameLevel = addLevel(maps[level], levelCfg)
})

start("game", { level: 0, score: 0 })















