 = require('express');
const ytdl = require('ytdl-core');
const app = express();

app.get('/', function (req, res) {
  const { url } = req.query;
  console.log(url);
  res.header("Content-Disposition", 'attachment; filename="video.mp4"');
  return ytdl(url, { filter: "videoandaudio" }).pipe(res);
});

app.listen(3000, function () {
  console.log('Servidor em execução na porta 3000');
});
