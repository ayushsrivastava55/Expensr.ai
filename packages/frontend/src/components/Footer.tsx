const footerStyle: React.CSSProperties = {
  width: '100%',
  background: '#181C23',
  borderTop: '1px solid #232834',
  color: '#A1A6B2',
  fontSize: '14px',
  padding: '12px 16px',
  marginTop: 'auto',
  boxShadow: '0 4px 24px rgba(0,0,0,0.24)',
};
const containerStyle: React.CSSProperties = {
  maxWidth: '80rem',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <span>© {new Date().getFullYear()} Raseed. All rights reserved.</span>
        <span style={{ display: 'none', sm: { display: 'inline' } }}>AI-powered receipt manager & financial advisor</span>
      </div>
    </footer>
  );
} 