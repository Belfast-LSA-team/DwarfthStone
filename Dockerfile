FROM node:13

RUN apt update && apt install -y netcat

COPY . /app
WORKDIR /app

COPY utils/wait-for.sh wait-for.sh
RUN chmod +x wait-for.sh

RUN npm install

EXPOSE 3000
