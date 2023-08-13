#!/bin/bash

STATIC_FOLDER=.static
BUILD_FOLDER=.dist

# Cleanup output folders
rm -rf $STATIC_FOLDER
rm -rf $BUILD_FOLDER

# Build project
npm run build:next

# Copy assets
cp -r public $STATIC_FOLDER/
mkdir -p $STATIC_FOLDER/_next
cp -r .next/static $STATIC_FOLDER/_next/static

# Copy serverless
cp -r .next/standalone/. $BUILD_FOLDER/
cp -r next.config.js $BUILD_FOLDER/
cp -r image_loader.js $BUILD_FOLDER/

# Build serverless hanlder
npm run build:lambda
