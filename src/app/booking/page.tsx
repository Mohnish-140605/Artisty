import Link from 'next/link';
import { Layout } from '@/components/layout';
import { Button } from '@/components/ui/button';

export default function BookingPage() {
  return (
    <Layout>
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold text-primary mb-4">Booking Session</h1>
        <p className="text-xl text-muted-foreground mb-8">
          This is a placeholder for the artist booking flow. In a real application, this page would allow you to schedule a session, confirm details, and process payment.
        </p>
        <div className="border bg-card text-card-foreground rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
          <p className="text-muted-foreground">
            The complete booking feature is under construction. For now, you can return to the artists page to continue browsing.
          </p>
        </div>
        <Link href="/artists" passHref>
          <Button size="lg" className="mt-8">
            Back to Artists
          </Button>
        </Link>
      </div>
    </Layout>
  );
}
