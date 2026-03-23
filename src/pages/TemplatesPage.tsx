import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { FileText, Plus, CheckCircle2, Clock, XCircle, Send } from "lucide-react";
import { motion } from "framer-motion";

const templates = [
  {
    id: 1,
    name: "Order Confirmation",
    category: "Utility",
    status: "Approved",
    language: "English",
    preview: "Hi {{1}}, your order #{{2}} has been confirmed! Track here: {{3}}",
  },
  {
    id: 2,
    name: "Diwali Sale Offer",
    category: "Marketing",
    status: "Approved",
    language: "English",
    preview: "🪔 Diwali Sale is LIVE! Get up to {{1}}% off on all products. Shop now: {{2}}",
  },
  {
    id: 3,
    name: "Cart Reminder",
    category: "Marketing",
    status: "Pending",
    language: "English",
    preview: "Hey {{1}}, you left items in your cart! Complete your purchase before they sell out.",
  },
  {
    id: 4,
    name: "Shipping Update",
    category: "Utility",
    status: "Approved",
    language: "Hindi",
    preview: "Hi {{1}}, your order has been shipped! Delivery by {{2}}. Track: {{3}}",
  },
  {
    id: 5,
    name: "Feedback Request",
    category: "Marketing",
    status: "Rejected",
    language: "English",
    preview: "Hi {{1}}, how was your experience with us? Rate us here: {{2}}",
  },
];

const statusConfig = {
  Approved: { icon: CheckCircle2, className: "bg-success/10 text-success" },
  Pending: { icon: Clock, className: "bg-warning/10 text-warning" },
  Rejected: { icon: XCircle, className: "bg-destructive/10 text-destructive" },
};

export default function TemplatesPage() {
  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto space-y-8">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-display font-bold text-foreground">Message Templates</h1>
            <p className="text-muted-foreground mt-1">Create and manage your WhatsApp message templates</p>
          </div>
          <Button variant="gradient" size="sm">
            <Plus className="h-4 w-4 mr-1" /> Create Template
          </Button>
        </motion.div>

        <div className="grid gap-4">
          {templates.map((template, i) => {
            const statusInfo = statusConfig[template.status as keyof typeof statusConfig];
            const StatusIcon = statusInfo.icon;
            return (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-xl shadow-card border border-border p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">{template.name}</h3>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xs text-muted-foreground">{template.category}</span>
                        <span className="text-xs text-muted-foreground">·</span>
                        <span className="text-xs text-muted-foreground">{template.language}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1 ${statusInfo.className}`}>
                      <StatusIcon className="h-3 w-3" />
                      {template.status}
                    </span>
                    {template.status === "Approved" && (
                      <Button variant="outline" size="sm">
                        <Send className="h-3.5 w-3.5 mr-1" /> Use
                      </Button>
                    )}
                  </div>
                </div>
                <div className="bg-muted/50 rounded-lg p-3 text-sm text-muted-foreground font-mono">
                  {template.preview}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
}
