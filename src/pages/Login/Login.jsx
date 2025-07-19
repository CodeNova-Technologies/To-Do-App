import React, { useState } from 'react';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Hardcoded credentials
  const VALID_CREDENTIALS = {
    username: 'kamesh',
    password: '1234'
  };

  const handleInputChange = (field) => (event) => {
    setCredentials(prev => ({
      ...prev,
      [field]: event.target.value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const validateForm = () => {
    if (!credentials.username.trim()) {
      setError('Username is required');
      return false;
    }
    if (!credentials.password.trim()) {
      setError('Password is required');
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    if (!validateForm()) return;
    
    setIsLoading(true);
    setError('');
    
    // Simulate API call delay
    setTimeout(() => {
      if (
        credentials.username === VALID_CREDENTIALS.username &&
        credentials.password === VALID_CREDENTIALS.password
      ) {
        setError('');
        alert('Login successful! Welcome back!');
        // Reset form after successful login
        setCredentials({ username: '', password: '' });
      } else {
        setError('Invalid username or password. Please try again.');
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderRadius: '16px',
        padding: '40px',
        minWidth: '400px',
        maxWidth: '450px',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        animation: 'fadeIn 0.8s ease-out'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <div style={{
            fontSize: '48px',
            marginBottom: '16px',
            color: '#667eea'
          }}>
            🔐
          </div>
          <h1 style={{
            fontSize: '32px',
            fontWeight: '600',
            background: 'linear-gradient(45deg, #667eea, #764ba2)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: '0 0 8px 0'
          }}>
            Welcome Back
          </h1>
          <p style={{
            color: '#666',
            margin: '0',
            fontSize: '14px'
          }}>
            Please sign in to your account
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div style={{
            background: '#ffebee',
            color: '#c62828',
            padding: '12px 16px',
            borderRadius: '8px',
            marginBottom: '20px',
            border: '1px solid #ffcdd2',
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            animation: 'slideIn 0.3s ease-out'
          }}>
            <span>⚠️ {error}</span>
            <button
              onClick={() => setError('')}
              style={{
                background: 'none',
                border: 'none',
                color: '#c62828',
                cursor: 'pointer',
                fontSize: '18px',
                padding: '0'
              }}
            >
              ×
            </button>
          </div>
        )}

        {/* Form */}
        <div>
          {/* Username Field */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: '#333',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              Username
            </label>
            <div style={{ position: 'relative' }}>
              <span style={{
                position: 'absolute',
                left: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#666',
                fontSize: '18px'
              }}>
                👤
              </span>
              <input
                type="text"
                value={credentials.username}
                onChange={handleInputChange('username')}
                onKeyPress={handleKeyPress}
                disabled={isLoading}
                placeholder="Enter your username"
                style={{
                  width: '100%',
                  padding: '16px 16px 16px 50px',
                  border: '2px solid #e1e5e9',
                  borderRadius: '12px',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  background: 'white',
                  boxSizing: 'border-box',
                  ...(isLoading && { opacity: 0.7, cursor: 'not-allowed' })
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#667eea';
                  e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e1e5e9';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
          </div>

          {/* Password Field */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: '#333',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <span style={{
                position: 'absolute',
                left: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#666',
                fontSize: '18px'
              }}>
                🔒
              </span>
              <input
                type={showPassword ? 'text' : 'password'}
                value={credentials.password}
                onChange={handleInputChange('password')}
                onKeyPress={handleKeyPress}
                disabled={isLoading}
                placeholder="Enter your password"
                style={{
                  width: '100%',
                  padding: '16px 50px 16px 50px',
                  border: '2px solid #e1e5e9',
                  borderRadius: '12px',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'all 0.3s ease',
                  background: 'white',
                  boxSizing: 'border-box',
                  ...(isLoading && { opacity: 0.7, cursor: 'not-allowed' })
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#667eea';
                  e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e1e5e9';
                  e.target.style.boxShadow = 'none';
                }}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                disabled={isLoading}
                style={{
                  position: 'absolute',
                  right: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '18px',
                  color: '#666',
                  padding: '0',
                  ...(isLoading && { cursor: 'not-allowed', opacity: 0.5 })
                }}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            disabled={isLoading}
            style={{
              width: '100%',
              padding: '16px',
              background: isLoading ? '#ccc' : 'linear-gradient(45deg, #667eea, #764ba2)',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              ...(isLoading ? {} : {
                ':hover': {
                  transform: 'translateY(-1px)',
                  boxShadow: '0 8px 25px rgba(102, 126, 234, 0.4)'
                }
              })
            }}
            onMouseEnter={(e) => {
              if (!isLoading) {
                e.target.style.transform = 'translateY(-1px)';
                e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.4)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isLoading) {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }
            }}
          >
            {isLoading ? (
              <>
                <div style={{
                  width: '20px',
                  height: '20px',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  borderTop: '2px solid white',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite'
                }}></div>
                Signing in...
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </div>

        {/* Demo Credentials */}
        <div style={{
          textAlign: 'center',
          marginTop: '24px',
          padding: '16px',
          background: '#f8f9fa',
          borderRadius: '8px',
          fontSize: '14px',
          color: '#666'
        }}>
          <div style={{ marginBottom: '4px' }}>Demo credentials:</div>
          <div>
            Username: <strong>kamesh</strong> | Password: <strong>1234</strong>
          </div>
        </div>

        {/* CSS Animations */}
        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeIn {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            
            @keyframes slideIn {
              from {
                opacity: 0;
                transform: translateX(-20px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
            
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `
        }} />
      </div>
    </div>
  );
};

export default Login;