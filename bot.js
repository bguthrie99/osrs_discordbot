const discord = require ('discord.js');
var client = new discord.Client();

const token = "NzQ5MjU0ODQwNjI2MDUzMTMw.X0pT8g.3g6pfrsK48zveHJCt_zcwREsSY8";
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

    if(command == "image")
    {
        message.channel.send(emoji(cox_emoji[2]));
    }

    else if(command === "kill")
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
            var arcane = 0;
            var dex = 0;
            var anc_bot = 0;
            var anc_top = 0;
            var anc_hat = 0;
            var buckler = 0;
            var dhcb = 0;
            var dinhs = 0;
            var dragonclaws = 0;
            var eldermaul = 0;
            var kodai = 0;
            var twistedbow = 0;
            var olmlet = 0;
            var olmlet_rng = 0;
            var j=0;
            for(j = 0; j < args[1]; j++)
            {
                var cox_purpleChance = Math.floor(Math.random() * 11);
                if(cox_purpleChance == 1)
                {
                    var cox_rng = 0;
                    cox_rng = Math.floor(Math.random() * 69);  
                    if(cox_rng >= 0 && cox_rng < 20){
                        arcane++;
                    }
                    else if(cox_rng >= 20 && cox_rng < 40){
                        dex++;
                    }
                    else if(cox_rng >= 40 && cox_rng < 44){
                        buckler++;
                    }
                    else if(cox_rng >= 44 && cox_rng < 48){
                        dhcb++;
                    }
                    else if(cox_rng >= 48 && cox_rng < 51){
                        dinhs++;
                    }
                    else if(cox_rng >= 51 && cox_rng < 54){
                        anc_bot++;
                    }
                    else if(cox_rng >= 54 && cox_rng < 57){
                        anc_top++;
                    }
                    else if(cox_rng >= 57 && cox_rng < 60){
                        anc_hat++;
                    }
                    else if(cox_rng >= 60 && cox_rng < 63){
                        dragonclaws++;
                    }
                    else if(cox_rng >= 63 && cox_rng < 65){
                        kodai++;
                    }
                    else if(cox_rng >= 65 && cox_rng < 67){
                        eldermaul++;
                    }
                    else if(cox_rng >= 67 && cox_rng < 69){
                        twistedbow++;
                    }
                    olmlet_rng = Math.floor(Math.random() * 53);
                    if(olmlet_rng == 0){
                        olmlet++;
                    }
                    cox_rng = 0;
                }
            }
            if(arcane > 0){
                message.channel.send("Arcane Prayer Scroll: " + arcane + " " + emoji(cox_emoji[0]));
            }
            if(dex > 0){
                message.channel.send("Dextereous Prayer Scroll: " + dex + " " + emoji(cox_emoji[1]));
            }
            if(anc_hat > 0){
                message.channel.send("Ancestral Hat: " + anc_hat + " " + emoji(cox_emoji[4]));
            }
            if(anc_top > 0){
                message.channel.send("Ancestral Top: " + anc_top + " " + emoji(cox_emoji[3]));
            }
            if(anc_bot > 0){
                message.channel.send("Ancestral Bottom: " + anc_bot + " " + emoji(cox_emoji[2]));
            }
            if(buckler > 0){
                message.channel.send("Twisted Buckler: " + buckler + " " + emoji(cox_emoji[5]));
            }
            if(dhcb > 0){
                message.channel.send("Dragon Hunter Crossbow: " + dhcb + " " + emoji(cox_emoji[6]));
            }
            if(dinhs > 0){
                message.channel.send("Dinh's Bulwark: " + dinhs + " " + emoji(cox_emoji[7]));
            }
            if(dragonclaws > 0){
                message.channel.send("Dragon Claws: " + dragonclaws + " " + emoji(cox_emoji[8]));
            }
            if(eldermaul > 0){
                message.channel.send("Elder Maul: " + eldermaul + " " + emoji(cox_emoji[9]));
            }
            if(kodai > 0){
                message.channel.send("Kodai Insignia: " + kodai + " " + emoji(cox_emoji[10]));
            }
            if(twistedbow > 0){
                message.channel.send("Twisted Bow: " + twistedbow + " " + emoji(cox_emoji[11]));
            }
            if(olmlet > 0){
                message.channel.send("Olmlet: " + olmlet + " " + emoji(cox_emoji[12]));
            }
            return;
            }
            else if(args.length == 2 && args[0] == 'tob'){
                var scythe_c = 0;
                var rapier_c = 0;
                var sang_c = 0;
                var face_c = 0;
                var chest_c = 0;
                var leg_c = 0;
                var avernic_c = 0;
                var i=0;
                var zikrng=0;
                var zik_c=0;
                for(i = 0; i < args[1]; i++)
                {
                    var purpleChance = Math.floor(Math.random() * 11) + 1;
                    if(purpleChance == 1)
                    {
                        var rng = 0;
                        rng = Math.floor(Math.random() * 19);  
                        if(rng == 0){
                            scythe_c = scythe_c + 1;
                        }
                        else if(rng == 1 || rng == 2){
                            rapier_c = rapier_c + 1;
                        }
                        else if(rng == 3 || rng == 4){
                            sang_c = sang_c + 1;
                        }
                        else if(rng == 5 || rng == 6){
                            face_c = face_c + 1;
                        }
                        else if(rng == 7 || rng == 8){
                            chest_c = chest_c + 1;
                        }
                        else if(rng == 9 || rng == 10){
                            leg_c = leg_c + 1;
                        }
                        else{
                            avernic_c = avernic_c + 1;
                        }
                        rng = 0;
                    }
    
                    zikrng = Math.floor(Math.random() * 650);    
                    if(zikrng == 1){
                        zik_c = zik_c + 1;
                    }
                }
                if(scythe_c > 0){
                    message.channel.send("Scythe: " + scythe_c + " " + emoji(tob_emoji[1]));
                }
                if(rapier_c > 0){
                    message.channel.send("Rapier: " + rapier_c + " " + emoji(tob_emoji[4]));
                }
                if(sang_c > 0){
                    message.channel.send("Sang: " + sang_c + " " + emoji(tob_emoji[2]));
                }
                if(avernic_c > 0){
                    message.channel.send("Avernic: " + avernic_c + " " + emoji(tob_emoji[3]));   
                }
                if(face_c > 0){
                    message.channel.send("Faceguard: " + face_c + " " + emoji(tob_emoji[7]));
                }
                if(chest_c > 0){
                    message.channel.send("Chestguard: " + chest_c + " " + emoji(tob_emoji[6])); 
                }
                if(leg_c > 0){
                    message.channel.send("Legguards: " + leg_c + " " + emoji(tob_emoji[5]));
                }
                if(zik_c > 0){
                    message.channel.send("Lil' Zik: " + zik_c + " " + emoji(tob_emoji[0]));   
                }
                return;
            }
            else if(args.length == 2 && args[0] == 'nm'){
                var inq_mace=0;
                var inq_helm=0;
                var inq_hauberk=0;
                var inq_skirt=0;
                var nightmare_staff=0;
                var harmonised_orb=0;
                var volatile_orb=0;
                var eldritch_orb=0;
                var nm_jar=0;
                var nightmare_pet=0;
                var k=0;
                for(k=0; k < args[1]; k++){
                    var nm_table1 = Math.floor(Math.random() * 120);
                    if(nm_table1 == 0){
                        var inq_chance = Math.floor(Math.random() * 24)
                        if(inq_chance >= 0 && inq_chance < 3){
                            inq_mace++;
                        }
                        if(inq_chance >= 3 && inq_chance < 8){
                            inq_helm++;
                        }
                        if(inq_chance >= 8 && inq_chance < 13){
                            inq_hauberk++;
                        }
                        if(inq_chance >= 13 && inq_chance < 18){
                            inq_skirt++;
                        }
                        if(inq_chance >= 18 && inq_chance < 24){
                            nightmare_staff++;
                        }
                        inq_chance = 0;
                    }
                    var nm_table2 = Math.floor(Math.random() * 600);
                    if(nm_table2 == 0){
                        var orb_chance = Math.floor(Math.random() * 3);
                        if(orb_chance == 0){
                            volatile_orb++;
                        }
                        if(orb_chance == 1){
                            eldritch_orb++;
                        }
                        if(orb_chance == 2){
                            harmonised_orb++;
                        }
                        orb_chance = 0;
                    }
                    nm_table1 = 0;
                    nm_table2 = 0;

                    var nm_petroll = Math.floor(Math.random() * 3800);
                    var nm_jarroll = Math.floor(Math.random() * 2000);

                    if(nm_petroll == 0){
                        nightmare_pet++;
                    }
                    if(nm_jarroll == 0){
                        nm_jar++;
                    }
                    nm_petroll = 0;
                    nm_jarroll = 0;


                }
                if(inq_mace > 0){
                    message.channel.send("Inquisitor's Mace: " + inq_mace + " " + emoji(nm_emoji[0]));
                }
                if(inq_helm > 0){
                    message.channel.send("Inquisitor's great helm: " + inq_helm + " " + emoji(nm_emoji[1]));
                }
                if(inq_hauberk > 0){
                    message.channel.send("Inquisitor's hauberk: " + inq_hauberk + " " + emoji(nm_emoji[2]));
                }
                if(inq_skirt > 0){
                    message.channel.send("Inquisitor's plateskirt: " + inq_skirt + " " + emoji(nm_emoji[3]));
                }
                if(nightmare_staff > 0){
                    message.channel.send("Nightmare staff: " + nightmare_staff + " " + emoji(nm_emoji[4]));
                }
                if(eldritch_orb > 0){
                    message.channel.send("Eldritch orb: " + eldritch_orb + " " + emoji(nm_emoji[5]));
                }
                if(harmonised_orb > 0){
                    message.channel.send("Harmonised orb: " + harmonised_orb + " " + emoji(nm_emoji[6]));
                }
                if(volatile_orb > 0){
                    message.channel.send("Volatile orb: " + volatile_orb + " " + emoji(nm_emoji[7]));
                }
                if(nightmare_pet > 0){
                    message.channel.send("Little nightmare: " + nightmare_pet + " " + emoji(nm_emoji[8]));
                }
                if(nm_jar > 0){
                    message.channel.send("Jar of dreams: " + nm_jar + " " + emoji(nm_emoji[9]));
                }
            }
        }
    }
)

client.login(token);