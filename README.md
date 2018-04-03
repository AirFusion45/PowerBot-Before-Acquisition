# Power-Bot
Power Bot is a multipurpose discord bot made using [discord.js](https://discord.js.org/). 
Power Bot is now offically in its public test stage.

# Self Hosting PowerBot
You can host PowerBot on a raspberry pi, or web hosting services like AWS or heroku. For this guide, I am only going to go over hosting on a raspberry pi.

  * __**Prerequisites:**__
    * A computer that has command prompt, or terminal access.
    * A computer that have node installed on it, and the ability to install npm modules.
    * Know the basics of how to add a Discord Bot to servers, setup & get tokens, etc.
    
  * __**Instructions:**__
    * Download the PowerBot code from github in a zip, then delete the node modules folder.
    * Unzip the file so its a folder.
    * Head over to Discord's Developer Page [here](https://discordapp.com/developers/applications/me) to register a bot. 
    * After registering a bot, grab the bot's token. This will be used in the next step when the config needs to be filled in. A Discord Bot token should look like this: `<Random Letters & Numbers>.<Random Letters & Numbers>.<Random Letters & Numbers & Characters)`
    * View config (example).json, then create a config.json with all the missing information filled in.
    * Copy the now filled new config.json to all the folders (util folder, events folder & commands folder)
    * Open up a command prompt or terminal, and go to the folder where all the files are (cd <file location>)
    * Then run the following commands:
    ``` 
    npm install // To install all required npm modules
    node . // Start the bot
    ```
    * For a more detailed installlation guide, please refer to this video [here](https://youtu.be/-NqpG_vc9cI).
    * Next, use the Discord Permissions Calculator [here](https://discordapi.com/permissions.html#2146958591) to make your bot invite link. The link provided already has the required permissions pre-checked. If you choose not to use the pre-checked link, the bot must have "ADMINISTRATOR" permissions to function. At the bottom of the page, place in your bot's client ID, which is found on your Discord Developers page.
    * Then, copy the link at the bottom of the page. That is your bot's invite link, anyone who has that link and have "Manage Server" permissions or is the server owner of a server can invite the bot you have just created. 
    * To invite the bot to a server, paste the link in to your browser, and select the server that you want to add the bot to. Make sure all the required permissions are checked, and click "Authorize".
    * You are all set, head to your server and check the bot out!

# Adding PowerBot To Your Discord Server
You can also just add PowerBot to your existing server. PowerBot has been already hosted for you in this option.

  * __**Prerequisites:**__
    * You need to have the "Manage Server" permission of the server __**OR**__ Be the owner of the server.
    * When adding Powerbot, make sure that the bot has "ADMINISTRATOR" permissions on your server.
    * A link is provided [here](https://discordapp.com/oauth2/authorize?client_id=305475826982453250&scope=bot&permissions=2146958591) with all of the required permissions pre-selected.
   
  * __**Bot Operations Guide**__
    * The prefix of PowerBot is `-`.
    * For general help, the support server & additional notes type `-help`.
    * For the full commands list, type `-commands`.
    * Each command is called using the prefix, in the following form: `-<command>` Where <command> is the command. For example, to call the command ping, you would type `-ping`.
    * To check if PowerBot has the correct permissions, just type `-checklist`. If `PowerBot ADMINISTRATOR Permissions:` says `true` then PowerBot has the required permissions to function.
    * Feel free to join [this support server](https://discord.gg/KSjW2wB) if additional help is needed!

# Authors
  * AirFusion45 - Owner

# Contributors 
  * Chroish#4151 (Discord Tag) - First one to start using the bot before beta & numerous bug reports
  * Peter da Best#2547 (Discord Tag) - PowerBot Beta Tester & bug reporter
  * FlubberGhasted#0741 (Discord Tag) - PowerBot Beta Tester & Reported major input bug
  * Alexander#4377 (Discord Tag) - PowerBot Beta Tester & command tester!
  * D A N#7517 (Discord Tag) - PowerBot Beta Tester & requested -wolfram command
  
# License 
This Project is licensed under MIT License - see the LICENSE.md file for more details. The main points of the MIT License are:
  
  * This code can be used commercially
  * This code can be modified
  * This code can be distributed
  * This code can be used for private use
  * This code has no Liability
  * This code has no Warranty
  * When using this code, credit must be given to the author
  
# Credits
Here are credits for all the code I used that was from other repositories.
  * -wolfram command code from chalda's Discord Bot [here](https://github.com/chalda/DiscordBot/).
  * -botinfo command's uptime calculations code & general ideas/inspiration from Dank-Memer's Dank-Memer [here](https://github.com/Dank-Memer/Dank-Memer).
  * Majority of bot structure from AnIdiotsGuide's Tutorial-Bot [here](https://github.com/AnIdiotsGuide/Tutorial-Bot).

# Contact Me
Feel free to contact me if you find bugs, license issues, missing credits, etc. I am currently only giving out my Discord contact information, but feel free to contact me via Discord. If things become complicated, then I will release my email address.

  * Discord Contact Information: Discord Tag: AirFusion™#1243

# Note/Notes 
  When self hosting PowerBot, we recommand downloading the MASTER branch, as that is the latest stable version. 
  The branch DEV is the latest version, which may be unstable.

