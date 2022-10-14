const { fetch } = require("undici");

const TOKEN = "NzY4MTgxMjc3ODE0Njg1NzA2.GNiFRJ._nNwuiuQAgBl6jeGBok4_TGmxKxdHvgz9hZ6eE";
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