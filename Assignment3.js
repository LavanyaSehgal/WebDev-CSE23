const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {

    // Set common response headers
    res.setHeader('Cache-Control', 'no-cache');

    // Route 1: Home page
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });

        res.end('Welcome to my Node.js Server!');
    }

    // Route 2: About page
    else if (req.method === 'GET' && req.url === '/about') {
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'X-Custom-Header': 'MyNodeServer'
        });

        res.end(`
            <html>
                <head>
                    <title>About Page</title>
                </head>
                <body>
                    <h1>About Us</h1>
                    <p>This is a simple Node.js HTTP server.</p>
                </body>
            </html>
        `);
    }

    // Route 3: Info page
    else if (req.method === 'GET' && req.url === '/info') {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        const data = {
            server: 'Node.js',
            port: PORT,
            message: 'Server is running successfully'
        };

        res.end(JSON.stringify(data));
    }

    // Route 4: Not Found
    else {
        res.writeHead(404, {
            'Content-Type': 'text/plain'
        });

        res.end('404 - Page Not Found');
    }

});

// Start the server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});