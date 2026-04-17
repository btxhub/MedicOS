import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles-opcion2.css'
import Layout from './layout'

function Topbar() {
  return (
    <div className="topbar">
      <div style={{ display:'flex', gap:'20px', alignItems:'center' }}>
        <h2 className="logo">MedicOS</h2>

        <div className="menu">
          <span className="menu-item menu-item-active">📊 Panel</span>
          <span className="menu-item">👤 Pacientes</span>
          <span className="menu-item">📅 Agenda</span>
          <span className="menu-item">📄 HCE</span>
        </div>
      </div>

      <button className="button-primary">
        Nueva Cita
      </button>
    </div>
  )
}

function Card({ title, value }) {
  return (
    <div className="card">
      <p style={{ margin:0, fontSize:'12px', color:'#6b7280' }}>{title}</p>
      <h2 style={{ margin:'4px 0 0 0' }}>{value}</h2>
    </div>
  )
}

function Table() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Paciente</th>
          <th>Estado</th>
          <th>Última consulta</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Juan Pérez</td>
          <td style={{ color:'#16a34a' }}>Activo</td>
          <td>12/03/2026</td>
        </tr>
        <tr>
          <td>María López</td>
          <td style={{ color:'#dc2626' }}>Inactivo</td>
          <td>01/02/2026</td>
        </tr>
      </tbody>
    </table>
  )
}

export default function App() {
  return (
    <Layout>
      <div className="container">

        <div className="grid">
          <Card title="Pacientes" value="120" />
          <Card title="Citas" value="18" />
        </div>

        <div style={{
          marginTop:'20px',
          background:'#fff',
          padding:'16px',
          border:'1px solid #e5e7eb',
          borderRadius:'8px'
        }}>
          <Table />
        </div>

      </div>
    </Layout>
  )
}

const root = document.getElementById('root')

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)