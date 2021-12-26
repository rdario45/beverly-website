#!/bin/bash

# step 1 build
npm run build

# step 2 copy and clean
mv build/* $BEVERLY_INFRA/website