#!/bin/bash
# ══════════════════════════════════════════════
# OpenCrab 全家桶 — 一键安装脚本
# 安装 OpenCrab + Eclaw-Server + Claw-Client
# ══════════════════════════════════════════════

set -e

echo "🦀 OpenCrab 全家桶安装中..."
echo ""

# 1. 安装 OpenCrab 依赖（含 server/ 和 client/）
echo "━━━ [安装] 🧠 OpenCrab（含所有组件依赖） ━━━"
cd "$(dirname "$0")"
npm install
echo "✅ OpenCrab 安装完成"
echo ""

echo "═══════════════════════════════════════"
echo "🎉 OpenCrab 全家桶安装完成！"
echo ""
echo "📁 目录结构："
echo "  ./              - 🧠 OpenCrab（AI 大脑）"
echo "  ./server/       - 📡 Eclaw-Server（中转调度）"
echo "  ./client/       - 🤖 Claw-Client（远程执行）"
echo ""
echo "🚀 启动方式："
echo "  npm start            # 仅启动 AI 大脑"
echo "  npm run start:server # 启动中转服务器"
echo "  npm run start:client # 启动远程客户端"
echo "  npm run start:all    # 一键启动全部"
echo ""
echo "📖 详细文档：cat README.md"
echo "═══════════════════════════════════════"