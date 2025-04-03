"use client";

import "./ForgotPassword.css";

interface ForgotPasswordModalProps {
  onClose: () => void;
}

// export default function ForgotPasswordModal({ onClose }: ForgotPasswordModalProps) {
  export default function ForgotPasswordForm({ onClose }: ForgotPasswordModalProps) {
  return (
    <div className="fp-modal-overlay">
      <div className="fp-modal-container">
        <div className="fp-modal-content">
          <div className="fp-modal-header">
            <div className="fp-modal-heading">
              <h2 className="fp-modal-title">Forgot Password</h2>
            </div>
            <div className="fp-modal-heading-button">
              <button  className="fp-modal-close" onClick={onClose}>
                &times;
              </button>
            </div>
          </div>
          <div className="fp-modal-image-container ">
            <div className="fp-modal-illustration">
            <img
              src="/auth/article/Forgot Password illustration.png"
              alt="illustration"
            />
            </div>
          </div>
          <div className="fp-modal-details">
            <h1>
              We’ll send the link for you to reset your password.Please enter your email.
            </h1>
          </div>
          <div className="fp-email-textbox">
  <span className="fp-email-icon">
    <svg className="w-5 h-5 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z"/>
      <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z"/>
    </svg>
  </span>

  <input
    type="email"
    name="email"
    placeholder="Email"
    className="fp-email-field"
  />
</div>

          <div className="fp-modal-submit-btn">
            <button className="fp-modal-word"><h1>Confirm</h1></button>
          </div>
        </div>
      </div>
    </div>
  );
}
