#!/usr/bin/bash

docker run --net="host" --rm -d -i --name node_dev -v $(pwd):/app ubuntu:node bash