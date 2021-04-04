const Discord = require("discord.js");
const client = new Discord.Client();

const password = require("./password.js")

const memberCount = require('./member-count')

const badWords = require('./banned_words')

//console.log("Hello world");

//console.log(badWords[0])


client.on('ready', () => {
    console.log('Logged in as Eyeball Bot');
    client.user.setActivity("on https://discord.gg/KZbyaws8xB");

    memberCount(client)

    client.channels.cache.get("786026453488894004").send("Eyeball Bot has been turned on!");
});




// Basic Moderation Commands

// Deleting Vulgar Chats

client.on('message', msg => {
    if (msg.channel.permissionsFor(msg.guild.me).has('SEND_MESSAGES')) {
        if (msg.channel.permissionsFor(msg.guild.me).has('MANAGE_MESSAGES')) {
            for (i=0; i<badWords.length; i++) {
                if (msg.content.toLowerCase().includes(badWords[i])) {
                    msg.delete();
                    msg.reply("we do not use that word here! Code: " + [i])
                }
            }
        }
    }
});



// Suggestion Command

client.on('message', msg => {
    if (msg.channel.permissionsFor(msg.guild.me).has('SEND_MESSAGES')) {
        if (msg.channel.id === "826966962403147808") {
            console.log("This is the channel the messages are received in, silly.")
        } else {
            if (msg.content.toLowerCase().startsWith("$suggest")) {
                msg.reply("your suggestion has been sent to Eyeball Bot! Thank you for your suggestion!")
                client.channels.cache.get("826966962403147808").send(msg)
            }
        }
    }
})





// ----------------------------------------------------------------------------------
// Various response commands for fun

client.on('message', msg => {
    if (msg.channel.permissionsFor(msg.guild.me).has('SEND_MESSAGES')) {
        if (msg.content.toLowerCase() === 'hello there') {
            msg.channel.send("`General Kenobi`");
        }
        if (msg.content.toLowerCase() === 'where is your master?' || msg.content.toLowerCase() === "where is your master") {
            msg.channel.send("https://tenor.com/view/ahsoka-tano-thrawn-the-mandalorian-star-wars-rosario-dawson-gif-19351958");
            msg.reply("where is Grand Admiral Thrawn?");
        }
        if (msg.content.toLowerCase() === "i don't like sand" || msg.content.toLowerCase() === "i dont like sand") {
            msg.channel.send("`It's coarse, and rough, and irritating, and it gets everywhere`");
        }
        if (msg.content.toLowerCase() === "grogu" || msg.content.toLowerCase() === "baby yoda") {
            msg.channel.send("https://tenor.com/view/mandalorian-baby-yoda-hello-gif-19013340");
        }
        if (msg.content.toLowerCase() === "this is the way") {
            msg.channel.send("https://tenor.com/view/mando-way-this-is-the-way-mandalorian-star-wars-gif-18467370");
            msg.reply("this is the way.")
        }
        if (msg.content.toLowerCase() === "i am iron man") {
            msg.channel.send("https://tenor.com/view/i-am-iron-man-iron-man-avengers-endgame-avengers-endgame-gif-14042823")
            msg.reply("and I... Am... Iron Man!")
        }

        // STAR WARS
        if (msg.content.toLowerCase() === "may the force be with you") {
            msg.channel.send("https://tenor.com/view/sw-starwars-obiwan-obiwankanobi-force-gif-4830507")
            msg.reply("may the force be with you!")
        }
        if (msg.content.toLowerCase() === "yay") {
            msg.channel.send("https://tenor.com/view/baby-yoda-baby-yoda-happy-laughing-smile-happy-gif-16061896")
        }
        if (msg.content.toLowerCase() === "bonk") {
            msg.channel.send("https://tenor.com/view/star-wars-battle-droid-not-the-face-not-the-face-not-the-face-the-bad-batch-gif-19945429")
        }
        
        if (msg.content.toLowerCase() === "good") {
            msg.channel.send("https://tenor.com/view/good-evil-star-wars-emporer-palpatine-darkside-gif-4624104")
        }

        

        // MARVEL
        
        if (msg.content.toLowerCase() === "so you got detention") {
            msg.channel.send("https://tenor.com/view/captain-america-sit-down-patience-gif-14036497")
        }
        if (msg.content.toLowerCase() === "huh") {
            msg.channel.send("https://tenor.com/view/huh-rabbit-cute-gif-15676652")
        }
        
        
        if (msg.content.toLowerCase().includes("wack")) {
            msg.channel.send("https://tenor.com/view/captain-america-endgame-thanos-mcu-marvel-gif-14659947")
        }




        // DC
        if (msg.content.toLowerCase().includes("everyone")) {
            msg.channel.send("https://tenor.com/view/batman-dc-bat-signal-batman-vs-superman-gif-5635050")
        }
        if (msg.content.toLowerCase().includes("we live in a society")) {
            msg.channel.send("https://tenor.com/view/joker-zack-snyders-justice-league-zsjl-gif-20378192")
        }



        // MISC
        if (msg.content.toLowerCase() === "who asked?") {
            msg.channel.send("https://tenor.com/view/me-looking-for-who-tf-asked-looking-around-kid-kazoo-kid-gif-17654948")
            msg.reply("404 person not found")
        }
        
        if (msg.content.toLowerCase() === "dancing kermit") {
            msg.channel.send("https://media.discordapp.net/attachments/767244164312072195/827768640078086144/image0.gif")
        }
    }
});

// ----------------------------------------------------------------------------------





// ----------------------------------------------------------------------------------



// Coin Flip
function GetCoinFlip(max) {
    return Math.floor(Math.random() * Math.floor(max) + 1);
}

client.on('message', (message) => {
    if (message.channel.permissionsFor(message.guild.me).has('SEND_MESSAGES')) {
        if (message.content.toLowerCase() === "$coinflip" || message.content.toLowerCase() === "$flipcoin" || message.content.toLowerCase() === "$coin" || message.content.toLowerCase() === "$flip") {
            
            var RandomNumberCoinFlip = GetCoinFlip(2);

            if (RandomNumberCoinFlip === 1) {
                message.reply("your coin landed on `Heads`");
            } else {
                message.reply("your coin landed on `Tails`");
            }
            //message.channel.send("Command usage ended");
        }
    }
});

// ----------------------------------------------------------------------------------













// ----------------------------------------------------------------------------------
// Automatically Advertise my Twitch with a single command.

client.on('message', (message) => {


    if (message.channel.permissionsFor(message.guild.me).has('SEND_MESSAGES')) {
        if (message.content.toLowerCase() === '$twitch_ping') {
            if (message.author.id === '178124583918895104') {
                if (message.channel.id === '786046081322582098') {

                    message.reply("Sending messages now . . . .");

                    //message.channel.send(`Test ping role: <@&786027558364905483>`);
                    //message.channel.send(`@everyone wassup`)

                    client.channels.cache.get("767244164312072195").send("--> http://www.twitch.tv/MistahEye <--") // Chase's Among Us server
                    client.channels.cache.get("767244164312072195").send("**MistahEye is now live on Twitch!**")


                    client.channels.cache.get("668762754546663442").send("--> http://www.twitch.tv/MistahEye <--") // The G(eyes) General Chat
                    client.channels.cache.get("668762754546663442").send("**MistahEye is now live on Twitch!**")
                    client.channels.cache.get("581122129538580493").send("@everyone <@&581114070053289994> --> http://www.twitch.tv/MistahEye <--") // The G(eyes) Announcement Channel
                    client.channels.cache.get("581122129538580493").send(`**MistahEye is now live on Twitch!**`)

                    client.channels.cache.get("786026453488894004").send("@everyone <@&786044016185442304> --> http://www.twitch.tv/MistahEye <--") // The Eyeball Bot Discord page basic-commands
                    client.channels.cache.get("786026453488894004").send("**MistahEye is now live on Twitch!**")

                    message.reply("Messages sent.")



                } else {
                    message.reply("use the webhook channel in the Eyeball Bot Discord Server.");
                }
            } else {
                message.reply("Only <@&178124583918895104> can use this command!");
            }
        }
    }
});

// ----------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------
// Open a Moderation Ticket with the Moderators of my Discord Server

client.on('message', (message) => {
    if (message.channel.permissionsFor(message.guild.me).has('SEND_MESSAGES')) {
        if(message.content.toLowerCase() === "$ticket") {
            var AnnouncementChatroom = client.channels.cache.get("677945413021728843")
            if (AnnouncementChatroom) { 

                AnnouncementChatroom.send("<@&677662477495828499>" + ", user `" + message.author.tag + "` has opened a request ticket for Moderator assistance in `#" + message.channel.name + "`"); // Message in Mods chatroom

                message.author.send("Hello " + message.author.toString() + "! A ticket has been opened with The G(eyes) Moderation team. One will contact you shortly to address the issue."); // DMs the user

                message.delete(); // Deletes original chat usage
                    
            }
        }
    }
});


// ----------------------------------------------------------------------------------
// $Roll_StarWars Command
client.on('message', message => {
    function RandomWeapon() {
        var Weapons = [ "Blaster Rifle", "Electrostaff", "Carbine Rifle", "Thermal Detonator", "Bowcaster", "Lightsaber", "Flamethrower", "Fist Punch", "Force Choke" ];
        x = Math.floor(Math.random() * Weapons.length);
        //console.log(x);
        return Weapons[x];
    }
    function RandomPlanet() {
        var Planets = [ "Tatooine", "Mustafar", "Lothal", "Mandalore", "Hoth", "Endor", "Bespin", "Naboo", "Dagobah", "Geonosis", "Ryloth", "Nal Hutta", "Corellia", "Coruscant", "Anaxes", "Korriban", "Yavin 4", "Mon Calamari", "the Unknown Regions", "Tython", "Neverro", "Mon Cala" ];
        x = Math.floor(Math.random() * Planets.length);
        //console.log(x);
        return Planets[x];
    }
    function RandomHero() {
        var Heros = [ "Anakin", "Din Djarin", "Cara Dune", "Yoda", "Obi-Wan", "Mace Windu", "Yaddle", "Qui-Gon", "Luke", "Han", "Leia", "Chewbacca", "Rey", "Finn", "Poe", "Ahsoka", "Lando", "Padme", "Baby Yoda", "Kuill", "C3PO", "R2D2", "BB-8", "Jar-Jar", "Jyn Erso", "Saw Gerrera", "Qi'ra", "Cassian Andor"];
        x = Math.floor(Math.random() * Heros.length);
        // console.log(x);
        return Heros[x];
    }
    function RandomVillain() {
        var Villain = [ "Sidious", "Vader", "Maul", "Dooku", "Grievous", "Grand Admiral Thrawn", "Thrawn", "Kylo Ren", "Tarkin", "Asajj Ventress", "Revan", "Boba Fett", "Jango Fett", "Savage", "Nute Gunray", "Jabba the Hutt", "Sebulba", "Cad Bane", "Aurra Sing", "Moff Gideon"];
        x = Math.floor(Math.random() * Villain.length);
        //console.log(x);
        return Villain[x];
    }
    function DefeatedBy() {
        var Defeat = [ "defeats", "is defeated by" ];
        x = Math.floor(Math.random() * Defeat.length);
        //console.log(x);
        return Defeat[x];
    }

    if (message.channel.permissionsFor(message.guild.me).has('SEND_MESSAGES')) {
        if(message.content.toLowerCase() === '$roll starwars') {

            var RWep = RandomWeapon();
            var RPlnt = RandomPlanet();
            var RHero = RandomHero();
            var RViln = RandomVillain();
            var Defeat = DefeatedBy();

            message.channel.send(message.author.toString() +  " ``Using a " + RWep + ", " + RHero + " " + Defeat + " " + RViln + " on " + RPlnt + "``" );
        }
    }

    
    
});

// ----------------------------------------------------------------------------------














client.login(password);