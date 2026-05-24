import Database from 'better-sqlite3';

export class MemoryStore {
  constructor({ dbPath }) {
    this.db = new Database(dbPath);
    this.init();
  }

  init() {
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS memories (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        key TEXT UNIQUE NOT NULL,
        value TEXT NOT NULL,
        category TEXT DEFAULT 'general',
        level TEXT DEFAULT 'mid',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
      CREATE INDEX IF NOT EXISTS idx_memories_key ON memories(key);
      CREATE INDEX IF NOT EXISTS idx_memories_category ON memories(category);
      CREATE INDEX IF NOT EXISTS idx_memories_level ON memories(level);
    `);
  }

  save(key, value, category = 'general', level = 'mid') {
    const stmt = this.db.prepare(`
      INSERT INTO memories (key, value, category, level, updated_at)
      VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP)
      ON CONFLICT(key) DO UPDATE SET
        value = excluded.value,
        category = excluded.category,
        level = excluded.level,
        updated_at = CURRENT_TIMESTAMP
    `);
    return stmt.run(key, value, category, level);
  }

  load(key) {
    const stmt = this.db.prepare('SELECT * FROM memories WHERE key = ?');
    return stmt.get(key);
  }

  search(query) {
    const stmt = this.db.prepare('SELECT * FROM memories WHERE value LIKE ?');
    return stmt.all(`%${query}%`);
  }

  getAll() {
    const stmt = this.db.prepare('SELECT * FROM memories ORDER BY updated_at DESC');
    return stmt.all();
  }

  close() {
    this.db.close();
  }
}
