var http = require("http");
var url = require("url");

function iniciar() {
  function onPeticio(req, res) {
    const baseURL = req.protocol + "://" + req.headers.host + "/"; // Here I get the base path from the url.
    const reqUrl = new URL(req.url, baseURL);
    console.log(reqUrl);
    console.log("Petició per a  " + reqUrl.pathname + " rebuda.");

    res.writeHead(200, {
      "Content-Type": "text/plain; charset=utf-8",
    });
    res.write("Camí: " + reqUrl.pathname + "\n");
    res.write("Consulta: " + reqUrl.search + "\n");
    // searchParams retorna un objecte del tipus URLSearchParams
    res.write("Paràmetre: " + reqUrl.searchParams.get("parametre") + "\n"); // If I write something else on postman, such as "saw", I'll get null.
    res.write("Paràmetre: " + reqUrl.searchParams.get("n1") + "\n");
    res.end();
  }

  http.createServer(onPeticio).listen(8888);
  console.log("Servidor iniciat.");
}

exports.iniciar = iniciar;
