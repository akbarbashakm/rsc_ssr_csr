'use client';

// Client Component for Modal
// This handles all interactivity (button clicks, modal open/close)

import { useState } from 'react';

export default function UserModal({ users }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const openModal = (user) => {
    setSelectedUser(user);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedUser(null);
  };

  return (
    <>
      {/* Button to open modal */}
      <div style={{ marginTop: '2rem' }}>
        <button
          onClick={() => openModal(users[0])} // Open modal with first user
          style={{
            padding: '0.75rem 1.5rem',
            background: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold'
          }}
        >
          🎯 Open User Modal
        </button>
      </div>

      {/* User List with clickable items */}
      <div style={{ marginTop: '1rem' }}>
        <p style={{ fontWeight: 'bold' }}>Click on any user to see details:</p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {users.map((user) => (
            <li 
              key={user.id} 
              onClick={() => openModal(user)}
              style={{ 
                padding: '0.75rem', 
                margin: '0.5rem 0', 
                background: '#f0f0f0',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.background = '#e0e0e0'}
              onMouseLeave={(e) => e.target.style.background = '#f0f0f0'}
            >
              <strong>{user.name}</strong> - {user.email} 👆
            </li>
          ))}
        </ul>
      </div>

      {/* Modal Overlay */}
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
          onClick={closeModal}
        >
          {/* Modal Content */}
          <div
            style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '8px',
              maxWidth: '500px',
              width: '90%',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h2 style={{ margin: 0 }}>User Details</h2>
              <button
                onClick={closeModal}
                style={{
                  background: 'transparent',
                  border: 'none',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  padding: '0.25rem 0.5rem'
                }}
              >
                ✕
              </button>
            </div>

            {selectedUser && (
              <div>
                <p><strong>ID:</strong> {selectedUser.id}</p>
                <p><strong>Name:</strong> {selectedUser.name}</p>
                <p><strong>Email:</strong> {selectedUser.email}</p>
              </div>
            )}

            <button
              onClick={closeModal}
              style={{
                marginTop: '1rem',
                padding: '0.5rem 1rem',
                background: '#0070f3',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                width: '100%'
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
