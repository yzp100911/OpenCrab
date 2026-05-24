#!/bin/bash
# xCrab 启动脚本
# 使用方式: ./start.sh
# 自动检测当前目录并启动

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR" || exit 1

echo "🦀 正在启动 xCrab... (目录: $SCRIPT_DIR)"

# 检查 .env 文件
if [ ! -f .env ]; then
    echo "⚠️  未检测到 .env 文件，正在从 .env.example 复制..."
    cp .env.example .env
    echo "⚠️  请编辑 .env 文件，填入 AUTH_TOKEN 和 MINIMAX_API_KEY"
    echo "   然后重新运行: ./start.sh"
    exit 1
fi

# 检查依赖
if [ ! -d node_modules ]; then
    echo "📦 正在安装依赖..."
    npm install
fi

# 使用 PM2 启动
export NODE_ENV=production
pm2 start ecosystem.config.cjs --env production 2>/dev/null || pm2 start npm --name xcrab -- start
pm2 save

echo "✅ xCrab 已启动！"
echo "   查看状态: pm2 status xcrab"
echo "   查看日志: pm2 logs xcrab"
