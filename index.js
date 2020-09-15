require('@babel/register')({
  presets: [
    ['@babel/preset-react', {
      pragma: 'h',
      pragmaFrag: 'h',
    }]
  ]
})
