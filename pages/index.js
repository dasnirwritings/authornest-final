import { useState } from 'react';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    alert("Login logic will be connected next.");
    // In a real scenario, this is where you'd call Supabase
    setTimeout(() => setLoading(false), 1000);
  };

  const styles = {
    pageContainer: {
      display: 'flex',
      width: '100vw',
      height: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      color: '#111827',
    },
    leftPanel: {
      width: '50%',
      backgroundImage: 'url(https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1973&auto=format&fit=crop)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    overlay: {
      position: 'absolute',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    branding: {
      position: 'relative',
      textAlign: 'center',
      color: 'white',
      padding: '40px',
    },
    logo: {
      fontSize: '3rem',
      fontWeight: 'bold',
      margin: 0,
    },
    tagline: {
      fontSize: '1.25rem',
      opacity: 0.9,
      marginTop: '1rem',
    },
    rightPanel: {
      width: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px',
      backgroundColor: '#ffffff',
    },
    formContainer: {
      width: '100%',
      maxWidth: '400px',
    },
    formTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
    },
    formSubtitle: {
      fontSize: '1rem',
      color: '#6b7280',
      marginBottom: '2.5rem',
    },
    inputGroup: {
      marginBottom: '1.5rem',
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      fontWeight: '600',
      fontSize: '0.875rem',
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      border: '1px solid #d1d5db',
      borderRadius: '0.5rem',
      boxSizing: 'border-box',
      fontSize: '1rem',
    },
    button: {
      width: '100%',
      padding: '0.9rem',
      border: 'none',
      borderRadius: '0.5rem',
      backgroundColor: '#111827',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '1rem',
      cursor: 'pointer',
    },
    divider: {
      height: '1px',
      backgroundColor: '#e5e7eb',
      margin: '2rem 0',
    },
    signupText: {
      textAlign: 'center',
      color: '#6b7280',
      fontSize: '0.875rem',
    },
    link: {
      color: '#111827',
      fontWeight: '600',
      textDecoration: 'none',
    }
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.leftPanel}>
        <div style={styles.overlay}></div>
        <div style={styles.branding}>
          <h1 style={styles.logo}>🪶 AuthorNest</h1>
          <p style={styles.tagline}>Your complete world for writing, marketing, and success.</p>
        </div>
      </div>
      <div style={styles.rightPanel}>
        <div style={styles.formContainer}>
          <h2 style={styles.formTitle}>Welcome Back</h2>
          <p style={styles.formSubtitle}>Sign in to continue to your portal.</p>
          <form onSubmit={handleLogin}>
            <div style={styles.inputGroup}>
              <label htmlFor="email" style={styles.label}>Email Address</label>
              <input id="email" type="email" style={styles.input} required />
            </div>
            <div style={styles.inputGroup}>
              <label htmlFor="password" style={styles.label}>Password</label>
              <input id="password" type="password" style={styles.input} required />
            </div>
            <button type="submit" style={styles.button} disabled={loading}>
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>
          <div style={styles.divider}></div>
          <p style={styles.signupText}>
            Don&apos;t have an account?{' '}
            <a href="#" style={styles.link}>Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
    }
