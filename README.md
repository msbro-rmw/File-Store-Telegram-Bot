# File-Store Telegram Bot (Updated) 🤖

Original file-store bot + **PW Live System integration**.

## Kya naya hai

`/start <token>` pe ab bot pehle `lectures` collection check karta hai:

- **Token mila + status READY** → saved `telegram_file_id` se **turant video** bhejta hai (dobara upload nahi hota).
- **Token mila + abhi PROCESSING** → user ko "thodi der baad try karo" message.
- **Token nahi mila** → purana file/batch logic normally chalta hai (kuch break nahi hua).

## Setup

1. `MONGO_URI` aur `MONGO_DB_NAME` env vars **pw-live-system service ke same** rakho — dono ek hi database ki `lectures` collection share karte hain.
2. pw-live-system mein `TELEGRAM_BOT_TOKEN` isi bot ka token aur `TELEGRAM_CHAT_ID` wo chat jahan backend recordings upload karega (bot wahan member/admin hona chahiye).
3. pw-live-system mein `TELEGRAM_BOT_USERNAME` ko is bot ke username pe set karo, taaki website ka "⬇ Download Now" button sahi deep link banaye:
   `https://t.me/<bot_username>?start=<token>`

## Baaki sab

Purane features (single file, batch, broadcast, settings, autodel) as-it-is kaam karte hain.
