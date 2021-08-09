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
  return words.includes(term);
}
const linebotParser = bot.parser();bot.on('message', function (event) {
  words = event.message.text;
 console.log(event);
 if(findWords('你是')){
   event.reply('你是誰?我是誰?誰又知道呢?')
 }else if(findWords('hi')||findWords('嗨')){
   event.reply('hi!很高興看到你!來跟我聊天吧!')
 }else if(findWords('hello')){
   event.reply('哈囉!很高興看到你!來跟我聊天吧!')
 }else if(findWords('天氣')){
   event.reply('今天天氣依舊如此美好，就如同我的心情:)')
 }else if(findWords('聽說')){
   event.reply('什麼????')
 }else if(findWords('問')){
   event.reply('駭客都是自學的，自己去查')
 }else if(findWords('說')){
   event.reply('說說說就你最吵')
 }else if(findWords('名字')||findWords('你叫')){
   event.reply('我是河豚，你叫什麼?')
 }else if(findWords('排球')){
   event.reply('一萬超愛排球少年！')
 }else if(findWords('我')&&findWords('傷心') || findWords('傷心')){
   event.reply('不要傷心啦！打起精神來!你最棒的!')
 }else if(findWords('我叫')||findWords('我是')){
   event.reply('嗨!很高興認識你!')
 }else if(findWords('開心')){
   event.reply('耶依~')
 }else if(findWords('笑')|| findWords('哈')){
   event.reply('哈哈哈笑死XDDD')
 }else if(findWords('哪個')|| findWords('選')){
   event.reply('都可以ㄅ')
 }else if(findWords('為什麼')|| findWords('為啥')){
   event.reply('阿災，不過我可以幫你查查看')
   event.reply('https://www.google.com/search?q=' + words)
 }else if(findWords('不要')|| findWords('不')){
   event.reply('誰管你;))))))')
 }else{
   event.reply('偶不知道你在說啥，不過你可以繼續說:)')
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
