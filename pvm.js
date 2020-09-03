
function cox(numsimulated){
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
    var onyx=0;
    for(j = 0; j < numsimulated; j++)
    {
        var cox_purpleChance = Math.floor(Math.random() * 11);
        var onyx_chance = Math.floor(Math.random() * 450) + 1;
        if(onyx_chance == 1){
            onyx++;
        }
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
    return [arcane, dex, buckler, dhcb, dinhs, anc_bot, anc_top, anc_hat, dragonclaws, kodai, eldermaul, twistedbow, onyx, olmlet];
}

function tob(numsimulated){
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
    for(i = 0; i < numsimulated; i++)
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
    return [scythe_c, rapier_c, sang_c, face_c, chest_c, leg_c, avernic_c, zik_c];
}

function nightmare(numsimulated){
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
    for(k=0; k < numsimulated; k++){
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
    
    return [inq_mace, inq_helm, inq_hauberk, inq_skirt, nightmare_staff, volatile_orb, eldritch_orb, harmonised_orb, nightmare_pet, nm_jar];
}
  
function corp(numsimulated){
    var spectral=0;
    var arcane=0;
    var elysian=0;
    var pet=0;
    for(i = 0; i < numsimulated; i++)
    {
        var sigilTable = Math.floor(Math.random() * 585) + 1;
        var petRoll = Math.floor(Math.random() * 5000) + 1;
        if(sigilTable == 1){
                var sigilSelect = Math.floor(Math.random() * 7) + 1;
                if(sigilSelect == 1){
                    elysian++;
                }
                else if (sigilSelect > 1 && sigilSelect < 5){
                    arcane++;
                }
                else if(sigilSelect >= 5  && sigilSelect < 8){
                    spectral++;
                }
        }
        if(petRoll == 1){
            pet++;
        }
    }
    return [spectral, arcane, elysian, pet];
}

function gauntlet(numsimulated){
    var crystalShard=0;
    var crystalWepSeed=0;
    var crystalArmorSeed=0;
    var blade=0;
    var pet=0;
    for(i=0 ; i < numsimulated; i++){
        var petRoll = Math.floor(Math.random() * 2000) + 1;
        if(petRoll == 1){
            pet++;
        }
        var uniqueRoll = Math.floor(Math.random() * 2000) + 1;
        if(uniqueRoll == 1){
            blade++;
        }
        else if(uniqueRoll >= 2 && uniqueRoll < 18){
            crystalWepSeed++;
        }
        else if(uniqueRoll >= 18 && uniqueRoll < 34){
            crystalArmorSeed++;
        }
        crystalShard += Math.floor(Math.random() * 7) + 1;
    }
    return [crystalShard, crystalWepSeed, crystalArmorSeed, blade, pet];
}


  module.exports = { cox, tob, nightmare, corp, gauntlet }