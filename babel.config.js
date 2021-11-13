module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@': './src',
          '@utils': './src/utils',
          '@hooks': './src/hooks',
          '@screens': './src/screens',
          '@components': './src/components',
        },
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.ios.js',
          '.android.js',
          '.json',
          '.png',
          '.jpg',
          '.webp',
          '.gif',
          '.svg',
          '.ttf',
          '.mp3',
          '.mp4',
        ],
      },
    ],
  ],
};
