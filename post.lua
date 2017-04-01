wrk.path = "/job"
wrk.method = "POST"
wrk.body   = "{\"type\":\"email\", \"data\":{\"title\":\"abcd\"}}"
wrk.headers["Content-Type"] = "application/json"