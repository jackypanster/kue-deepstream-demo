var kue = require('kue');

var queue = kue.createQueue();

var job = queue.create('email', {
    title: 'welcome email for tj'
    , to: 'tj@learnboost.com'
    , template: 'welcome-email'
}).save( function(err){
    if( !err ) console.log( job.id );
});

kue.app.listen(process.env.PORT);