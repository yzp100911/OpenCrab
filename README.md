# skillgate-agent 🦀

基于 MiniMax-M2.7 的智能 AI 助手套件，包含 **xCrab (AI执行引擎)**、**eclaw (服务分发器)**、**cclaw (远程分发器)** 和 **wclaw (Web客户端)** 四大核心组件。

一套仓库，完整部署。

---

## ⚠️ 品牌声明

**skillgate-agent** 是一个独立的国产开源项目，与 [OpenClaw](https://github.com/openclaw/openclaw)（开源 AI 代理框架）不存在任何关联、衍生、授权或赞助关系。

### 项目定位

skillgate-agent 是一个**多模型 AI 网关**，专注于：
- 模型聚合与路由
- 统一 API 接入
- 高速低延迟转发服务
- 支持 MiniMax、DeepSeek 等国内主流模型

### 命名由来

- **"Crab"** 意为螃蟹 — 象征高效、快速、横向移动
- 整体命名遵循开源社区常见的动物命名惯例（如 TensorFlow、Camel 等），无意模仿或混淆任何已有品牌

### 商标声明

1. skillgate-agent 的项目名称及相关标识均由项目作者独立创作
2. 如需在商业产品中使用 skillgate-agent 代码或名称，请自行评估并承担相关法律责任
3. 项目作者不对因使用本项目产生的任何商标或知识产权纠纷承担责任

### 联系方式

如有品牌相关问题，请通过 GitHub Issues 联系项目维护者。

---

## 功能特性

- 🤖 **AI 对话** - 基于 MiniMax-M2.7 模型
- 🦀 **技能系统** - 支持动态加载各种技能（如浏览器自动化、翻译等）
- 💾 **记忆系统** - 支持对话历史存储和检索
- 🔐 **Gateway 认证** - 支持 Token 认证保护
- 🌐 **浏览器自动化** - 可选支持 Playwright 浏览器控制
- 📡 **多模块架构** - 集成 xCrab、eclaw、cclaw、wclaw 四大模块

## 快速部署

### 方式一：一键部署（推荐）

```bash
git clone https://github.com/yzp100911/skillgate-agent.git
cd skillgate-agent
chmod +x deploy.sh
./deploy.sh
```

### 方式二：手动部署（Linux 服务器）

```bash
# 1. 克隆仓库
git clone https://github.com/yzp100911/skillgate-agent.git
cd skillgate-agent

# 2. 进入 xCrab 目录
cd xCrab

# 3. 安装依赖
npm install

# 4. 配置环境变量
cp .env.example .env
nano .env  # 编辑填入 AUTH_TOKEN 和 MINIMAX_API_KEY

# 5. 启动服务
chmod +x start.sh
./start.sh

# 6. 验证服务
curl -H "Authorization: Bearer YOUR_AUTH_TOKEN" \
     http://localhost:60016/api/chat \
     -d '{"message":"你好"}'
```

### 方式三：Windows 部署

```bash
git clone https://github.com/yzp100911/skillgate-agent.git
cd skillgate-agent\xCrab
npm install
copy .env.example .env
npm start
```

## 环境要求

- Node.js 18+
- PM2（进程管理器，Linux 必需）
- Git

## 配置说明

编辑 xCrab/.env 文件：

```bash
# 必填
AUTH_TOKEN=your_secure_token_here
MINIMAX_API_KEY=your_api_key_here

# 可选（已有默认值）
MINIMAX_BASE_URL=https://api.minimaxi.com/v1
MINIMAX_MODEL=MiniMax-M2.7
PORT=60016
ENABLE_MEMORY=true
GATEWAY_ENABLED=true
GATEWAY_TOKEN=your_gateway_token_here
```

## API 使用

### 聊天接口

```bash
curl -X POST http://localhost:60016/api/chat \
  -H "Authorization: Bearer YOUR_AUTH_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"message":"你好，请介绍一下你自己"}'
```

### 响应格式

```json
{
  "code": 200,
  "data": {
    "content": "你好！我是 xCrab...",
    "sessionId": "xxx-xxx-xxx"
  }
}
```

## PM2 管理命令

```bash
pm2 status xcrab       # 查看状态
pm2 logs xcrab         # 查看日志
pm2 restart xcrab      # 重启
pm2 stop xcrab         # 停止
pm2 delete xcrab       # 删除进程
```

## 📂 目录结构

```
skillgate-agent/
├── deploy.sh                 # 一键部署脚本
├── README.md                 # 中文文档
├── README_EN.md              # 英文文档
├── .env.example              # 根环境变量模板
├── LICENSE                   # 许可证
├── xCrab/                    # AI 执行引擎
│   ├── index.js              # 主入口
│   ├── src/                  # 核心源码
│   │   ├── tools.js          # 工具函数
│   │   └── memory/           # 记忆系统
│   ├── skills/               # 技能模块
│   ├── eclaw/                # 服务分发器
│   ├── cclaw/                # 远程分发器
│   ├── wclaw/                # Web 客户端
│   ├── data/                 # 数据存储
│   ├── start.sh              # 启动脚本
│   ├── ecosystem.config.cjs  # PM2 配置
│   └── .env.example          # 环境变量模板
```

## 📄 许可证

本项目采用 [MIT 许可证](LICENSE) 开源。

---

<p align="center">
  <strong>skillgate-agent</strong> — 让 AI 助手触手可及
</p>
