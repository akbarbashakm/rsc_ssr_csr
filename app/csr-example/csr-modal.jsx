'use client';

// Client Component for Modal in CSR Example
import { useState } from 'react';

export default function CSRModal({ content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        style={{
          padding: '0.75rem 1.5rem',
          background: '#ffc107',
          color: 'black',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '1rem',
          fontWeight: 'bold',
          marginTop: '1rem'
        }}
      >
        📋 Open Modal (CSR - Client Data)
      </button>

      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
          }}
          onClick={() => setIsOpen(false)}
        >
          <div
            style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '8px',
              maxWidth: '600px',
              width: '90%',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              maxHeight: '80vh',
              overflow: 'auto'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h2 style={{ margin: 0, color: '#ffc107' }}>CSR Modal - Client Content</h2>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  fontSize: '1.5rem',
                  cursor: 'pointer'
                }}
              >
                ✕
              </button>
            </div>
            <div>
              <p><strong>⚠️ Content fetched on CLIENT (Client-Side Rendering):</strong></p>
              <pre style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '4px', overflow: 'auto' }}>
                {JSON.stringify(content, null, 2)}
              </pre>
              <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
                💡 This data was fetched via API call on the client side!
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                marginTop: '1rem',
                padding: '0.5rem 1rem',
                background: '#ffc107',
                color: 'black',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                width: '100%',
                fontWeight: 'bold'
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
