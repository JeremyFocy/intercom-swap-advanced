#!/bin/bash

echo "Starting IntercomSwap Advanced..."

mkdir -p logs

nohup node server.js > logs/server.log 2>&1 &
echo "Server started"

nohup bash scripts/rfq-maker-peer.sh > logs/rfq.log 2>&1 &
echo "RFQ started"

nohup bash scripts/run-swap-maker.sh maker1 7001 0000intercomswapbtcusdt > logs/maker1.log 2>&1 &
echo "Maker started"

echo "All services running"