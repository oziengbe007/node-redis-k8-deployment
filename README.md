

### (2 points) ###
    Write a simple program in any language you want that outputs

    {"hostName":"%HOSTNAME%","success":true}

    (HOSTNAME should be the actual host name on which the app is running) in response to a GET API Request (to “/”, with no additional URI path).

### (1 point) ###
    Write a dockerfile that will run your app.

### (1 point) ###
    Create the YAML files required for deploying the pods to kubernetes, and place them in a directory called deployment.

### (1 point) ###
    Expose your app on port 30200
    (required) Submit your scripts using this github repository. Ensure that when you submit your scripts, the server is available and responding to requests.


### (3 points) ###
    Add a second container with a database technology of your choice such that the database counts the number of times the GET API has been hit; add this information to the API. The api should now return 
        {"hits":1,"hostName":"%HOSTNAME%","success":true}

### (1 point) ###
    Write a liveness probe to check that the App is online and restart the container if it is not.

### (1 point) ###
    Ensure that the database is not lost when the application is stopped


## Testing your solution

Replace the url variable in the .env file with the url of your server. Then run

``` 
npm install
npm test
```
