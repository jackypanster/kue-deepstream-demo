var kue = require('kue');

var queue = kue.createQueue();

var job = queue.create('email', {
    title: 'welcome email for tj'
}).save( function(err){
    if( !err ) console.log( job.id );
});

kue.app.listen(process.env.PORT);