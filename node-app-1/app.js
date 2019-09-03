const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

const rp = require('request-promise-native');

app.get('/', (req, res) => res.send('Hello World from app 1!'))



app.get('/test', (req, res) => {
	
	let req_config ={
	    method: 'GET',
	    uri: process.env.NODE_APP_2_HOST,
	    qs:{},
	    headers: {},
	    json:true
	}

	rp(req_config).then((response)=>{
		return res.send(response);	
	}).catch((reason)=>{
		return res.status(500).send(reason)
	})
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))
