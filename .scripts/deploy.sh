#!/bin/bash
set -x
ssh $IP <<EOF
  cd ~/portfolio
  git reset --hard HEAD
  git pull
  echo "Running npm install"
  npm install
  npm run build
  pm2 start ecosystem.config.js
  echo "Latest version of portfolio running."
EOF