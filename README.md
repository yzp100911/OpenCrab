# xCrab Agent

> 🦀 xCrab Agent — 多模型 AI 个人助手，基于 Node.js 构建，支持 MiniMax、DeepSeek 等主流模型

[![GPL-3.0 License](https://img.shields.io/badge/License-GPL--3.0-blue.svg)](LICENSE)
[![Node.js v22+](https://img.shields.io/badge/Node.js-v22+-green.svg)](https://nodejs.org/)

## 功能特性

- **多模型网关** — 支持 MiniMax、DeepSeek 等主流 LLM 模型切换，一个入口统一管理
- **MCP 协议支持** — 可接入 Model Context Protocol 服务器，扩展工具能力
- **技能系统** — 插件化 Skill 管理，自动加载自定义技能
- **记忆系统** — SQLite 本地持久化记忆，跨会话保持上下文
- **统计追踪** — Token 用量统计与计费管理
- **Web 控制台** — 内置 HTTP 服务，提供网页前端查看状态、切换模型、浏览历史

## 系统架构

xCrab Agent 由三个核心组件组成：

```
┌─────────────────────────────────────────────────────────────────┐
│                         用户浏览器                               │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                     eClaw Server (网页服务端)                    │
│  • 用户认证 (JWT)                                                │
│  • 文件上传管理                                                  │
│  • 网页前端托管                                                  │
│  • WebSocket 转发                                                │
└─────────────────────────────────────────────────────────────────┘
                                │                            ▲
                                │                            │
                                ▼                            │
┌─────────────────────────────────────────────────────────────────┐
│                   Claw Client (执行端)                          │
│  • 运行在 Ubuntu 服务器                                          │
│  • Playwright 浏览器自动化                                        │
│  • 接收并执行 AI 指令                                            │
│  • 与 eClaw Server 保持 WebSocket 连接                           │
└─────────────────────────────────────────────────────────────────┘
                                │
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                    xCrab Agent (核心网关)                        │
│  • 多模型 LLM 调用 (MiniMax / DeepSeek / OpenAI)                 │
│  • MCP 服务器集成                                                 │
│  • 技能系统与记忆系统                                            │
│  • 指令解析与执行                                                │
└─────────────────────────────────────────────────────────────────┘
```

### 组件说明

| 组件 | 仓库 | 说明 |
|------|------|------|
| **eClaw Server** | [eclaw-server](https://github.com/yzp100911/eclaw-server) | 网页服务端，提供用户界面和 API |
| **Claw Client** | [claw-client](https://github.com/yzp100911/claw-client) | 运行在 Ubuntu 服务器上的执行客户端 |
| **xCrab Agent** | [xCrab-Agent](https://github.com/yzp100911/xCrab-Agent) | 多模型 AI 网关，处理 LLM 调用 |

### 数据流

1. 用户通过浏览器访问 **eClaw Server** 网页端
2. eClaw Server 将请求转发给 **Claw Client**
3. Claw Client 调用 **xCrab Agent** 获取 AI 响应
4. xCrab Agent 返回结果，Claw Client 执行自动化操作
5. 执行结果通过 eClaw Server 返回给用户

## 部署指南

### 方式一：完整部署（推荐）

```
                    ┌──────────────────┐
                    │   云服务器        │
                    │   Ubuntu 24.04   │
                    │                  │
                    │  ┌────────────┐  │
                    │  │ eClaw      │  │
                    │  │ Server     │  │←── 用户浏览器
                    │  └─────┬──────┘  │
                    │        │         │
                    │  ┌─────▼──────┐  │
                    │  │ Claw       │  │
                    │  │ Client     │  │
                    │  └─────┬──────┘  │
                    │        │         │
                    │  ┌─────▼──────┐  │
                    │  │ xCrab      │  │
                    │  │ Agent      │  │
                    │  └────────────┘  │
                    └──────────────────┘
```

**步骤：**

1. **部署 xCrab Agent**
   ```bash
   # 在服务器上
   git clone https://github.com/yzp100911/xCrab-Agent.git
   cd xCrab-Agent
   npm install
   cp .env.example .env
   # 编辑 .env 填入 API Key
   npm start
   ```

2. **部署 Claw Client**
   ```bash
   git clone https://github.com/yzp100911/claw-client.git
   cd claw-client/cclaw
   npm install
   # 编辑 index.js 配置服务器地址
   ./start.sh
   ```

3. **部署 eClaw Server**
   ```bash
   git clone https://github.com/yzp100911/eclaw-server.git
   cd eclaw-server
   npm install
   # 编辑 .env 配置数据库和 xCrab 地址
   npm start
   ```

### 方式二：仅使用 xCrab Agent

如果只需要多模型网关功能，可以单独部署 xCrab Agent：

```bash
git clone https://github.com/yzp100911/xCrab-Agent.git
cd xCrab-Agent
npm install
cp .env.example .env
# 编辑 .env 填入 API Key
npm start
```

访问 `http://localhost:3000` 使用 Web 控制台。

### Docker 部署

```bash
cd xCrab-Agent
docker-compose up -d
```

## 环境要求

- Node.js v22+
- npm 或 pnpm

### xCrab Agent 单独安装

```bash
git clone https://github.com/yzp100911/xCrab-Agent.git
cd xCrab-Agent
npm install
```

### 配置

复制 `.env.example` 为 `.env`，填入你的 API Key：

```bash
cp .env.example .env
```

编辑 `.env`：

```env
MINIMAX_API_KEY=your_api_key_here
DEEPSEEK_API_KEY=your_api_key_here
```

### 运行

```bash
npm start
```

## 项目结构

```
xCrab/
├── index.js              # 入口文件
├── src/
│   ├── gateway/         # HTTP 网关 + Web 前端
│   ├── llm.js           # LLM 调用封装
│   ├── skill-manager.js # 技能管理系统
│   ├── memory/          # 记忆存储
│   ├── mcp/             # MCP 客户端
│   ├── workspace/       # 工作区管理
│   └── stats/           # 统计追踪
├── skills/              # 自定义技能目录
├── mcp-servers/         # MCP 服务器配置
└── data/                # 数据目录（数据库、记忆等）
```

## Gateway API

启动后访问 `http://localhost:3000` 打开 Web 控制台。

### 请求示例

```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer your_auth_token" \
  -d '{"messages":[{"role":"user","content":"Hello!"}]}'
```

## 开源协议

本项目采用 [GPL-3.0](LICENSE) 开源协议。

---

🦀 xCrab Agent — 让 AI 助手更简单