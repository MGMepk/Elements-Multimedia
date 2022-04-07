import http from 'http';
import fs, { writeFileSync } from 'fs';
import path from 'path';

const handler = (req, resp) => {
    resp.setHeader('Content-Type', 'text/html');
    resp.statusCode = 200;

    let url = "";
    let type = path.extname(req.url);

    switch (type) {
        case ".html":
            resp.setHeader('Content-Type', 'text/html');
            url = "." + req.url;
            break;
        case ".css":
            resp.setHeader('Content-Type', 'text/css');
            url = "." + req.url;
            break;
        case ".jpg":
            resp.setHeader('Content-Type', 'image/jpeg');
            url = "." + req.url;
            break;
        case ".png":
            resp.setHeader('Content-Type', 'image/png');
            url = "." + req.url;
            break;
        case ".mp4":
            resp.setHeader('Content-Type', 'video/mp4');
            url = "." + req.url;
            break;
        case ".js":
            resp.setHeader('Content-Type', 'text/javascript');
            url = "." + req.url;
            break;
        case ".vtt":
            resp.setHeader('Content-Type', 'text/vtt');
            url = "." + req.url;
            break;
        case ".mp3":
            resp.setHeader('Content-Type', 'audio/mpeg');
            url = "." + req.url;
            break;
        default:
            resp.setHeader('Content-Type', 'text/html');
            url = "index.html";
            break;
    }
    console.log(req.url);

    if (url != "") {
        if (fs.existsSync(url)) {
            resp.write(fs.readFileSync(url));
        } else {
            resp.write(fs.readFileSync("index.html", "utf-8"));
        }
    }

    resp.end();
}

const server = http.createServer(handler);
server.listen(3000);

console.log('servidor en http://localhost:3000/index.html');