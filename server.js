// const is a keyword that indicate that the data is read only
const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//req = request & res 
// this gets called when you go to localhost:4000
app.get('/', (req, res) => {
  res.send('Welcome to Data Representation & Querying')
})

// this listens for the port number and sends back a response 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// when you go to localhost:/hello/a name it will bring up the send the text below 
app.get('/hello/:name', (req, res)=>{
    res.send('Hello '+ req.params.name);
})
// listens for localhost:4000/api/movies and sends back the array below
app.get('/api/movies', (req, res)=>{
  
        // created array called movies
        const movies = [
            {
                "Title": "Avengers: Infinity War",
                "Year": "2018",
                "imdbID": "tt4154756",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
                },
                {
                "Title": "Captain America: Civil War",
                "Year": "2016",
                "imdbID": "tt3498820",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
                }
        ];
        //sending back some json data from movies above
        res.json({
            mymovies:movies
        })
    
})

// sends html file back when you go to localhost:4000/test
app.get('/test', (req, res)=>{
    // ___dirname tells what directorys your in and the finds index.html
    res.sendFile(__dirname+'/index.html');
})

app.get('/name', (req, res)=>{
    res.send('Hello ' +req.query.firstname + ' ' + req.query.lastname);
})

// used a form to send data up and then parsed the body to send firstname + lastname 
app.post('/name', (req, res)=>{
    res.send('Hello ' + req.body.firstname + ' ' + req.body.lastname);
})