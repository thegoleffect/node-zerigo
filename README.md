
# Node Zerigo

Node Zerigo is a simple, extensible wrapper for the Zerigo DNS API.  It lets you dynamically create, modify, delete, update DNS entries that can take affect within minutes.

## Installation 

via npm

	npm install %NAME_UNDEFINED%

## Example

	var zerigo = require('node-zerigo');
	zclient = zerigo.init({username: "", secret: ""})
	zclient.request("create-host", data, function(err, response){
		
	})


## TODO:

* Unit tests