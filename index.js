const { fetch } = require("undici");
const DotEnv = require("dotenv");

DotEnv.config();

const TOKEN = process.env.TOKEN;
const CHANNEL_ID = "883531056660221955";

async function visualTyping(token, channelId) {

    await fetch(`https://discord.com/api/v9/channels/${channelId}/typing`, {
        "headers": {
            "authorization": token
        },
        "body": null, 
        "method": "POST"
    });

}

setInterval(() => {
    visualTyping(TOKEN, CHANNEL_ID).then();
}, 8000);
