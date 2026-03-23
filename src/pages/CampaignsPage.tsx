import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Plus, Send, MessageSquare, Users, Clock, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const campaigns = [
  { id: 1, name: "Diwali Sale Blast", template: "Diwali Sale Offer", audience: 1250, status: "Delivered", date: "Oct 15, 2024" },
  { id: 2, name: "New Arrival Alert", template: "Order Confirmation", audience: 430, status: "Sending", date: "Oct 14, 2024" },
  { id: 3, name: "Weekly Newsletter", template: "Cart Reminder", audience: 3200, status: "Scheduled", date: "Oct 20, 2024" },
  { id: 4, name: "Feedback Collection", template: "Feedback Request", audience: 890, status: "Draft", date: "-" },
];

const statusStyles: Record<string, string> = {
  Delivered: "bg-success/10 text-success",
  Sending: "bg-warning/10 text-warning",
  Scheduled: "bg-info/10 text-info",
  Draft: "bg-muted text-muted-foreground",
};

export default function CampaignsPage() {
  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto space-y-8">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-display font-bold text-foreground">Campaigns</h1>
            <p className="text-muted-foreground mt-1">Create and manage broadcast campaigns</p>
          </div>
          <Button variant="gradient" size="sm">
            <Plus className="h-4 w-4 mr-1" /> New Campaign
          </Button>
        </motion.div>

        <div className="grid gap-4">
          {campaigns.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-card rounded-xl shadow-card border border-border p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-11 w-11 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Send className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{c.name}</h3>
                    <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><MessageSquare className="h-3 w-3" />{c.template}</span>
                      <span className="flex items-center gap-1"><Users className="h-3 w-3" />{c.audience.toLocaleString()} recipients</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{c.date}</span>
                    </div>
                  </div>
                </div>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusStyles[c.status]}`}>
                  {c.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
