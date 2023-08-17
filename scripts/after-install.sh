#!/bin/sh

cd /home/ubuntu/ssr

export NODE_ENV=production

sudo cp -r .next/static/. /usr/share/nginx/html/
