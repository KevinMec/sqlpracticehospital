import { useState, useEffect } from 'react';
import initSqlJs from 'sql.js';
// Importamos el archivo WASM directamente desde la librería
import sqlWasm from 'sql.js/dist/sql-wasm.wasm?url';

export const useDatabase = () => {
  const [db, setDb] = useState(null);

  useEffect(() => {
    const loadDb = async () => {
      const SQL = await initSqlJs({ 
        locateFile: () => sqlWasm 
      });
      
      const response = await fetch('/portfolio.sqlite');
      const buffer = await response.arrayBuffer();
      setDb(new SQL.Database(new Uint8Array(buffer)));
    };
    loadDb();
  }, []);

  const runQuery = (sql) => {
    if (!db) return null;
    return db.exec(sql);
  };

  return { runQuery };
};