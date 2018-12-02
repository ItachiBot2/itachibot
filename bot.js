const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(process.env.NTE4NDg0ODI0NTc1NTc0MDU2.DuRcfw.9DgldnLwJGLvYCiFzl82OerBQUM);

client.on("ready", () => {
  console.log("Je suis prêt !")
  client.user.setGame("bot personnel de Dream'S");
});

var prefix = "*";
client.on ('message' , message => {
  if(message.content === "salararius"){
    message.reply("A la recherche de couilles sur LeBonCoin");
    console.log('Le bot dit salararius');
  }
  if(message.content === "lesoso"){
    message.reply("Il a combien de doubles comptes ?");
    console.log('Le bot dit lesoso');
  }
  if(message.content === "Bonjour"){
    message.reply("Au revoir ");
    console.log('Le bot dit au revoir');
  }
  if(message.content === "tg"){
    message.reply("On dit pas ça ! C'est pas gentil");
    console.log('Le bot dit tg');
  }
  if(message.content === "deadman"){
    message.reply("Le Nécromancien et aussi le père de Dream'S");
    console.log('Le bot dit deadman');
  }
  if(message.content === "zarkess"){
    message.reply("Dictateur pas très gentil de la faction, n'aime que lui");
    console.log('Le bot dit zarkess');
  }
  if(message.content === "emma"){
    message.reply("Meilleure amie de Dream'S même si en vrai je préfère Charlène");
    console.log('Le bot dit emma');
  }
  if(message.content === "Au revoir"){
    message.reply("Bonjour");
    console.log('Le bot dit au revoir');
  }
  if(message.content === "nansou"){
    message.reply("Nansou alias Nans mon petit chou,recruté en même temps que Dream'S");
    console.log('Le bot dit nansou');
  }
  if(message.content === "lord"){
    message.reply("Lord le psycologue personnel de Dream'S et de toute les personnes possibles et imaginables");
    console.log('Le bot dit lord');
  }
  if(message.content === "aigul"){
    message.reply("Aigul le petit Meliodas de Dream'S");
    console.log('Le bot dit aigul');
  }
  if(message.content === "fdp"){
    message.reply("PAS LES MAMANS TU TE CALME DIRECT MICHELINE !");
    console.log('Le bot dit fdp');
  }
  if(message.content === "charlene"){
    message.reply("Meilleure amie de Dream'S même si en vrai je préfère Emma");
    console.log('Le bot dit charlene');
  }
  if(message.content === "matte"){
    message.reply("Conseiller de la faction, inutile et tente de coder déséspérément son propre bot personnel");
    console.log('Le bot dit charlene');
  }
  
 if(message.content === prefix + "help"){
    var help_embed = new Discord.RichEmbed()
    .setColor("#FF66CC")
    .setTitle("Voici mes commandes d'aide!")
    .setDescription("Je suis Itachi le Bot de Dream'S voici mes commandes")
    .addField("*help", "Affiche les commandes du bot" )
    .addField("Bonjour", "Le bot réponds" )
    .addField("*lgdn", "Affiche les descriptions disponibles pour La garde de Nuit")
    .addField("*nightdemon","Affiche les descrptions disponibles pour la nightdemon")
    .addField("*aiscord","Affiche les descriptions disponibles pour le Aiscord ")
    .addField("*objectifs","Affiche la liste des objectifs")
    .setFooter("Menu d'aide - Tuto")
    message.channel.sendMessage(help_embed);
    console.log("Un utilisateur a effectué la commande d'aide")
   }

  if(message.content === prefix + "lgdn"){
    var descriptions_lgdn = new Discord.RichEmbed()
    .setColor("#C2F732")
    .setTitle("Voici les decriptions disponibles pour chaque personne!")
    .setDescription("Si vous voulez être ajoutés go mp Dream'S")
    .addField("LeSoso", "lesoso")
    .addField("Salararius","salararius")
    .addField("Deadman","deadman")
    .addField("Zarkess","zarkess")
    .addField("Emma","emma")
    .addField("Nansou","nansou")
    .addField("Charlène","charlene")
    .addField("Sateenah","matte")
    .setFooter("Selection des pseudos")
    message.channel.sendMessage(descriptions_lgdn);
    console.log("Un utilisateur à regardé une decription")
  }
  if(message.content === prefix + "nightdemon"){
    var descriptions_nightdemon = new Discord.RichEmbed()
    .setColor("#C2F732")
    .setTitle("Voici les decriptions disponibles pour chaque personne!")
    .setDescription("Si vous voulez être ajoutés go mp Dream'S")
    .addField("LordProtos","lord")
    .setFooter("Selection des pseudos")
    message.channel.sendMessage(descriptions_nightdemon);
    console.log("Un utilisateur à regardé une decription")
  }
  if(message.content === prefix + "aiscord"){
    var descriptions_aiscord = new Discord.RichEmbed()
    .setColor("#C2F732")
    .setTitle("Voici les decriptions disponibles pour chaque personne!")
    .setDescription("Si vous voulez être ajoutés go mp Dream'S")
    .addField("Aigul","aigul")
    .setFooter("Selection des pseudos")
    message.channel.sendMessage(descriptions_aiscord);
    console.log("Un utilisateur à regardé une decription")
  }
  if(message.content === prefix + "objectifs"){
    var liste_objectifs = new Discord.RichEmbed()
    .setColor("#1FFED8")
    .setTitle("Choississez la catégorie de membres")
    .setDescription("Haut Gradés : Leader, Sous Chef et Officiers")
    .addField("*hautgrades","Affiche la liste des hauts gradés")
    .addField("*membres","Affiche la liste des membres")
    .setFooter("Selection des pseudos")
    message.channel.sendMessage(liste_objectifs);
    console.log("Un utilisateur à regardé la liste des objectifs")
  }
  if(message.content === prefix + "hautgrades"){
    var liste_hautgrades = new Discord.RichEmbed()
    .setColor("#FF0033")
    .setTitle("Voilà la liste des Haut Gradés et leurs objectifs actuellement remplis")
    .setDescription("Objectifs")
    .addField("Zarkess","4 stacks de blocs de paladium,83stacks de slimepads")
    .addField("Deadman36912","30 stacks de slimepads,404 sceaux de fake.")
    .addField("DreamZay_","2 stacks de slimespads, 100 sceaux de fake.")
    .addField("LeVapeDePanda","Pas d'objectifs.")
    .addField("ConvertisseurYtb","Pas d'objectifs.")
    .addField("AlmaBlaZz","Pas d'objectifs.")
    .addField("Xraider91","400sceaux de fake,3stacks de slimepads")
    .addField("Takeshi59","takechi a donner 510 seau de fake,150skipe en pala,226 enclume,10k de sable,22,6k d'obsi")
    .setFooter("Objectifs semaine 27.11 au 2.12")
    message.channel.sendMessage(liste_hautgrades);
    console.log("Un utilisateur à regardé la liste des haut gradés")
  }
  if(message.content === prefix + "membres"){
    var liste_membres = new Discord.RichEmbed()
    .setColor("#CCCC00")
    .setTitle("Voilà la liste des Membres et leurs objectifs actuellement remplis")
    .setDescription("Objectifs")
    .addField("LeSoSo","1650/15k de cobble450k,pour slim pad")
    .addField("Salararius","3stack de spike,2 stack de slim pad,100 000 pour slim pad")
    .addField("Nansou","6 stack de slim pad,200 seau de fake ,100000 pour slim pad ,2000 obsi")
    .addField("CraZzy_M","Pas d'objectifs")
    .addField("Shad16","Pas d'objectifs")
    .addField("SpotyFer","Pas d'objectifs")
    .addField("Colibri_Lunaire","Pas d'objectifs")
    .addField("Maskafaz","2stack de slim pad")
    .addField("zorglub66666","150k pour la faction")
    .addField("dadsmind","Pas d'objectifs")
    .addField("ersatzdragon9","64 seau de fake")
    .addField("NyTsuKo","Pas d'objectifs")
    .addField("Yoshines","9 stack de slim pad,2100 seau de fake,3 sttacks de cobblebreakers")
    .addField("_Urazox","Pas d'objectifs")
    .addField("Maxiralpha","200 sceaux de fake, 2048 obsidiennes,2 stacks d'obsidienne")
    .addField("MisterandMiss","Pas d'objectifs")
    .addField("NewOrizon","Pas d'objectifs")
    .setFooter("Objectifs")
    message.channel.sendMessage(liste_membres);
    console.log("Un utilisateur à regardé la liste des membres")
  }
  if(message.content === prefix + "absence"){
    var liste_absence = new Discord.RichEmbed()
    .setColor("#003300")
    .setTitle("Choississez la catégorie de membres")
    .setDescription("Absences en cours")
    .addField("*abshg","Affiche la liste des absences hauts gradés")
    .addField("*absmbr","Affiche la liste des membres")
    .setFooter("Selection des pseudos")
    message.channel.sendMessage(liste_absence);
    console.log("Un utilisateur à regardé la liste des absences")
  }
  if(message.content === prefix + "abshg"){
    var liste_abshg = new Discord.RichEmbed()
    .setColor("#000000")
    .setTitle("Voilà la liste des absences des haut gradés")
    .setDescription("Absences")
    .addField("Zarkess","Pas d'absence")
    .addField("Deadman36912","Pas d'absence")
    .addField("DreamZay_","Pas d'absence")
    .addField("LeVapeDePanda","Pas d'absence")
    .addField("ConvertisseurYtb","Pas d'absence")
    .addField("AlmaBlaZz","Pas d'absence")
    .addField("Xraider91","Pas d'absence")
    .addField("Takeshi59","Pas d'absence")
    .setFooter("Absences en cours")
    message.channel.sendMessage(liste_abshg);
    console.log("Un utilisateur à regardé la liste des absences haut gradés")
  }
  if(message.content === prefix + "absmbr"){
    var liste_absmbr = new Discord.RichEmbed()
    .setColor("#FFFFFF")
    .setTitle("Voilà la liste des absences en cours pour les membres")
    .setDescription("Absences en cours")
    .addField("LeSoSo","Pas d'absence")
    .addField("Salararius","Pas d'absence")
    .addField("Nansou","Pas d'absence")
    .addField("CraZzy_M","Absent ce Week end,donne les objectifs Lundi")
    .addField("Shad16","Indeterminee,déménagement,marre de paladium")
    .addField("SpotyFer","Pas d'absence")
    .addField("Colibri_Lunaire","Indeterminee,degout de pala,inactif discord et ingame")
    .addField("Maskafaz","Indeterminee,marre de paladium")
    .addField("zorglub66666","Pas d'absence")
    .addField("dadsmind","Pas d'absence")
    .addField("ersatzdragon9","Pas d'absence")
    .addField("NyTsuKo","Pas de Pc jusqu'au 15 janvier")
    .addField("Yoshines","Pas d'absence")
    .addField("_Urazox","Du 27novembre au 17 decembre,examens,moins present")
    .addField("Maxiralpha","Pas d'absence")
    .addField("MisterandMiss","problemes familiaux,indeterminee")
    .addField("NewOrizon","Pas d'absence")
    .setFooter("Absences")
    message.channel.sendMessage(liste_membres);
    console.log("Un utilisateur à regardé la liste des absences membres")
  }
  });
