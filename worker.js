/**
 * Created by zhibinpan on 2017/4/1.
 */

var kue = require('kue')
    , queue = kue.createQueue();

queue.process('email', function(job, done){
    email(job.data, done);
});

function email(data, done) {
    console.log(data);
    done();
}