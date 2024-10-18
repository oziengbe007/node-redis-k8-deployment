const express = require('express');
const redis = require('redis');
const os = require('os');
const app = express();

// Create Redis client
const client = redis.createClient({
  host: 'redis', 
  port: 6379  
});

// Handling Redis connection
client.on('connect', () => {
  console.log('Connected to Redis successfully');
});

client.on('error', (err) => {
  console.error('Failed to connect to Redis:', err);
  process.exit(1); // Exit the process if Redis connection fails
});

// Defining the API route
app.get('/', (req, res) => {
  // Increment the hit counter
  client.incr('hits', (err, hits) => {
    if (err) {
      return res.status(500).send('Error incrementing hits');
    }
    const hostName = os.hostname();
    const response = {
      hits: hits,
      hostName: hostName,
      success: true
    }
    res.json(response);
  });
  // res.send("hello world")
});

// Start the Express server
app.listen(30200, () => {
  console.log('App listening on port 30200');
});
