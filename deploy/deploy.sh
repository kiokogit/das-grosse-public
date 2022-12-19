#!/bin/bash

DEPLOY_SERVER=$DEPLOY_SERVER
SERVER_FOLDER="html-folder-in-server"

# Building React output for the sake of the projectb
npm install
npm run build

echo "Deploying to ${DEPLOY_SERVER}"
scp -r build/ root@${DEPLOY_SERVER}:/var/www/html/${SERVER_FOLDER}/

echo "Finished copying the build files" 