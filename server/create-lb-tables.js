var server = require('./server');
var ds = server.dataSources.mongoDs;
var lbTables = ['Student', 'courses', 'instructors', 'registrations', 'courseRatings'];
ds.automigrate(lbTables, function(er) {
  if (er) throw er;
  console.log('Loopback tables created in ', ds.adapter.name);
  ds.disconnect();
});