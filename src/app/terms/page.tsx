import { Layout } from '@/components/layout';

export default function TermsPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-primary">Terms of Service</h1>
          <p className="text-lg text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

          <h2>1. Introduction</h2>
          <p>
            Welcome to Artistly! These Terms of Service govern your use of our website and services. By accessing or using our platform, you agree to be bound by these terms.
          </p>

          <h2>2. Our Services</h2>
          <p>
            Artistly provides a platform for event organizers to discover, connect with, and book various artists for their events. We act as a facilitator and are not a party to any agreement between artists and organizers.
          </p>

          <h2>3. User Accounts</h2>
          <p>
            To access certain features, you must create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
          </p>

          <h2>4. Prohibited Conduct</h2>
          <p>
            You agree not to engage in any of the following prohibited activities: (a) copying, distributing, or disclosing any part of the service in any medium; (b) using any automated system to access the service; (c) interfering with the proper working of the service.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, in no event shall Artistly, its affiliates, agents, directors, or employees, be liable for any indirect, punitive, incidental, special, consequential, or exemplary damages.
          </p>

          <h2>6. Governing Law</h2>
          <p>
            These Terms shall be governed by the laws of India, without respect to its conflict of laws principles. Any claim or dispute between you and Artistly that arises in whole or in part from the service shall be decided exclusively by a court of competent jurisdiction located in Hyderabad, Telangana.
          </p>
        </div>
      </div>
    </Layout>
  );
}
