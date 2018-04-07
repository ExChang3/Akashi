import Akashi from "./Akashi";

if (!process.env.TOKEN) throw new Error("No token specified");

const bot = new Akashi({
    token: process.env.TOKEN,
    prefixes: ["a!"]
});

bot.connect().catch(console.error);

