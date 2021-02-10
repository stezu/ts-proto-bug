#/bin/sh

protoc --ts_out=./dist --plugin="protoc-gen-ts=./node_modules/.bin/protoc-gen-ts_proto" \
  --ts_opt="unrecognizedEnum=false;oneof=unions;esModuleInterop=true" protos/imports.proto
