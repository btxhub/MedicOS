// ARCHIVO: src/layout.tsx

import React, { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="app">

      <header className="topbar">
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
      </header>

      <main className="container">
        {children}
      </main>

    </div>
  )
}