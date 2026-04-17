import React from 'react'

export default function Layout({ children }) {
  return (
    <div style={{ minHeight:'100vh', display:'flex', flexDirection:'column', fontFamily:'sans-serif' }}>
      
      <header style={{
        height:'60px',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        padding:'0 20px',
        borderBottom:'1px solid #e5e7eb',
        background:'#ffffff'
      }}>
        <div style={{ color:'#6c4cff', fontWeight:600 }}>MedicOS</div>

        <nav style={{ display:'flex', gap:'16px' }}>
          <span>Panel</span>
          <span>Pacientes</span>
          <span>Agenda</span>
          <span>HCE</span>
        </nav>

        <button style={{
          background:'#6c4cff',
          color:'#fff',
          border:'none',
          padding:'8px 12px',
          borderRadius:'6px'
        }}>
          Nueva Cita
        </button>
      </header>

      <main style={{ flex:1, padding:'20px', background:'#f5f6fa' }}>
        {children}
      </main>

    </div>
  )
}