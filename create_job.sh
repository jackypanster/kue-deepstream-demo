#!/usr/bin/env bash
curl -H "Content-Type: application/json" -d \
    '{
       "type": "email",
       "data": {
         "title": "welcome email for tj",
         "to": "tj@learnboost.com",
         "template": "welcome-email"
       }
     }' http://127.0.0.1:3001/job


#wrk -t16 -c250 -d60s -s post.lua http://127.0.0.1