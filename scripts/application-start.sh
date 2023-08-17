#!/bin/sh

cd /home/ubuntu/ssr

export NODE_ENV=production

pm2 start .next/standalone/server.js -i 0 --name ssr
