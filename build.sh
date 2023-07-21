#!/bin/bash

STATIC_FOLDER=.static
BUILD_FOLDER=.dist

# Cleanup output folders
rm -rf $STATIC_FOLDER
rm -rf $BUILD_FOLDER

# Build project
npm run build:next
npm run build:lambda

# Copy assets
cp -r public $STATIC_FOLDER/
cp -r .next/static $STATIC_FOLDER/_next/

# Copy serverless
cp -r .next/standalone/. $BUILD_FOLDER/
cp -r next.config.js $BUILD_FOLDER/
