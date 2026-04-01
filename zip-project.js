#!/usr/bin/env node
/**
 * zip-project.js
 * Run: node zip-project.js
 * Creates: naveen-portfolio.zip in the current directory
 *
 * Prerequisites: npm install archiver
 */

const archiver = require('archiver')
const fs = require('fs')
const path = require('path')

const OUTPUT = 'naveen-portfolio.zip'
const SOURCE = __dirname

const output = fs.createWriteStream(path.join(SOURCE, OUTPUT))
const archive = archiver('zip', { zlib: { level: 9 } })

output.on('close', () => {
  const mb = (archive.pointer() / 1024 / 1024).toFixed(2)
  console.log(`\n✅ ZIP created: ${OUTPUT} (${mb} MB)`)
  console.log('📦 Upload to Vercel or extract and run:')
  console.log('   npm install && npm run dev\n')
})

archive.on('error', err => { throw err })
archive.pipe(output)

// Add all files except node_modules, .next, .git, and the zip itself
archive.glob('**/*', {
  cwd: SOURCE,
  ignore: [
    'node_modules/**',
    '.next/**',
    '.git/**',
    '*.zip',
    'zip-project.js',
  ],
})

archive.finalize()
