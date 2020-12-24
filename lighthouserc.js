// lighthouserc.js
module.exports = {
    ci: {
        collect: {
            staticDistDir: './public',
            //startServerCommand: 'npm run server',
            //url: ['http://localhost:4000/'],
        },
        upload: {
            target: 'temporary-public-storage',
        },
    },
};