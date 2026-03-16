const redis = require('redis');

const client = redis.createClient({ 
  url: process.env.REDIS_URL || 'redis://127.0.0.1:6379' 
}); 

client.on('error', (err) => console.log('Redis Client Error', err));

client.on('ready', () => console.log('Redis Client Ready'));

module.exports = client;
