import React from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import "@/app/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const page = () => {
  return (
    <>
      <Header />
      <Container className="py-5">
        <div className="mb-4 text-center">
          <h1 className="fw-bold fs-2">Privacy Policy</h1>
        </div>

        <hr />

        <div className="privacy-policy-section">
          <p>Welcome to aeromexicohighfly.com (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). Your privacy is important to us. We created this Policy to help you understand what information we collect about you, how we use it, and how we work to keep it safe when you visit or make a booking through our website aeromexicohighfly.com (&ldquo;Website&rdquo;).</p>
          <p>By using this Website, you agree to the terms of this Privacy Policy. If you do not agree, please do not use the Website.</p>
          <h3>1. Information We Collect</h3>
          <p>Aeromexicohighfly collects the following types of information from users:</p>
          <h4>a. Personal Information</h4>
          <p>When you make a booking or interact with us, we may collect:</p>
          <ul>
            <li >Full name</li>
            <li >Phone number</li>
            <li >Email address</li>
            <li >Billing address</li>
            <li >Payment details (processed securely via third-party providers)</li>
            <li >Passport or government-issued ID details (if required for travel bookings)<br /><br /></li>
          </ul>
          <h4>b. Travel Information</h4>
          <ul>
            <li >Travel dates</li>
            <li >Destination details<br />Airline or accommodation preferences</li>
            <li >Frequent flyer numbers (if provided)<br /><br /></li>
          </ul>
          <h4>c. Technical Information</h4>
          <p>Automatically collected through cookies and analytics tools:</p>
          <ul>
            <li >IP address</li>
            <li >Browser type and version</li>
            <li >Device information</li>
            <li >Pages visited</li>
            <li >Date and time of access<br /><br /></li>
          </ul>
          <h3>2. How We Use Your Information</h3>
          <p>We use the information we gather from you for the below-stated purposes:</p>
          <ul>
            <li >To process and manage travel bookings</li>
            <li >To send reservation confirmations and travel updates</li>
            <li >To communicate with you about your reservations or customer support inquiries</li>
            <li >To improve the functionality and performance of our Website</li>
            <li >To send promotional emails (only with your consent)</li>
            <li >To detect and prevent unauthorized or fraud activity<br /><br /></li>
          </ul>
          <h3>3. Sharing Your Information</h3>
          <p>We may share your information in the following situations:</p>
          <ul>
            <li ><strong>With Third-Party Service Providers:</strong> We share necessary personal and travel information with airlines, hotels, rental car companies, and payment processors to complete your bookings.<br /><br /></li>
            <li ><strong>With Legal Authorities:</strong> In case it is required by law, regulatory obligation, or court order.<br /><br /></li>
            <li ><strong>With Business Partners:</strong> In the event of an acquisition, merger, or sale of assets, user information may be transferred as part of the transaction.<br /><br /></li>
          </ul>
          <p>We do not sell your personal information to third parties for marketing purposes.</p>
          <h3>4. Cookies and Tracking Technologies</h3>
          <p>Aeromexicohighfly uses cookies and similar tracking tools to:</p>
          <ul>
            <li >Analyze website traffic and usage patterns</li>
            <li >Save your preferences for future visits</li>
            <li >Deliver targeted advertising (with your consent, where required)<br /><br /></li>
          </ul>
          <p>You can manage or disable cookies through your browser settings.</p>
          <h3>5. Data Retention</h3>
          <p>We keep your personal data only as long as necessary to fulfill the purposes described in this Policy and to comply with legal obligations. We securely delete the data when no longer needed.</p>
          <h3>6. Data Security</h3>
          <p>Aeromexicohighfly implements appropriate technical and organizational measures to protect your personal data from unauthorized disclosure, access, alteration, or destruction. However, there is no method on the internet that is completely safe. Therefore, we cannot guarantee complete security.</p>
          <h3>7. Your Rights and Choices</h3>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li >Access, delete, or correct your personal information</li>
            <li >Restrict or object to specific processing</li>
            <li >Lodge a complaint with a data protection authority</li>
            <li >Withdraw consent (where applicable)</li>
          </ul>
          <p>You must contact us at support@aeromexicohighfly.com to exercise these rights.</p>
          <h3>8. Third-Party Links</h3>
          <p>Aeromexicohighfly may contain links to third-party websites. We are not responsible for the privacy practices of those websites. Aeromexicohighfly encourages you to check out their privacy policies before using their services.</p>
          <h3>9. Changes to This Privacy Policy</h3>
          <p>Aeromexicohighfly may update this Privacy Policy from time to time to reflect changes in our practices, technologies, or legal obligations. Changes are posted immediately on this page. If you continue using the website, it indicates that you accept the updated Privacy Policy.</p>
          <h3>10. Contact Us</h3>
          <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
          <p>Email: support@aeromexicohighfly.com</p>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default page;
