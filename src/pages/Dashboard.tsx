import { DashboardLayout } from "@/components/DashboardLayout";
import { StatCard } from "@/components/StatCard";
import { MessageSquare, Users, Wallet, Send, TrendingUp, Clock } from "lucide-react";
import { motion } from "framer-motion";

const recentCampaigns = [
  { name: "Diwali Sale Blast", status: "Delivered", sent: 1250, date: "2024-10-15" },
  { name: "New Arrival Alert", status: "Sending", sent: 430, date: "2024-10-14" },
  { name: "Order Confirmation", status: "Delivered", sent: 2100, date: "2024-10-13" },
  { name: "Cart Recovery", status: "Delivered", sent: 890, date: "2024-10-12" },
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-2xl font-display font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Overview of your WhatsApp Business activity</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Messages Sent" value="12,450" icon={Send} trend={{ value: "12% vs last week", positive: true }} />
          <StatCard title="Total Contacts" value="3,280" icon={Users} trend={{ value: "8% growth", positive: true }} />
          <StatCard title="Wallet Balance" value="₹4,250" icon={Wallet} subtitle="Prepaid balance" />
          <StatCard title="Active Campaigns" value="3" icon={MessageSquare} subtitle="2 scheduled" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-card rounded-xl shadow-card border border-border"
        >
          <div className="p-6 border-b border-border">
            <h2 className="font-display font-semibold text-foreground">Recent Campaigns</h2>
          </div>
          <div className="divide-y divide-border">
            {recentCampaigns.map((campaign, i) => (
              <div key={i} className="p-4 px-6 flex items-center justify-between hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{campaign.name}</p>
                    <p className="text-xs text-muted-foreground">{campaign.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">{campaign.sent.toLocaleString()} sent</span>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                    campaign.status === "Delivered"
                      ? "bg-success/10 text-success"
                      : "bg-warning/10 text-warning"
                  }`}>
                    {campaign.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
