#!/bin/bash
set -x
ssh ec2-user@$IP <<EOF
  cd ~/portfolio
  git reset --hard HEAD
  git pull
  echo "Running npm install"
  npm install
  npm run build
  pm2 start pm2-ecosystem.json
  echo "Latest version of portfolio running."
EOF