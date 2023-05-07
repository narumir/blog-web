#!/bin/bash

BUILD_FOLDER=.dist

# Clean
rm -rf $BUILD_FOLDER
rm -rf .next
rm blog.zip

# Next.js build and copy
npm run build:next
mv .next/standalone/ $BUILD_FOLDER/
cp -r .next/static $BUILD_FOLDER/.next
cp -r next.config.js $BUILD_FOLDER/
cp -r public $BUILD_FOLDER/

# Build lambda function
npm run build:lambda

# Zipping built files
cd .dist/
zip -r ../blog.zip .
