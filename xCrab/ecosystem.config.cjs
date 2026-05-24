const path = require('path');

module.exports = {
  apps: [{
    name: 'xcrab',
    script: 'index.js',
    cwd: __dirname,
    env: {
      NODE_ENV: 'production',
      PORT: process.env.PORT || '60016',
      AUTH_TOKEN: process.env.AUTH_TOKEN || '',
      MINIMAX_API_KEY: process.env.MINIMAX_API_KEY || '',
      MINIMAX_BASE_URL: process.env.MINIMAX_BASE_URL || 'https://api.minimaxi.com/v1',
      MINIMAX_MODEL: process.env.MINIMAX_MODEL || 'MiniMax-M2.7',
      ENABLE_MEMORY: process.env.ENABLE_MEMORY || 'true',
      GATEWAY_ENABLED: process.env.GATEWAY_ENABLED || 'true',
      GATEWAY_PORT: process.env.GATEWAY_PORT || '60016',
      GATEWAY_TOKEN: process.env.GATEWAY_TOKEN || '',
      HEADLESS: process.env.HEADLESS || 'true'
    }
  }]
};
