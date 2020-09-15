require.cache['hyposcript'] = require(require.resolve('hyposcript'))
require(require.resolve('@babel/register'))({
  presets: [
    [require.resolve('@babel/preset-react'), {
      pragma: 'h',
      pragmaFrag: 'h',
    }]
  ]
})
