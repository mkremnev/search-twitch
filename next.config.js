// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
    distDir: 'dist',
    pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
            components: path.resolve(__dirname, 'components'),
            styles: path.resolve(__dirname, 'styles'),
            '@': path.resolve(__dirname, './'),
        },
    },
};
