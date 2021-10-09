import Discord from "discord.js";

import { makeListener } from "../utils.js";

import config from "../config/config.json";

async function wave(message: Discord.Message): Promise<void> {
    if (message.content.startsWith(config.prefix) || message.author.bot) return;

    if (!message.mentions.users.has(message.client.user!.id)) return;
    await message.react("👋");
}

export default makeListener({
    name: "wave",
}, "message", wave);
