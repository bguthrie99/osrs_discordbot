const discord = require ('discord.js');
const pvm = require('./pvm');
var client = new discord.Client();

const token = "insert bot token here";
const tob_emoji = ["749294214222839913", "749294214059262064", "749294214046679151", "749294214155599962", "749294214063325265", "749294214151667823", "749294214097141801", "749294213962793052"];
const cox_emoji = ["749347575139795045", "749347574946857070", "749347575081205810", "749347575156572241", "749347575076880461", "749347575093526528", "749347574934274130", "749347574703587359", "749347575009771531", "749347574967697459", "749347574963634289", "749347574997319781", "749347574669901937"]
const nm_emoji = ["749367247008432188", "749367246958100590", "749367246983266346", "749367246983266336", "749367246996111551", "749367246987591700", "749367246991786004", "749367246912225342", "749367247021277204", "749367246593458347"]

client.on("ready", () =>{
    console.log("Bot is ready.");
    client.user.setActivity("Playing OSRSBot with JS!");
})

function emoji (id){
    return client.emojis.cache.get(id).toString();
}


const prefix = ".";
client.on("message", message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    if(command === "kill")
    {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
        else if(args.length == 1 && args[0] != "help"){
            return message.channel.send(`You must specify the boss then amount, ${message.author}!`);
        }
        else if(args[0] == "help")
        {
            return message.channel.send(`Current supported bosses: tob, cox, nm, ${message.author}!`);
        }
        else if(args.length == 2 && args[0] == 'cox'){
            var cox_result = pvm.cox(args[1]);
                return message.channel.send(emoji(cox_emoji[0]) + ": " + cox_result[0] + "\n" 
                + emoji(cox_emoji[1]) + ": " + cox_result[1] + "\n" 
                + emoji(cox_emoji[4]) + ": " + cox_result[7] + "\n" 
                + emoji(cox_emoji[3]) + ": " + cox_result[6] + "\n" 
                + emoji(cox_emoji[2]) + ": " + cox_result[5] + "\n" 
                + emoji(cox_emoji[5]) + ": " + cox_result[2] + "\n" 
                + emoji(cox_emoji[6]) + ": " + cox_result[3] + "\n" 
                + emoji(cox_emoji[7]) + ": " + cox_result[4] + "\n" 
                + emoji(cox_emoji[8]) + ": " + cox_result[8] + "\n" 
                + emoji(cox_emoji[9]) + ": " + cox_result[10] + "\n" 
                + emoji(cox_emoji[10]) + ": " + cox_result[9] + "\n" 
                + emoji(cox_emoji[11]) + ": " + cox_result[11] + "\n" 
                + emoji(cox_emoji[12]) + ": " + cox_result[12]);
            }
        else if(args.length == 2 && args[0] == 'tob'){
            var tob_result = pvm.tob(args[1]);
                return message.channel.send(emoji(tob_emoji[1]) + ": " + tob_result[0] + "\n" 
                + emoji(tob_emoji[4]) + ": " + tob_result[1] + "\n" 
                + emoji(tob_emoji[2]) + ": " + tob_result[2] + "\n" 
                + emoji(tob_emoji[3]) + ": " + tob_result[6] + "\n" 
                + emoji(tob_emoji[7]) + ": " + tob_result[3] + "\n" 
                + emoji(tob_emoji[6]) + ": " + tob_result[4] + "\n" 
                + emoji(tob_emoji[5]) + ": " + tob_result[5] + "\n" 
                + emoji(tob_emoji[0]) + ": " + tob_result[7] + "\n");
            }
            else if(args.length == 2 && args[0] == 'nm'){
            var nm_result = pvm.nightmare(args[1]);
                return message.channel.send(emoji(nm_emoji[0]) + ": " + nm_result[0] + "\n" 
                + emoji(nm_emoji[1]) + ": " + nm_result[1] + "\n" 
                + emoji(nm_emoji[2]) + ": " + nm_result[2] + "\n" 
                + emoji(nm_emoji[3]) + ": " + nm_result[3] + "\n" 
                + emoji(nm_emoji[4]) + ": " + nm_result[4] + "\n" 
                + emoji(nm_emoji[5]) + ": " + nm_result[6] + "\n" 
                + emoji(nm_emoji[6]) + ": " + nm_result[7] + "\n" 
                + emoji(nm_emoji[7]) + ": " + nm_result[5] + "\n"
                + emoji(nm_emoji[8]) + ": " + nm_result[8] + "\n"
                + emoji(nm_emoji[9]) + ": " + nm_result[9] + "\n");
                }
            }
        }
    
)

client.login(token);
