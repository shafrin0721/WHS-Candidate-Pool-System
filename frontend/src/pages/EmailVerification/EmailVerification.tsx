import React, { useState, useEffect } from 'react';
import type { ClipboardEvent, KeyboardEvent } from 'react';

const EmailVerification: React.FC = () => {
  const [code, setCode] = useState<string[]>(['', '', '', '', '', '']);
  const [timer, setTimer] = useState<number>(30);
  const [isResendDisabled, setIsResendDisabled] = useState<boolean>(true);
  const [isVerifying, setIsVerifying] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [isVerified, setIsVerified] = useState<boolean>(false);

  // Timer effect for resend button
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;
    
    if (isResendDisabled && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsResendDisabled(false);
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isResendDisabled, timer]);

  const handleCodeChange = (index: number, value: string): void => {
    // Allow only numbers
    if (value && !/^\d+$/.test(value)) return;
    
    const newCode = [...code];
    // Take only last character if more than one digit is pasted
    newCode[index] = value.slice(-1);
    setCode(newCode);
    setError('');

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>): void => {
    // Handle backspace to move to previous input
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      const prevInput = document.getElementById(`code-input-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLDivElement>): void => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    if (/^\d+$/.test(pastedData)) {
      const digits = pastedData.split('');
      const newCode = [...code];
      for (let i = 0; i < digits.length; i++) {
        if (i < 6) newCode[i] = digits[i];
      }
      setCode(newCode);
      // Focus last filled or next empty
      const lastFilledIndex = Math.min(digits.length, 5);
      const nextInput = document.getElementById(`code-input-${lastFilledIndex}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleVerify = async (): Promise<void> => {
    const enteredCode = code.join('');
    if (enteredCode.length !== 6) {
      setError('Please enter the full 6-digit code');
      return;
    }

    setIsVerifying(true);
    setError('');

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // Demo: Accept any 6-digit code for demonstration
      if (enteredCode.length === 6) {
        setIsVerified(true);
      } else {
        setError('Invalid verification code. Please try again.');
      }
    } catch (err) {
      setError('Verification failed. Please try again.');
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResendCode = async (): Promise<void> => {
    setIsResendDisabled(true);
    setTimer(30);
    setError('');
    // Simulate resend API call
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log('Code resent to email');
  };

  if (isVerified) {
    return (
      <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, #eff6ff, #e0e7ff)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
        <div style={{ backgroundColor: 'white', borderRadius: '1rem', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)', maxWidth: '28rem', width: '100%', padding: '2rem', textAlign: 'center' }}>
          <div style={{ width: '4rem', height: '4rem', backgroundColor: '#dcfce7', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
            <svg style={{ width: '2rem', height: '2rem', color: '#16a34a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '0.5rem' }}>Email Verified!</h2>
          <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>Your email has been successfully verified.</p>
          <button
            onClick={() => window.location.reload()}
            style={{ width: '100%', backgroundColor: '#4f46e5', color: 'white', fontWeight: '600', padding: '0.5rem 1rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer', transition: 'background-color 0.2s' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4338ca'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4f46e5'}
          >
            Continue to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, #eff6ff, #e0e7ff)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
      <div style={{ backgroundColor: 'white', borderRadius: '1rem', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)', maxWidth: '28rem', width: '100%', padding: '2rem' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>CandidateHub</h1>
          <div style={{ height: '0.25rem', width: '3rem', backgroundColor: '#4f46e5', borderRadius: '9999px', margin: '0.5rem auto 0' }}></div>
        </div>

        {/* Main Content */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '1.875rem' }}>✉️</span>
          </div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>VERIFY YOUR EMAIL</h2>
          <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
            We sent a 6-digit code to: <span style={{ fontWeight: '500', color: '#374151' }}>j***@example.com</span>
          </p>

          {/* 6-Digit Code Input */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.5rem' }} onPaste={handlePaste}>
            {code.map((digit, index) => (
              <input
                key={index}
                id={`code-input-${index}`}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleCodeChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                style={{ width: '3rem', height: '3rem', textAlign: 'center', fontSize: '1.5rem', fontWeight: '600', border: '2px solid #d1d5db', borderRadius: '0.5rem', outline: 'none', transition: 'all 0.2s' }}
                onFocus={(e) => e.currentTarget.style.borderColor = '#4f46e5'}
                onBlur={(e) => e.currentTarget.style.borderColor = '#d1d5db'}
                aria-label={`Digit ${index + 1} of verification code`}
              />
            ))}
          </div>

          {error && (
            <div style={{ marginBottom: '1rem', padding: '0.5rem', backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '0.5rem' }}>
              <p style={{ color: '#dc2626', fontSize: '0.875rem' }}>{error}</p>
            </div>
          )}

          {/* Verify Button */}
          <button
            onClick={handleVerify}
            disabled={isVerifying}
            style={{ width: '100%', backgroundColor: '#4f46e5', color: 'white', fontWeight: '600', padding: '0.5rem 1rem', borderRadius: '0.5rem', border: 'none', cursor: isVerifying ? 'not-allowed' : 'pointer', transition: 'background-color 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', opacity: isVerifying ? 0.7 : 1 }}
            onMouseEnter={(e) => !isVerifying && (e.currentTarget.style.backgroundColor = '#4338ca')}
            onMouseLeave={(e) => !isVerifying && (e.currentTarget.style.backgroundColor = '#4f46e5')}
          >
            {isVerifying ? (
              <>
                <svg className="animate-spin" style={{ height: '1.25rem', width: '1.25rem', color: 'white' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Verifying...
              </>
            ) : (
              <>
                <span>🔍</span> Verify
              </>
            )}
          </button>

          {/* Resend Section */}
          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
              Didn't receive the code?{' '}
              <button
                onClick={handleResendCode}
                disabled={isResendDisabled}
                style={{ background: 'none', border: 'none', fontWeight: '500', cursor: isResendDisabled ? 'not-allowed' : 'pointer', color: isResendDisabled ? '#9ca3af' : '#4f46e5', transition: 'color 0.2s' }}
                onMouseEnter={(e) => !isResendDisabled && (e.currentTarget.style.color = '#4338ca')}
                onMouseLeave={(e) => !isResendDisabled && (e.currentTarget.style.color = '#4f46e5')}
              >
                Resend code {isResendDisabled && `(${timer}s)`}
              </button>
            </p>
          </div>

          {/* Secure Verification Banner */}
          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #f3f4f6' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '0.75rem', color: '#9ca3af' }}>
              <svg style={{ width: '1rem', height: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Secure Verification</span>
            </div>
            <p style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '0.5rem' }}>
              To ensure the security of your TalentPulse recruitment suite, please verify your identity with the code sent to your inbox.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div style={{ marginTop: '1.5rem', paddingTop: '1rem', textAlign: 'center', fontSize: '0.75rem', color: '#9ca3af', borderTop: '1px solid #f3f4f6' }}>
          <p>© 2024 TalentPulse Recruitment Suite. All rights reserved.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '0.25rem' }}>
            <a href="#" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#6b7280'} onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}>Privacy Policy</a>
            <a href="#" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#6b7280'} onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}>Help Center</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;