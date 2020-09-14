#! /usr/bin/env node

require('./')

const [ script ] = process.argv.slice(2)

if (script) require(require('path').join(process.cwd(), script))
