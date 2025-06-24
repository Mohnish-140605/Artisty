'use client';

import { Layout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">Get In Touch</h1>
          <p className="text-lg text-muted-foreground">We'd love to hear from you. Whether you have a question about our artists, pricing, or anything else, our team is ready to answer all your questions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary flex items-center">
                  <MapPin className="mr-3 h-6 w-6" /> Office Address
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>123 Music Lane</p>
                <p>Jubilee Hills, Hyderabad</p>
                <p>Telangana, 500033</p>
                <p>India</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-primary flex items-center">
                  <Mail className="mr-3 h-6 w-6" /> Email Us
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p><strong>General Inquiries:</strong><br/> <a href="mailto:support@artisty.com" className="hover:text-primary">support@artisty.com</a></p>
                <p className="mt-2"><strong>Bookings:</strong><br/> <a href="mailto:booking@artisty.com" className="hover:text-primary">booking@artisty.com</a></p>
              </CardContent>
            </Card>
             <Card>
              <CardHeader>
                <CardTitle className="text-primary flex items-center">
                  <Phone className="mr-3 h-6 w-6" /> Call Us
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>+91 (40) 1234 5678</p>
                <p className="text-xs mt-1">Mon - Fri, 9am - 6pm IST</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Full Name</label>
                  <Input id="name" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">Email Address</label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-1">Subject</label>
                  <Input id="subject" placeholder="What can we help with?" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">Message</label>
                  <Textarea id="message" placeholder="Your message..." rows={5} />
                </div>
                <Button type="submit" className="w-full">Submit</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
