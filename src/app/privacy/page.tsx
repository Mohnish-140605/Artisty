import { Layout } from '@/components/layout';

export default function PrivacyPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-primary">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

          <h2>1. Introduction</h2>
          <p>
            This Privacy Policy describes how Artistly collects, uses, and discloses your personal information when you use our platform. We are committed to protecting your privacy and handling your data in an open and transparent manner.
          </p>

          <h2>2. Compliance with Indian Law</h2>
          <p>
            Our privacy practices are designed to comply with the Digital Personal Data Protection Act, 2023 (DPDPA) of India. We act as a Data Fiduciary for the personal data we collect from you and are responsible for its processing.
          </p>

          <h2>3. Data We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you create an account, fill out your artist profile, or communicate with us. This may include your name, email, phone number, location, and financial information for payments.
          </p>

          <h2>4. Use of Your Data</h2>
          <p>
            We use your data to operate, maintain, and improve our services, including to facilitate bookings, process payments, and communicate with you. We will obtain your explicit consent before using your data for any other purpose.
          </p>

          <h2>5. Your Rights as a Data Principal</h2>
          <p>
            Under the DPDPA, you have the right to: (a) access your personal data; (b) correct or erase your data; (c) be informed about the processing of your data; and (d) a right to grievance redressal. You can exercise these rights by contacting us at <a href="mailto:privacy@artisty.com" className="text-primary hover:underline">privacy@artisty.com</a>.
          </p>

          <h2>6. Data Security</h2>
          <p>
            We implement reasonable security measures to protect your personal data from unauthorized access, use, or disclosure. However, no method of transmission over the Internet is 100% secure.
          </p>
        </div>
      </div>
    </Layout>
  );
}
