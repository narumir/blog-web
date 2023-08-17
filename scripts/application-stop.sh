#!/bin/sh

cd /home/ubuntu/app

export NODE_ENV=production

pm2 stop ssr
