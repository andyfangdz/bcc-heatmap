#!/usr/bin/env bash

set +ex

PROTOBUF_JS_GEN_PATH=src/gen/proto.js

npx -p protobufjs pbjs -t static-module --es6 -w es6 -o $PROTOBUF_JS_GEN_PATH ../proto/*.proto
npx prettier --write $PROTOBUF_JS_GEN_PATH
