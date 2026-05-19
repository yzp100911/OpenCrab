# xCrab Agent

> 🦀 xCrab Agent — Multi-model AI Gateway, supporting MiniMax, DeepSeek and other mainstream models. A streamlined, fast, fully open-source framework. Welcome to join us in building and maintaining it!

[![GPL-3.0 License](https://img.shields.io/badge/License-GPL--3.0-blue.svg)](LICENSE)
[![Node.js v22+](https://img.shields.io/badge/Node.js-v22+-green.svg)](https://nodejs.org/)
[![Stars](https://img.shields.io/github/stars/yzp100911/xCrab-Agent?style=social)](https://github.com/yzp100911/xCrab-Agent)
[![Forks](https://img.shields.io/github/forks/yzp100911/xCrab-Agent?style=social)](https://github.com/yzp100911/xCrab-Agent)

## Features

- **Multi-model Gateway** — Supports MiniMax, DeepSeek and other mainstream LLM models, unified management through a single entry point
- **MCP Protocol Support** — Can connect to Model Context Protocol servers, extending tool capabilities
- **Skill System** — Plugin-based Skill management with automatic loading of custom skills
- **Memory System** — SQLite local persistent storage, maintaining context across sessions
- **Statistics Tracking** — Token usage statistics and billing management
- **Web Console** — Built-in HTTP server with web frontend for viewing status, switching models, and browsing history

## System Architecture

xCrab Agent consists of three core components:

```
┌─────────────────────────────────────────────────────────────────┐
│                         User Browser                             │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                     eClaw Server (Web Server)                   │
│  • User Authentication (JWT)                                    │
│  • File Upload Management                                       │
│  • Web Frontend Hosting                                         │
│  • WebSocket Forwarding                                         │
└─────────────────────────────────────────────────────────────────┘
                                │                            ▲
                                │                            │
                                ▼                            │
┌─────────────────────────────────────────────────────────────────┐
│                   Claw Client (Execution Client)                │
│  • Runs on Ubuntu Server                                        │
│  • Playwright Browser Automation                                 │
│  • Receives and Executes AI Commands                            │
│  • Maintains WebSocket Connection with eClaw Server            │
└─────────────────────────────────────────────────────────────────┘
                                │
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                    xCrab Agent (Core Gateway)                    │
│  • Multi-model LLM Calls (MiniMax / DeepSeek / OpenAI)          │
│  • MCP Server Integration                                       │
│  • Skill System & Memory System                                 │
│  • Command Parsing & Execution                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Component Description

| Component | Repository | Description |
|-----------|------------|-------------|
| **eClaw Server** | [eclaw-server](https://github.com/yzp100911/eclaw-server) | Web server providing user interface and API |
| **Claw Client** | [claw-client](https://github.com/yzp100911/claw-client) | Execution client running on Ubuntu server |
| **xCrab Agent** | [xCrab-Agent](https://github.com/yzp100911/xCrab-Agent) | Multi-model AI gateway for LLM calls |

### Data Flow

1. User accesses **eClaw Server** web interface via browser
2. eClaw Server forwards request to **Claw Client**
3. Claw Client calls **xCrab Agent** for AI response
4. xCrab Agent returns result, Claw Client executes automation
5. Execution result returns to user via eClaw Server

## Deployment Guide

### Requirements

- Node.js v22+
- npm or pnpm

### Ubuntu Deployment

**Method 1: Source Installation**

```bash
# 1. Install Node.js 22
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs

# 2. Clone project
git clone https://github.com/yzp100911/xCrab-Agent.git
cd xCrab-Agent

# 3. Install dependencies
npm install

# 4. Configure
cp .env.example .env
nano .env  # Edit and add API Key

# 5. Run
npm start
```

**Method 2: Docker Deployment**

```bash
# 1. Install Docker
curl -fsSL https://get.docker.com | sudo sh
sudo usermod -aG docker $USER

# 2. Clone and start
git clone https://github.com/yzp100911/xCrab-Agent.git
cd xCrab-Agent
docker-compose up -d
```

**Method 3: PM2 Process Management (Recommended for Production)**

```bash
# 1. Install PM2
sudo npm install -g pm2

# 2. Start project
pm2 start npm --name "xcrab" -- start

# 3. Enable startup on boot
pm2 save
pm2 startup
```

**Background Running**

```bash
# Using nohup
nohup npm start > xcrab.log 2>&1 &

# Check process
ps aux | grep xcrab

# View logs
tail -f xcrab.log
```

### Windows Deployment

**Method 1: Source Installation**

```powershell
# 1. Install Node.js 22
# Download from https://nodejs.org/

# 2. Clone project
git clone https://github.com/yzp100911/xCrab-Agent.git
cd xCrab-Agent

# 3. Install dependencies
npm install

# 4. Configure
copy .env.example .env
# Edit .env with your API Key

# 5. Run
npm start
```

**Method 2: Docker Deployment**

```powershell
# 1. Install Docker Desktop
# Download from https://docker.com

# 2. Clone and start
git clone https://github.com/yzp100911/xCrab-Agent.git
cd xCrab-Agent
docker-compose up -d
```

**Method 3: PM2 Global Installation**

```powershell
# Install PM2 globally
npm install -g pm2

# Start project
pm2 start npm --name "xcrab" -- start

# Enable startup
pm2 startup
pm2 save
```

**Background Running**

```powershell
# Task Scheduler or
Start-Process -FilePath "node" -ArgumentList "index.js" -WindowStyle Hidden
```

### Verify Installation

After starting, access: `http://localhost:3000`

If you can see the Web Console interface, the installation is successful.

### Configuration

Edit the `.env` file:

```env
# MiniMax Configuration
MINIMAX_API_KEY=your_minimax_api_key
MINIMAX_MODEL=abab6.5s-chat

# DeepSeek Configuration
DEEPSEEK_API_KEY=your_deepseek_api_key
DEEPSEEK_MODEL=deepseek-chat

# Gateway Configuration
GATEWAY_PORT=3000
AUTH_TOKEN=your_auth_token
```

### Full Deployment (Recommended)

For full deployment (web + client + gateway), please refer to each component's repository:

- [xCrab-Agent](https://github.com/yzp100911/xCrab-Agent) — Multi-model Gateway
- [eClaw Server](https://github.com/yzp100911/eclaw-server) — Web Server
- [Claw Client](https://github.com/yzp100911/claw-client) — Execution Client

### Standalone xCrab Agent

If you only need the multi-model gateway function:

```bash
git clone https://github.com/yzp100911/xCrab-Agent.git
cd xCrab-Agent
npm install
cp .env.example .env
# Edit .env with your API Key
npm start
```

Access `http://localhost:3000` to use the Web Console.

### Docker Deployment

```bash
cd xCrab-Agent
docker-compose up -d
```

## Project Structure

```
xCrab/
├── index.js              # Entry point
├── src/
│   ├── gateway/         # HTTP Gateway + Web Frontend
│   ├── llm.js           # LLM Call Wrapper
│   ├── skill-manager.js # Skill Management System
│   ├── memory/          # Memory Storage
│   ├── mcp/             # MCP Client
│   ├── workspace/       # Workspace Management
│   └── stats/           # Statistics Tracking
├── skills/              # Custom Skills Directory
├── mcp-servers/         # MCP Server Configuration
└── data/                # Data Directory (database, memory, etc.)
```

## Gateway API

After startup, access `http://localhost:3000` to open the Web Console.

### Request Example

```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer your_auth_token" \
  -d '{"messages":[{"role":"user","content":"Hello!"}]}'
```

## License

This project is licensed under [GPL-3.0](LICENSE).

---

🦀 xCrab Agent — Making AI Assistants Simpler