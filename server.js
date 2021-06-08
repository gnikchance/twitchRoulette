const express = require('express');
var app = express();
const bp = require('body-parser');
const port = process.env.PORT || 3000

//app.use(express.static(`${__dirname}/public`));


app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)

})

app.get('/', (req, res) => {
  
    res.sendFile('index.html', { root: __dirname });

  })


app.post('/roulette', function (req, res) {
    console.log(req.body.number);
});


// const tmi = require('tmi.js');

// //set up client
// const client = new tmi.Client({
//     connection: {
//         reconnect: true
//     },
//     channels: [
//         'SirChancey'
//     ]
// });


// //initial connection
// client.connect();


// client.on('message', async (channel, context, message) => {
//     console.log('channel', {
//         user: context.username,
//         message
//     });
// });