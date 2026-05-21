# xCrab-Agent 🦀

**xCrab** — 迷你型 AI 个人助手

基于 MiniMax 和 DeepSeek 驱动的多模型 AI 网关，支持工具调用、浏览器自动化和技能扩展。

---

## 🚀 快速开始

### 1. 克隆仓库

```bash
git clone https://github.com/yzp100911/xCrab-Agent.git
cd xCrab-Agent
```

### 2. 安装依赖

```bash
npm install
```

### 3. 配置环境变量

```bash
# 将示例配置文件重命名为 .env
cp .env.example .env
```

### 4. 编辑 `.env` 文件

打开 `.env` 文件，填写你的密钥：

| 变量 | 说明 |
|------|------|
| `MINIMAX_API_KEY` | MiniMax API 密钥 |
| `DEEPSEEK_API_KEY` | DeepSeek API 密钥 |
| `GITHUB_TOKEN` | GitHub 个人访问令牌 |
| 其他配置项 | 按需修改 |

### 5. 启动

```bash
npm start
```

---

## 📁 项目结构

```
xCrab-Agent/
├── src/            # 核心源码
├── skills/         # 技能模块
├── tools/          # 工具函数
├── tests/          # 测试文件
├── .env.example    # 环境变量模板
└── package.json    # 依赖配置
```

---

## ⚙️ 环境变量说明

> 首次使用前，**必须**将 `.env.example` **重命名**为 `.env`，否则程序无法正常运行。

```bash
cp .env.example .env
```

然后根据你的需求修改 `.env` 中的配置值。

---

## 📝 许可证

MIT
