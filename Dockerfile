# Базовый слой
FROM node:13

RUN apt update && apt install -y netcat

# Копируем всё что нужно из локальной папки в образ
COPY package-lock.json ./
COPY package.json ./
COPY server ./server
COPY dist ./dist

COPY utils/wait-for.sh wait-for.sh
RUN chmod +x wait-for.sh

# Устанавливаем зависимости, в образе появится /node_modules
RUN npm install --production

# При старте контейнер начнёт общаться через 3010 порт
EXPOSE 3010
