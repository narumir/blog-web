#!/bin/bash

BUILD_FOLDER=.dist

# Clean
rm -rf $BUILD_FOLDER

# Next.js build and copy
next build
mv .next/standalone/ $BUILD_FOLDER/
cp -r .next/static $BUILD_FOLDER/.next
cp -r next.config.js $BUILD_FOLDER/
cp -r public $BUILD_FOLDER/

# Build lambda function
cp server.ts $BUILD_FOLDER/
cd $BUILD_FOLDER
npm run build:lambda
rm server.ts

