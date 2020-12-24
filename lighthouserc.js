// lighthouserc.js
module.exports = {
    ci: {
        collect: {
            staticDistDir: './',
            //startServerCommand: 'npm run server',
            //url: ['http://localhost:4000/'],
            //startServerReadyPattern: 'Server is running on PORT 4000',
            //startServerReadyTimeout: 20000 // milliseconds
            //numberOfRuns: 5,
        },
        upload: {
            target: 'temporary-public-storage',
        },
        assert: {
            preset: 'lighthouse:no-pwa',
            assertions: {
                'categories:performance': ['error', { minScore: 0.9 }],
                'categories:accessibility': ['warn', { minScore: 0.9 }],
            },
        },
    },
};