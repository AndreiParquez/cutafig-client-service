import React from 'react';

const Test: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Test Page</h1>
      <p>This is a test page for development and testing purposes.</p>
      <div className="test-content">
        <h2>Component Testing</h2>
        <p>Use this page to test new components and features.</p>
        
        <div className="test-section">
          <h3>Sample Button</h3>
          <button style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '0.375rem',
            cursor: 'pointer'
          }}>
            Click Me
          </button>
        </div>
        
        <div className="test-section">
          <h3>Sample Form</h3>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px' }}>
            <input type="text" placeholder="Test input" style={{
              padding: '0.5rem',
              border: '1px solid #d1d5db',
              borderRadius: '0.375rem'
            }} />
            <button type="submit" style={{
              padding: '0.5rem',
              backgroundColor: '#10b981',
              color: 'white',
              border: 'none',
              borderRadius: '0.375rem',
              cursor: 'pointer'
            }}>
              Submit Test
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Test;