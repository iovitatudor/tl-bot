const TelegramBot = require('node-telegram-bot-api');

const token = "6894605231:AAHhMrGjVjcHCtEdVda9308cvYt6s2sWmvc";
const bot = new TelegramBot(token, {polling: true});
const timeTG = "https://front.time.cheap";

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const message = msg.text;
    if (message === "/start") {
        await bot.sendMessage(chatId, "TimeCoin Lottery", {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'Go to TimeCoin Lottery', web_app: {url: timeTG}}]
                ],
            }
        })

        await bot.sendMessage(chatId, "/start", {
            reply_markup: {
                keyboard: [
                    [{text: '/start'}],
                ]
            }
        })
    }
});
