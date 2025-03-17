module.exports = {
  resolver: {
    assetExts: ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'], // Ensure image extensions are included
    sourceExts: ['jsx', 'js', 'ts', 'tsx', 'json'], // Ensure JavaScript and TypeScript files are supported
  },
  transformer: {
    babelTransformerPath: require.resolve('metro-react-native-babel-transformer'),
  },
};
