require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });
const app = express();
const { url } = require('url');

// Настройка middleware для обработки JSON
app.use(bodyParser.json());

// Обработка всех текстовых сообщений
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id; // Получаем ID пользователя

    sendMessageWithWebAppButton(chatId, userId); // Отправляем сообщение с кнопкой
});

function sendMessageWithWebAppButton(chatId, userId) {
    const options = {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Открыть приложение',
                        web_app: { url: `https://neboseveraclicker.na4u.ru/?telegramId=${userId}` } // Замените на ваш URL
                    }
                ]
            ]
        }
    };

    bot.sendMessage(chatId, 'Нажмите кнопку для открытия веб-приложения:', options);
}

// Логирование ошибок
bot.on("polling_error", (error) => {
    console.log(error); // Вывод ошибок в консоль
});

// Запускаем сервер
const PORT = process.env.APP_PORT || 4000;
app.listen(PORT, () => {
    console.log(`Сервер бота запущен на порту ${PORT}`);
});