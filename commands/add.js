exports.run = function (client, message, args, args2, cmd) {
        const Discord = require('discord.js');
        const config = require("./config.json");
        const embed = new Discord.RichEmbed()
                .setColor("#f0ffff")
                .setDescription("**Command: **" + `${config.prefix}add`)
                .addField("**Usage:**", `${config.prefix}add <first number> <second number>`)
                .addField("**Example:**", `${config.prefix}add 1 2`)
                .addField("**Expected Result From Example:**", "3")
        if (args == "" || args2 == "") return message.channel.send({ embed: embed })
        let numArray = args.map(n => parseInt(n));
        let total = numArray.reduce((p, c) => p + c);

        message.channel.send(total);
};