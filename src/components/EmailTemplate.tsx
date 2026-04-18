interface EmailTemplateProps {
  email: string;
  phone: string;
  messenger: string;
  message: string;
}

export default function EmailTemplate({ email, phone, messenger, message }: EmailTemplateProps) {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', color: '#333' }}>
      <h1 style={{ borderBottom: '1px solid #eee', paddingBottom: '10px' }}>New Contact Form Submission</h1>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone || 'Not provided'}</p>
      <p><strong>Messenger:</strong> {messenger}</p>
      <div style={{ marginTop: '20px', borderTop: '1px solid #eee', paddingTop: '10px' }}>
        <strong>Message:</strong>
        <p style={{ whiteSpace: 'pre-wrap' }}>{message}</p>
      </div>
    </div>
  );
}