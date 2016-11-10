var connectionjs = require ('./connection.js')


var orm = {

selectAll: function(tableInput, colToSearch, valOfCol){
	var queryString = 'SELECT * FROM ' + tableInput + ' WHERE ' + colToSearch + ' = ?';
		connection.query(queryString, [valOfCol], function (err, result) {
			console.log(result);
		});
}/*,

insertOne: function(){
	
},

updateOne: function(){
	
}*/

}

module.exports = orm;