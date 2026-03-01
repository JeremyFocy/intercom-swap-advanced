#!/bin/bash

mkdir -p logs

for i in {1..5}
do

PORT=$((7000+i))
NAME="maker$i"

nohup bash scripts/run-swap-maker.sh $NAME $PORT 0000intercomswapbtcusdt > logs/$NAME.log 2>&1 &

echo "$NAME running on port $PORT"

done