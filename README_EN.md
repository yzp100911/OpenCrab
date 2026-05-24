🦀 skillgate-agent

**skillgate-agent** — AI Personal Assistant Suite, containing four core components: **xCrab (AI Execution Engine)**, **eclaw (Service Dispatcher)**, **cclaw (Remote Distributor)**, and **wclaw (Web Client)**.

Download one repository, deploy completely.

---

## ⚠️ Brand Statement

**skillgate-agent** is an independent Chinese open-source project with no affiliation, derivation, authorization, or sponsorship relationship with [OpenClaw](https://github.com/openclaw/openclaw) (open-source AI agent framework).

### Project Focus

skillgate-agent is a **multi-model AI gateway** focused on:
- Model aggregation and routing
- Unified API access
- High-speed, low-latency forwarding services
- Support for domestic mainstream models like MiniMax and DeepSeek

### Naming Origin

- **"Crab"** represents a crab — symbolizing efficiency, speed, and lateral movement
- The overall naming follows common animal-based naming conventions in the open-source community (like TensorFlow, Camel, etc.), with no intention to imitate or confuse any existing brand

### Trademark Statement

1. The project name and related identifiers of skillgate-agent are independently created by the project author
2. If you need to use skillgate-agent code or name in commercial products, please evaluate and bear the relevant legal responsibilities yourself
3. The project author is not responsible for any trademark or intellectual property disputes caused by using this project

### Contact

For any brand-related issues, please contact the project maintainer via GitHub Issues.

---

## 📦 System Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                          skillgate-agent (this repo)                │
│                                                                       │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │          xCrab (AI Execution Engine)                         │   │
│  │   ┌──────────────┐   ┌──────────────┐   ┌──────────────┐   │   │
│  │   │ LLM Calls     │   │ Tools/Skills │   │ MCP Client   │   │   │
│  │   │ MiniMax       │   │ Registry     │   │ Ext Comms    │   │   │
│  │   │ DeepSeek      │   │ Skills       │   │              │   │   │
│  │   └──────────────┘   └──────────────┘   └──────────────┘   │   │
│  └─────────────────────────┬───────────────────────────────────┘   │
│                            │                                        │
│                            ▼                                        │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │             eclaw (Service Dispatcher)                       │   │
│  │   ┌──────────────┐   ┌──────────────┐   ┌──────────────┐   │   │
│  │   │ HTTP API     │   │ WebSocket    │   │ MySQL DB     │   │   │
│  │   │ Routing/Auth │   │ Msg Forward  │   │ User/History │   │   │
│  │   │              │   │              │   │ Fav/Feedback │   │   │
│  │   └──────────────┘   └──────────────┘   └──────────────┘   │   │
│  └─────┬─────────────────────────┬────────────────────────────┘   │
│        │                         │                                │
│        ▼                         ▼                                │
│  ┌─────────────────┐   ┌─────────────────────┐                    │
│  │ wclaw (Web UI)  │   │ cclaw (Distributor) │                    │
│  │ Chat UI         │   │ WebSocket Remote    │                    │
│  │ Session Mgmt    │◄──►│ Command Execution  │                    │
│  │ File Display    │   │ Status Monitoring   │                    │
│  │ Settings/Fav    │   │ Heartbeat Keep-alive│                    │
│  └─────────────────┘   └─────────────────────┘                    │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 🚀 Quick Deploy

### Option 1: One-Click Deploy (Linux, Recommended)

```bash
git clone https://github.com/yzp100911/skillgate-agent.git
cd skillgate-agent
chmod +x deploy.sh
./deploy.sh
```

### Option 2: Manual Deploy (Linux Server)

```bash
# 1. Clone the repository
git clone https://github.com/yzp100911/skillgate-agent.git
cd skillgate-agent

# 2. Enter xCrab directory
cd xCrab

# 3. Install dependencies
npm install

# 4. Configure environment
cp .env.example .env
nano .env  # Fill in AUTH_TOKEN and MINIMAX_API_KEY

# 5. Start the service
chmod +x start.sh
./start.sh

# 6. Verify the service
curl -H "Authorization: Bearer YOUR_AUTH_TOKEN" \
     http://localhost:60016/api/chat \
     -d '{"message":"Hello"}'
```

### Option 3: Windows Deploy

```bash
git clone https://github.com/yzp100911/skillgate-agent.git
cd skillgate-agent\xCrab
npm install
copy .env.example .env
# Edit .env and fill in API_KEY
npm start
```

## 📋 Requirements

| Environment | Requirement |
|-------------|-------------|
| **Node.js** | **18+** |
| **npm** | Bundled with Node.js |
| **PM2** | Required for Linux (process manager) |
| **OS** | Windows 10+ / Ubuntu 20.04+ / macOS |

## ⚙️ Environment Variables

Edit `xCrab/.env` file:

```bash
# Required
AUTH_TOKEN=your_secure_token_here
MINIMAX_API_KEY=your_api_key_here

# Optional (with defaults)
MINIMAX_BASE_URL=https://api.minimaxi.com/v1
MINIMAX_MODEL=MiniMax-M2.7
PORT=60016
ENABLE_MEMORY=true
GATEWAY_ENABLED=true
GATEWAY_TOKEN=your_gateway_token_here
```

## 🌐 API Usage

### Chat Endpoint

```bash
curl -X POST http://localhost:60016/api/chat \
  -H "Authorization: Bearer YOUR_AUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"message":"Hello, introduce yourself"}'
```

### Response Format

```json
{
  "code": 200,
  "data": {
    "content": "Hello! I am xCrab...",
    "sessionId": "xxx-xxx-xxx"
  }
}
```

## 🛠 PM2 Management Commands

```bash
pm2 status xcrab       # Check status
pm2 logs xcrab         # View logs
pm2 restart xcrab      # Restart
pm2 stop xcrab         # Stop
pm2 delete xcrab       # Delete process
```

## 🌟 Key Features

| Feature | Description |
|---------|-------------|
| 🤖 **Multi-Model Support** | Integrated MiniMax, DeepSeek and other mainstream LLMs with unified API |
| 🔌 **Skills Extension** | MCP protocol support, plugin-based architecture |
| 🌐 **Web Client** | Access directly via browser, no installation needed |
| 💾 **Session Management** | History, favorites, feedback mechanism |
| 🔒 **Secure & Reliable** | API authentication, command execution control |

## 📂 Project Structure

```
skillgate-agent/
├── deploy.sh                 # One-click deploy script
├── README.md                 # Chinese documentation
├── README_EN.md              # English documentation
├── .env.example              # Root env template
├── LICENSE                   # License
├── xCrab/                    # AI Execution Engine
│   ├── index.js              # Main entry
│   ├── src/                  # Core source
│   │   ├── tools.js          # Utility functions
│   │   └── memory/           # Memory system
│   ├── skills/               # Skills modules
│   ├── eclaw/                # Service Dispatcher
│   ├── cclaw/                # Remote Distributor
│   ├── wclaw/                # Web Client
│   ├── data/                 # Data storage
│   ├── start.sh              # Start script
│   ├── ecosystem.config.cjs  # PM2 config
│   └── .env.example          # Env template
```

## 📄 License

This project is open-source under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

- [MiniMax](https://www.minimaxi.com/) — API support
- [DeepSeek](https://deepseek.com/) — API support
- [MCP](https://modelcontextprotocol.github.io/) — Open standard protocol
- All open-source contributors

---

<p align="center">
  <strong>skillgate-agent</strong> — Making AI assistants accessible
</p>
