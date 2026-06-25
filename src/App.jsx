import { useState } from 'react';
import { useDatabase } from './hooks/useDatabase';
import './App.css';

function App() {
  const { runQuery } = useDatabase();
  const [data, setData] = useState(null);

  const handleQuery = () => {
    const result = runQuery("SELECT * FROM Medicos");
    if (result && result.length > 0) {
      setData(result[0].values);
    }
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>🏥 SQL Hospital: Portafolio</h1>
      <p>Bienvenido al sistema de gestión. Presiona el botón para consultar los médicos:</p>
      
      <button 
        onClick={handleQuery}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        Consultar Médicos
      </button>

      {data && (
        <table style={{ marginTop: '20px', width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#f4f4f4' }}>
              <th>ID</th>
              <th>Nombre</th>
              <th>Especialidad ID</th>
              <th>Salario</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
                <td>{row[0]}</td>
                <td>{row[1]}</td>
                <td>{row[2]}</td>
                <td>${row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;