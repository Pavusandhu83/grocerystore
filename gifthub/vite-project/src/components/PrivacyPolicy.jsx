import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from 'react';
const PrivacyPolicy = () => {
  useEffect(() => {
            document.title = "PrivacyPolicy";
          }, []);
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Privacy Policy</h1>
      <p className="text-gray-700 mb-4">Effective Date: [15-10-2002]</p>

      <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Personal Information:</strong> Name, email, phone, delivery address.</li>
        <li><strong>Payment Information:</strong> Processed securely via payment providers.</li>
        <li><strong>Browsing Information:</strong> IP address, browser type, usage data via cookies.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Process and fulfill orders.</li>
        <li>Enhance shopping experience.</li>
        <li>Send order updates and promotional offers.</li>
        <li>Ensure security and prevent fraud.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">3. Information Sharing</h2>
      <p className="mb-4">We do not sell your personal data. We may share it with trusted third parties for payments, deliveries, and legal compliance.</p>

      <h2 className="text-2xl font-semibold mb-2">4. Cookies & Tracking Technologies</h2>
      <p className="mb-4">We use cookies to improve your experience. You can manage cookie preferences in your browser settings.</p>

      <h2 className="text-2xl font-semibold mb-2">5. Data Security</h2>
      <p className="mb-4">We follow industry security standards to protect your data, but no method is 100% secure.</p>

      <h2 className="text-2xl font-semibold mb-2">6. Your Rights</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Access, update, or delete your data.</li>
        <li>Opt-out of marketing communications.</li>
        <li>Disable cookies in browser settings.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">7. Changes to This Policy</h2>
      <p className="mb-4">We may update this policy periodically. Changes will be posted here.</p>

      <h2 className="text-2xl font-semibold mb-2">8. Contact Us</h2>
      <p>If you have questions, contact us at:</p>
      <ul className="list-disc list-inside">
        <li><strong>Email:</strong> support@groceryhaven.com</li>
        <li><strong>Phone:</strong> [9501590483]</li>
        <li><strong>Address:</strong> [nurmahal]</li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;