const path = require('path');

module.exports = {
  apps: [{
    name: 'xcrab',
    script: 'index.js',
    cwd: __dirname,
    env: {
      NODE_ENV: 'production',
      PORT: '60016',
      AUTH_TOKEN: 'your_auth_token_here',
      MINIMAX_API_KEY: 'your_api_key_here',
      MINIMAX_BASE_URL: 'https://api.minimaxi.com/v1',
      MINIMAX_MODEL: 'MiniMax-M2.7',
      ENABLE_MEMORY: 'true',
      GATEWAY_ENABLED: 'true',
      GATEWAY_PORT: '60016',
      GATEWAY_TOKEN: 'your_gateway_token_here',
      HEADLESS: 'true'
    }
  }]
};
