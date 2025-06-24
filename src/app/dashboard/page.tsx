'use client';

import { Layout } from '@/components/layout';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, DollarSign, Users, Edit } from 'lucide-react';

const monthlyData = [
  { month: 'Jan', earnings: 4000 },
  { month: 'Feb', earnings: 3000 },
  { month: 'Mar', earnings: 5000 },
  { month: 'Apr', earnings: 4500 },
  { month: 'May', earnings: 6000 },
  { month: 'Jun', earnings: 5500 },
  { month: 'Jul', earnings: 7000 },
  { month: 'Aug', earnings: 6500 },
  { month: 'Sep', earnings: 7500 },
  { month: 'Oct', earnings: 8000 },
  { month: 'Nov', earnings: 9000 },
  { month: 'Dec', earnings: 10000 },
];

const upcomingBookings = [
  { id: 1, event: 'Corporate Gala', date: '2024-08-15', location: 'Mumbai' },
  { id: 2, event: 'Music Festival', date: '2024-09-05', location: 'Goa' },
  { id: 3, event: 'Private Wedding', date: '2024-09-20', location: 'Delhi' },
];

export default function DashboardPage() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-primary">Artist Dashboard</h1>
          <Button>
            <Edit className="mr-2 h-4 w-4" /> Edit Profile
          </Button>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
              <Calendar className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">+2 since last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
              <DollarSign className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹1,250,000</div>
              <p className="text-xs text-muted-foreground">This fiscal year</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Profile Views</CardTitle>
              <Users className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12,345</div>
              <p className="text-xs text-muted-foreground">+15% from last month</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Earnings Chart */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-primary">Earnings Overview (2024)</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickFormatter={(value) => `₹${value / 1000}k`} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--background))',
                      borderColor: 'hsl(var(--border))',
                    }}
                  />
                  <Legend iconSize={10} />
                  <Line type="monotone" dataKey="earnings" stroke="hsl(var(--primary))" strokeWidth={2} activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Upcoming Bookings */}
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Upcoming Bookings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingBookings.map((booking) => (
                  <div key={booking.id} className="flex items-center justify-between p-3 rounded-md border bg-card">
                    <div>
                      <p className="font-semibold">{booking.event}</p>
                      <p className="text-sm text-muted-foreground">{booking.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-primary">{booking.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
