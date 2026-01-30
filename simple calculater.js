const http = require('http');
const { parse } = require('querystring');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        // Serve the HTML form
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <h2>Simple Node.js Calculator</h2>
            <form action="/calculate" method="POST">
                <input type="number" name="num1" placeholder="First Number" required><br><br>
                <select name="op">
                    <option value="add">+</option>
                    <option value="subtract">-</option>
                    <option value="multiply">*</option>
                    <option value="divide">/</option>
                </select><br><br>
                <input type="number" name="num2" placeholder="Second Number" required><br><br>
                <button type="submit">Calculate</button>
            </form>
        `);
    } else if (req.method === 'POST' && req.url === '/calculate') {
        // Handle the form submission
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
            const data = parse(body);
            const a = parseFloat(data.num1);
            const b = parseFloat(data.num2);
            let result;

            switch (data.op) {
                case 'add': result = a + b; break;
                case 'subtract': result = a - b; break;
                case 'multiply': result = a * b; break;
                case 'divide': result = b !== 0 ? a / b : 'Error: Division by zero'; break;
            }

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`<h3>Result: ${result}</h3><a href="/">Back</a>`);
        });
    }
});

server.listen(4000, () => console.log('Calculator running at http://localhost:4000'));