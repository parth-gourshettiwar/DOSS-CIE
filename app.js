const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        fs.readFile('./public/index.html', (err, data) => {

            if (err) {
                res.writeHead(500);
                res.end('Error loading page');
                return;
            }

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });

    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Student Task Manager running on port 3000');
});
