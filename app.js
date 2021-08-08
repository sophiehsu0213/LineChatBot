const express = require('express');
const app = express();
const linebot = require('linebot');// 判別開發環境
if (process.env.NODE_ENV !== 'production') {      // 如果不是 production 模式
 require('dotenv').config()                      // 使用 dotenv 讀取 .env 檔案
}const bot = linebot({
 channelId: process.env.CHANNEL_ID,
 channelSecret: process.env.CHANNEL_SECRET,
 channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
});
var words = "";
function findWords(term){
  return words.include(term);
}
const linebotParser = bot.parser();bot.on('message', function (event) {
  words = event.message.text;
 console.log(event);
 if(findWords('你')){
   event.reply('你是誰?我是誰?誰又知道呢?')
 }else{
   event.reply('無法辨識');
 }
 /*
 switch (event.message.text) {
   case '你':
     event.reply('你是誰?我是誰?誰又知道呢?')
     break
   case 'hi':
     event.reply('hi!很高興看到你!來跟我聊天吧!')
     break
   case 'hello':
     event.reply('哈囉!很高興看到你!來跟我聊天吧!')
     break
   case '天氣':
     event.reply('今天天氣依舊如此美好，就如同我的心情:)')
     break
   case '聽說':
     event.reply('什麼????')
     break
   case '問':
     event.reply('駭客都是自學的，自己去查')
     break
   case '說':
     event.reply('說什麼說，不要再說了，等吃飽再說吧！')
     break
   case '名字':
     event.reply('我是河豚，你叫什麼?')
     break
   case '排球':
     event.reply('一萬超愛排球少年！')
     break
   default:
     event.reply('偶不知道你在說啥，不過你可以繼續說:)')
 }*/
});app.post('/', linebotParser);app.listen(process.env.PORT || 3000, () => {
 console.log('Express server start')
});
