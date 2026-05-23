/**
 * cloud-sync.js - 云服务器 SSH 隧道与数据同步模块
 *
 * 功能：
 * 1. 启动 SSH 隧道到云服务器 MySQL
 * 2. 提供通过隧道连接云 MySQL 的配置
 * 3. 备用：直接通过 SSH 执行 SQL 的同步接口
 */
const { spawn } = require('child_process');
const path = require('path');
const net = require('net');

// ====== 配置 ======
const SSH_KEY = path.join(process.env.USERPROFILE || 'C:\\Users\\Administrator', '.ssh', 'cloud_server_ed25519');
const SSH_HOST = 'ubuntu@119.29.196.58';
const DB_USER = 'wclaw_db';
const DB_PASS = '100911yzpYZP';
const DB_NAME = 'wclaw_db';

// MySQL 端口（服务端、执行端、网页端都在同一台服务器，直连 3306）
const DB_PORT = 3306;

// ====== SSH 隧道管理 ======
let tunnelProcess = null;

/**
 * 启动 SSH 隧道到云服务器 MySQL
 * @returns {Promise<void>}
 */
function startTunnel() {
    // 服务端、执行端、网页端都在同一台服务器，无需 SSH 隧道
    return Promise.resolve();
}

/**
 * 停止 SSH 隧道
 */
function stopTunnel() {
    if (tunnelProcess) {
        console.log('[Cloud Tunnel] 正在关闭隧道...');
        tunnelProcess.kill('SIGTERM');
        tunnelProcess = null;
    }
}

/**
 * 获取云 MySQL 连接配置（通过本地隧道）
 */
function getCloudDbConfig() {
    return {
        host: '127.0.0.1',
        port: DB_PORT,
        user: DB_USER,
        password: DB_PASS,
        database: DB_NAME,
        charset: 'utf8mb4',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    };
}

// ====== MySQL 转义工具 ======
function escapeSql(val) {
    if (val === null || val === undefined) return 'NULL';
    return "'" + String(val).replace(/'/g, "''") + "'";
}

// ====== 备用：直连 SSH 执行 SQL ======
function execSqlOnCloud(sql) {
    return new Promise((resolve, reject) => {
        const proc = spawn('ssh', [
            '-i', SSH_KEY,
            '-o', 'StrictHostKeyChecking=no',
            '-o', 'ConnectTimeout=10',
            SSH_HOST,
            `mysql -u ${DB_USER} -p${DB_PASS} ${DB_NAME}`
        ], {
            windowsHide: true,
            timeout: 15000
        });

        let stdout = '', stderr = '';
        proc.stdout.on('data', (d) => stdout += d);
        proc.stderr.on('data', (d) => stderr += d);

        proc.on('close', (code) => {
            if (code === 0) resolve(stdout);
            else reject(new Error(stderr || `exit code ${code}`));
        });
        proc.on('error', reject);

        proc.stdin.write(sql);
        proc.stdin.end();
    });
}

/**
 * 同步收藏到云服务器（备用接口）
 */
async function syncFavorite(username, msgId, content) {
    // 所有端都在同一台服务器，数据已直连写入，无需额外同步
}

/**
 * 从云服务器取消收藏同步（备用接口）
 */
async function unsyncFavorite(username, msgId) {
    // 所有端都在同一台服务器，数据已直连写入，无需额外同步
}

module.exports = {
    startTunnel,
    stopTunnel,
    getCloudDbConfig,
    syncFavorite,
    unsyncFavorite
};
