#!/usr/bin/env bash
npm run build

rm -rf docker/build

cp -r build docker/

cd docker/

docker build -t react:v1.0 .





docker stop react

docker rm react

docker run --name react -p 80:80 -d  react:v1.0