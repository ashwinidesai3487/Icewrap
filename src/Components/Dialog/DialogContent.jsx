import React, { useState } from 'react';
import { FaCheckCircle, FaInfoCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const DialogContent = () => {
  const [showAbout, setShowAbout] = useState(true);
  const [showFeatures, setShowFeatures] = useState(true);
  const [showStatus, setShowStatus] = useState(true);

  const [statusOptions, setStatusOptions] = useState({
    success: false,
    error: false,
    pending: false,
  });

  const handleCheckboxChange = (key) => {
    setStatusOptions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div
      className='mt-3'
      style={{
        maxHeight: '350px',
        overflowY: 'auto',
        padding: '1.5rem',
        border: '1px solid #ddd',
        borderRadius: '10px',
        backgroundColor: '#f9f9f9',
        fontSize: '15px',
        lineHeight: '1.6',
        marginTop: '10px',
      }}
    >
      {/* About Section */}
      <div style={{ marginBottom: '1rem' }}>
        <h4
          onClick={() => setShowAbout(!showAbout)}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        >
          <FaInfoCircle style={{ marginRight: '8px' }} />
          About Lorem Ipsum
          {showAbout ? (
            <FaChevronUp style={{ marginLeft: 'auto' }} />
          ) : (
            <FaChevronDown style={{ marginLeft: 'auto' }} />
          )}
        </h4>
        {showAbout && (
          <p>
            <strong>Lorem Ipsum</strong> is dummy text used in typesetting and printing since the 1500s. It provides a distraction-free way to showcase layout and design elements without the need for real content.
          </p>
        )}
      </div>

      {/* Feature List */}
      <div style={{ marginBottom: '1rem' }}>
        <h4
          onClick={() => setShowFeatures(!showFeatures)}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        >
          📌 Key Features
          {showFeatures ? (
            <FaChevronUp style={{ marginLeft: 'auto' }} />
          ) : (
            <FaChevronDown style={{ marginLeft: 'auto' }} />
          )}
        </h4>
        {showFeatures && (
          <ul style={{ paddingLeft: '20px' }}>
            <li>Standard placeholder for layout testing</li>
            <li>Used in publishing and web design</li>
            <li>Helps focus on visual structure, not text content</li>
          </ul>
        )}
      </div>

      {/* Status Section */}
      <div style={{ marginBottom: '1rem' }}>
        <h4
          onClick={() => setShowStatus(!showStatus)}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        >
          ✅ Status
          {showStatus ? (
            <FaChevronUp style={{ marginLeft: 'auto' }} />
          ) : (
            <FaChevronDown style={{ marginLeft: 'auto' }} />
          )}
        </h4>

        {showStatus && (
          <div
            style={{
              backgroundColor: '#e7f3e7',
              padding: '10px 16px',
              borderRadius: '6px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <FaCheckCircle color="green" style={{ marginRight: '10px' }} />
              <span><strong>Status:</strong> Approved Template</span>
            </div>

            {/* Checkbox Options */}
            <div style={{ marginTop: '10px', fontSize: '14px' }}>
              <label style={{ display: 'block', marginBottom: '6px' }}>
                <input
                  type="checkbox"
                  checked={statusOptions.success}
                  onChange={() => handleCheckboxChange('success')}
                />{' '}
                Success
              </label>
              <label style={{ display: 'block', marginBottom: '6px' }}>
                <input
                  type="checkbox"
                  checked={statusOptions.error}
                  onChange={() => handleCheckboxChange('error')}
                />{' '}
                Error
              </label>
              <label style={{ display: 'block' }}>
                <input
                  type="checkbox"
                  checked={statusOptions.pending}
                  onChange={() => handleCheckboxChange('pending')}
                />{' '}
                Pending
              </label>
            </div>
          </div>
        )}
      </div>

      <div style={{ textAlign: 'right' }}>
        <a
          href="https://www.lipsum.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#007bff', textDecoration: 'underline' }}
        >
          Learn more
        </a>
      </div>
    </div>
  );
};

export default DialogContent;
