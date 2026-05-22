<<<<<<< HEAD
[🇨🇳 中文] | [🇬🇧 English](README_EN.md)

# xCrab-Agent 🦀

**xCrab** — AI 个人助手全家桶，集成了 AI 对话引擎（xCrab-Agent）、中转调度服务器（eclaw-server）和远程执行终端（claw-client）。**下载一个仓库，即可完整部署。**

---

## 📦 系统架构

```
┌──────────────────────────────────────────────────────────┐
│                   xCrab-Agent (本仓库)                    │
│                                                          │
│  ┌──────────────────┐    ┌──────────────────┐            │
│  │  📡 eclaw-server  │    │  🧠 xCrab-Agent  │            │
│  │  中转调度服务器    │◄──►│  AI 对话引擎      │            │
│  │  用户登录/注册    │    │  MiniMax/DeepSeek │            │
│  │  消息转发(WS)     │    │  工具调用          │            │
│  │  文件上传服务     │    │  技能扩展          │            │
│  │  网页前端(wclaw)  │    │  持久化记忆        │            │
│  └────────┬─────────┘    └──────────────────┘            │
│           │                                               │
│           ▼                                               │
│  ┌──────────────────┐                                    │
│  │  🤖 claw-client   │                                    │
│  │  远程执行终端     │                                    │
│  │  WebSocket 连接   │                                    │
│  │  node-pty 终端    │                                    │
│  │  服务器命令执行   │                                    │
│  └──────────────────┘                                    │
└──────────────────────────────────────────────────────────┘
```

| 组件 | 路径 | 说明 |
|------|------|------|
| 🧠 **xCrab-Agent** | 根目录 `./` | AI 对话引擎，对接 MiniMax/DeepSeek，支持工具调用和技能扩展 |
| 📡 **eclaw-server** | [`./eclaw/`](./eclaw) | 中转调度服务器，管理 WebSocket 连接、用户登录、文件服务、网页前端 |
| 🤖 **claw-client** | [`./cclaw/`](./cclaw) | 远程执行终端，通过 WebSocket 连接 eclaw，在目标服务器上执行命令 |

---

## 🚀 快速开始
=======
# 🦀 xCrab-Agent — 完整部署包

> **AI 大脑 + 中转调度服务器 + 远程客户端** · 三位一体

```
┌─────────────────────────────────────────────────┐
│                   xCrab-Agent                    │
│  ┌──────────┐  ┌──────────┐  ┌──────────────┐  │
│  │  Agent   │  │  Server  │  │   Client     │  │
│  │  AI 大脑  │  │  中转调度 │  │  远程执行器   │  │
│  └──────────┘  └──────────┘  └──────────────┘  │
└─────────────────────────────────────────────────┘
```

---

## 📦 组件说明

| 组件 | 目录 | 说明 |
|------|:----:|------|
| 🧠 **Agent** | `./` (根目录) | AI 对话引擎，提供智能对话能力 |
| 📡 **Server** | `./server/` | 中转调度服务器（用户登录、消息转发、文件服务） |
| 🤖 **Client** | `./client/` | 远程终端执行器，连接 Server 执行命令 |

---

## 🚀 快速部署
>>>>>>> 14b740a (🎉 合并 eclaw-server 和 claw-client 到 xCrab-Agent 仓库)

### 前置要求

<<<<<<< HEAD
| 环境 | 要求 |
|------|------|
| **Node.js** | **v22.12 或更高** |
| **npm** | 随 Node.js 自带 |
| **系统** | Windows 10+ / Ubuntu 20.04+ |

---

## 🪟 Windows 部署

### 1️⃣ 安装 Node.js

**方法一（推荐）：** 访问 [nodejs.org](https://nodejs.org) 下载 **v22.x LTS**，运行安装程序（勾选"Add to PATH"）。

**方法二：winget**
```bash
winget install OpenJS.NodeJS.LTS
```

验证安装：
```bash
node -v    # 应显示 v22.x.x
npm -v     # 应显示 10.x.x
```

### 2️⃣ 克隆仓库

=======
| 环境 | 版本要求 |
|------|:--------:|
| **Node.js** | ≥ 18.x |
| **npm** | ≥ 9.x |
| **MySQL** | ≥ 5.7（Server 组件需要） |
| **Playwright** | 浏览器自动化（Client 组件需要） |

### 1️⃣ 克隆仓库

>>>>>>> 14b740a (🎉 合并 eclaw-server 和 claw-client 到 xCrab-Agent 仓库)
```bash
git clone https://github.com/yzp100911/xCrab-Agent.git
cd xCrab-Agent
```

<<<<<<< HEAD
### 3️⃣ 一键安装所有依赖

```bash
# 方式一：一键安装
npm run install:all

# 方式二：手动分步安装
npm install                    # xCrab-Agent
cd eclaw && npm install && cd ..  # eclaw-server
cd cclaw && npm install && cd ..  # claw-client
```

> ⚠️ 如果 `better-sqlite3` 编译报错，请安装 **Visual Studio Build Tools**（含 C++ 构建工具），或运行：
> ```bash
> npm install better-sqlite3 --force
> ```

### 4️⃣ 配置环境变量

```bash
copy .env.example .env
```

用记事本或 VS Code 打开 `.env`，填写必要的密钥：

| 变量 | 必填 | 说明 |
|------|------|------|
| `MINIMAX_API_KEY` | ✅ **必填** | MiniMax API 密钥（[获取](https://platform.minimaxi.com)） |
| `DEEPSEEK_API_KEY` | ❌ 可选 | DeepSeek API 密钥 |

> 如果你不需要连接 AI（仅使用中转和终端功能），可以先不填密钥。

### 5️⃣ 启动组件

**启动 AI 对话引擎：**
```bash
npm start
```

**启动中转调度服务器**（新开一个终端）：
```bash
npm run start:eclaw
```

**启动远程执行终端**（新开一个终端）：
```bash
npm run start:cclaw
```

---

## 🐧 Linux 部署（Ubuntu / CentOS）

### 1️⃣ 安装 Node.js

**Ubuntu/Debian：**
```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**CentOS/RHEL：**
```bash
curl -fsSL https://rpm.nodesource.com/setup_22.x | sudo bash -
sudo yum install -y nodejs
```

验证安装：
```bash
node -v    # 应显示 v22.x.x
npm -v     # 应显示 10.x.x
```

### 2️⃣ 克隆仓库

```bash
sudo apt-get install -y git   # Ubuntu
# sudo yum install -y git     # CentOS

git clone https://github.com/yzp100911/xCrab-Agent.git
cd xCrab-Agent
```

### 3️⃣ 一键安装所有依赖

```bash
# 方式一：一键安装
npm run install:all
# 或 bash install-all.sh

# 方式二：手动分步
npm install
cd eclaw && npm install && cd ..
cd cclaw && npm install && cd ..
```

> 如果 `better-sqlite3` 编译报错：
> ```bash
> sudo apt-get install -y build-essential python3
> ```

### 4️⃣ 配置环境变量

```bash
cp .env.example .env
nano .env   # 填写 API 密钥
```

### 5️⃣ 启动组件

```bash
# 启动 AI 对话引擎
node index.js

# 启动中转调度服务器（新开终端）
node eclaw/server.js

# 启动远程执行终端（新开终端）
node cclaw/index.js
```

### 6️⃣ ★ 设置开机自启（systemd 服务）

**所有组件都提供了 systemd 服务文件：**

```bash
# 🧠 xCrab-Agent
sudo cp xcrab.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable xcrab
sudo systemctl start xcrab

# 📡 eclaw-server
sudo cp eclaw/eclaw.service /etc/systemd/system/
sudo systemctl enable eclaw
sudo systemctl start eclaw

# 🤖 claw-client
sudo cp cclaw/cclaw.service /etc/systemd/system/
sudo systemctl enable cclaw
sudo systemctl start cclaw
```

> ⚠️ 记得修改 `.service` 文件中的 `WorkingDirectory` 和 `ExecStart` 路径为你的实际部署路径。

---

## ⚙️ 环境变量完整说明

### 🧠 xCrab-Agent 配置

| 变量 | 默认值 | 必填 | 说明 |
|------|--------|------|------|
| `MINIMAX_API_KEY` | - | ✅ | MiniMax API 密钥 |
| `MINIMAX_BASE_URL` | `https://api.minimaxi.com/v1` | ❌ | MiniMax API 地址 |
| `DEEPSEEK_API_KEY` | - | ❌ | DeepSeek API 密钥 |
| `DEEPSEEK_BASE_URL` | `https://api.deepseek.com/v1` | ❌ | DeepSeek API 地址 |
| `MODEL` | `MiniMax-M2.7` | ❌ | 使用的模型 |
| `ENABLE_MEMORY` | `false` | ❌ | 启用持久化记忆 |
| `GATEWAY_ENABLED` | `false` | ❌ | 启用 Gateway HTTP 服务 |
| `GATEWAY_PORT` | `3000` | ❌ | Gateway 服务端口 |
| `GATEWAY_JWT_SECRET` | - | ❌ | Gateway JWT 密钥 |
| `GATEWAY_TOKEN` | - | ❌ | Gateway 静态令牌 |

### 📡 eclaw-server 配置

| 变量 | 默认值 | 必填 | 说明 |
|------|--------|------|------|
| `ECLAW_PORT` | `10090` | ❌ | 服务器监听端口 |
| `XCRAB_API_URL` | `http://localhost:3000` | ❌ | xCrab-Agent 网关地址 |
| `XCRAB_TOKEN` | - | ❌ | 鉴权令牌 |

### 🤖 claw-client 配置

| 变量 | 默认值 | 必填 | 说明 |
|------|--------|------|------|
| `ECLAW_API_URL` | `http://127.0.0.1:10090` | ✅ | eclaw-server API 地址 |
| `ECLAW_WS_URL` | `ws://127.0.0.1:10090/ws` | ✅ | eclaw-server WebSocket 地址 |
| `CCLAW_AI_BACKEND` | `xcrab` | ❌ | AI 后端选择（xcrab / hermes） |
| `XCRAB_GATEWAY_URL` | `http://localhost:3000` | ❌ | xCrab-Agent 网关地址 |
| `XCRAB_GATEWAY_TOKEN` | - | ❌ | xCrab-Agent 网关令牌 |

---

## 📁 项目结构

```
xCrab-Agent/
├── index.js                   # 🧠 AI 入口文件
├── package.json               # 根依赖配置
├── .env                       # 环境变量（从 .env.example 复制）
├── .env.example               # 环境变量模板
├── install-all.sh             # 一键安装脚本（Linux）
│
├── src/                       # 🧠 AI 核心源码
│   ├── cli.js                 # 命令行交互
│   ├── llm.js                 # LLM 调用
│   ├── tools.js               # 工具函数注册
│   ├── skill-manager.js       # 技能管理器
│   ├── gateway/               # HTTP API 网关
│   ├── mcp/                   # MCP 协议客户端
│   ├── workspace/             # 工作区管理
│   └── ...
│
├── skills/                    # 🧠 技能模块
├── tests/                     # 🧠 测试文件
│
├── eclaw/                     # 📡 中转调度服务器
│   ├── server.js              # 主服务器入口
│   ├── package.json           # 依赖配置（CommonJS）
│   ├── cloud-sync.js          # 云同步
│   ├── wclaw/                 # 网页前端
│   │   ├── index.html         # 主页面
│   │   ├── app.js             # 前端入口
│   │   ├── app-base.js        # 基础逻辑
│   │   ├── app-auth.js        # 登录认证
│   │   ├── app-main.js        # 主逻辑
│   │   ├── styles.css         # 样式
│   │   └── icon/              # 图标
│   └── README.md              # 部署说明
│
├── cclaw/                     # 🤖 远程执行终端
│   ├── index.js               # 终端入口
│   ├── package.json           # 依赖配置（CommonJS）
│   ├── status-monitor.js      # 状态监控
│   ├── send_hello.py          # 发送问候
│   ├── start.sh               # 启动脚本
│   ├── .playwright-cli/       # Playwright CLI
│   └── README.md              # 部署说明
│
├── xcrab.service              # 🧠 AI systemd 服务文件
├── eclaw/eclaw.service        # 📡 中转 systemd 服务文件（如存在）
├── cclaw/cclaw.service        # 🤖 终端 systemd 服务文件
│
├── uploads/                   # 文件上传目录
└── README.md                  # 本文件（中英文）
=======
### 2️⃣ 安装依赖

```bash
# 安装 Agent 依赖
npm install

# 安装 Server 依赖
cd server && npm install && cd ..

# 安装 Client 依赖
cd client && npm install && cd ..
```

### 3️⃣ 配置环境变量

**Agent 配置** — 复制并编辑 `.env`：

```bash
cp .env.example .env
```

关键参数：

| 参数 | 说明 | 示例 |
|------|------|:----:|
| `DEEPSEEK_API_KEY` | DeepSeek API 密钥 | `sk-xxx` |
| `MINIMAX_API_KEY` | MiniMax API 密钥 | `sk-xxx` |
| `MODEL` | 使用的 AI 模型 | `deepseek-v4-flash` |

**Server 配置** — 编辑 `server/.env`：

```bash
cp server/.env.example server/.env
```

| 参数 | 说明 | 示例 |
|------|------|:----:|
| `DB_HOST` | MySQL 主机 | `localhost` |
| `DB_USER` | MySQL 用户名 | `root` |
| `DB_PASS` | MySQL 密码 | `your_password` |
| `DB_NAME` | 数据库名 | `eclaw` |
| `JWT_SECRET` | JWT 签名密钥 | `your_jwt_secret` |
| `SERVER_PORT` | 服务端口 | `3000` |

**Client 配置** — 编辑 `client/.env`：

```bash
cp client/.env.example client/.env
```

| 参数 | 说明 | 示例 |
|------|------|:----:|
| `SERVER_URL` | Server 地址 | `ws://your-server:3000` |
| `TOKEN` | 认证令牌 | `your_token` |

### 4️⃣ 初始化数据库（Server 组件）

```sql
CREATE DATABASE IF NOT EXISTS eclaw CHARACTER SET utf8mb4;
```

Server 启动时会自动创建表结构。

### 5️⃣ 启动服务

```bash
# 方式一：分别启动（推荐调试）
npm run start:agent      # 启动 AI 大脑
npm run start:server     # 启动中转服务器
npm run start:client     # 启动远程客户端

# 方式二：一键启动全部
npm run start:all

# 方式三：直接启动 Agent（默认）
npm start
```

---

## 🏗️ 项目结构

```
xCrab-Agent/
├── index.js                 # Agent 入口（AI 大脑）
├── package.json             # 根依赖 & 启动脚本
├── .env                     # Agent 环境变量
├── .env.example
├── README.md                # ← 你在这里
│
├── src/                     # Agent 核心源码
│   ├── cli.js               # CLI 交互界面
│   ├── config.js            # 配置管理
│   ├── llm.js               # LLM 调用封装
│   ├── tools.js             # 工具调用系统
│   ├── skill-manager.js     # 技能管理器
│   ├── planner.js           # 任务规划器
│   ├── memory/              # 记忆系统
│   ├── mcp/                 # MCP 协议客户端
│   ├── gateway/             # WebSocket 网关
│   ├── workspace/           # 工作区管理
│   ├── stats/               # 统计 & 配额
│   └── hooks/               # 钩子系统
│
├── skills/                  # Agent 技能目录
├── data/                    # Agent 数据（工作区模板等）
│   ├── workspace-main/      # 默认工作区模板
│   └── canvas/              # 画布数据
│
├── server/                  # 中转调度服务器
│   ├── server.js            # 服务入口
│   ├── package.json
│   ├── .env / .env.example
│   ├── cloud-sync.js        # 云同步
│   ├── users.json           # 用户管理
│   ├── wclaw/               # Web 管理界面
│   └── uploads/             # 文件上传目录
│
├── client/                  # 远程终端执行器
│   ├── index.js             # 客户端入口
│   ├── package.json
│   ├── .env.example
│   ├── start.sh             # 启动脚本
│   ├── status-monitor.js    # 状态监控
│   ├── projects/            # 项目目录
│   └── data/                # 运行时数据
│
├── .gitignore
└── xcrab.service            # systemd 服务单元
>>>>>>> 14b740a (🎉 合并 eclaw-server 和 claw-client 到 xCrab-Agent 仓库)
```

---

## 🔧 systemd 自启动（Linux）

<<<<<<< HEAD
| 问题 | 解决方案 |
|------|----------|
| `MINIMAX_API_KEY` 未配置 | 检查 `.env` 文件是否正确配置 |
| `better-sqlite3` 安装失败 | 安装 build-essential（Linux）或 VS Build Tools（Windows） |
| 端口被占用 | 修改 `.env` 中的 `GATEWAY_PORT` 或 `ECLAW_PORT` |
| WebSocket 连接失败 | 检查 `ECLAW_WS_URL` 地址和端口是否正确 |
| eclaw-server 启动后无法访问前端 | 确认 `wclaw/` 目录存在且 `server.js` 正确配置了静态文件路径 |
=======
### Agent 自启动

```bash
sudo cp xcrab.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable xcrab
sudo systemctl start xcrab
```
>>>>>>> 14b740a (🎉 合并 eclaw-server 和 claw-client 到 xCrab-Agent 仓库)

### Server 自启动

```bash
sudo cp server/server.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable eclaw-server
sudo systemctl start eclaw-server
```

### Client 自启动

```bash
sudo cp client/cclaw.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable cclaw
sudo systemctl start cclaw
```

---

## 🔄 组件协作流程

```
用户 ──→ Agent（AI 大脑）
               │
               ├── 调用本地技能（skills/）
               │
               ├──→ Server（中转调度）
               │       │
               │       ├── 用户认证
               │       ├── 消息转发
               │       └── 文件服务
               │
               └──→ Client（远程执行）
                       │
                       ├── 执行终端命令
                       ├── 运行脚本
                       └── 返回执行结果
```

---

## 📝 版本

**当前版本：v260522**

| 组件 | 版本 |
|------|:----:|
| xCrab-Agent | v2.0.0 |
| eclaw-server | v1.0.0 |
| claw-client | v1.0.0 |

---

## 📜 许可证

MIT License © 2025 姚泽平
