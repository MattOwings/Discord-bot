const badWords = require('./banned_words')

module.exports = (msg) => {  
    for (i=0; i<badWords.length; i++) {
        if (msg.content.toLowerCase().includes(badWords[i])) {
            msg.delete();
            msg.reply("we do not use that word here! Code: " + [i])
        }
    }
}