---
name: uploads
description: 文件上传与管理 - 创建文件、查找并复制文件到 uploads 目录，返回可访问链接
---

# Uploads 技能 - 文件上传与管理

## 核心配置

| 项目 | 值 |
|------|-----|
| **工作目录** | `/www/wwwroot/eclaw/uploads/` |
| **基础链接** | `http://xunrf.cn:10090/uploads/` |
| **操作方式** | 用 shell 命令创建/复制文件到该目录 |
| **返回格式** | 拼凑完整链接发回给用户 |

## 用法

### ① 创建文件
当用户说"帮我创建一个文件"时：
```bash
echo "文件内容" > /www/wwwroot/eclaw/uploads/文件名
```
然后回复链接：👉 `http://xunrf.cn:10090/uploads/文件名`

### ② 查找并复制文件到 uploads
当用户说"帮我找到服务器上的某个文件并复制"时：
```bash
cp /原路径/文件 /www/wwwroot/eclaw/uploads/
```
然后回复链接：👉 `http://xunrf.cn:10090/uploads/文件名`

## 注意事项
- 文件内容包含特殊字符时，使用 `cat > 文件 << 'EOF' ... EOF` 方式写入
- 中文字符注意编码
- 确保目标目录存在
