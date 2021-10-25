let express = require("express")
let ourApp = express()
ourApp.get('/', function(req, res) {
      res.send(`
      <form action="/answer" method="POST">
            <p>what color?</p>
            <input name="skyColor" autocomplete="off">
            <button>submit</button>
      </form>
      `)
})

ourApp.post('/answer', function(req, res) {
      res.send("thaaankssss")
})

ourApp.listen(3000)