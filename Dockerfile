FROM oven/bun

WORKDIR /usr/src/app

COPY . .

RUN bun install

EXPOSE 3000/tcp

CMD [ "bun", "start" ]