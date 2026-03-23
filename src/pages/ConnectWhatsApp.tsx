import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { MessageSquare, CheckCircle2, AlertCircle, Phone, Building2 } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ConnectWhatsApp() {
  const [connected, setConnected] = useState(false);
  const [step, setStep] = useState<"idle" | "connecting" | "selecting" | "done">("idle");

  const handleConnect = () => {
    setStep("connecting");
    setTimeout(() => setStep("selecting"), 1500);
  };

  const handleFinish = () => {
    setStep("done");
    setConnected(true);
  };

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto space-y-8">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-2xl font-display font-bold text-foreground">Connect WhatsApp</h1>
          <p className="text-muted-foreground mt-1">Link your WhatsApp Business account via Meta</p>
        </motion.div>

        {/* Status Card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card rounded-xl shadow-card border border-border p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className={`h-3 w-3 rounded-full ${connected ? "bg-success" : "bg-warning"}`} />
            <span className="text-sm font-medium text-foreground">
              {connected ? "Connected" : "Not Connected"}
            </span>
          </div>

          {connected && (
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-success/5 border border-success/20">
                <CheckCircle2 className="h-5 w-5 text-success" />
                <div>
                  <p className="text-sm font-medium text-foreground">WhatsApp Business Connected</p>
                  <p className="text-xs text-muted-foreground">+91 98765 43210 · Acme Store</p>
                </div>
              </div>
            </div>
          )}

          {step === "idle" && !connected && (
            <div className="text-center py-8">
              <div className="h-16 w-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                Connect via Meta Business Suite
              </h3>
              <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
                Sign in with Facebook to connect your WhatsApp Business account. This uses Meta's Embedded Signup flow.
              </p>
              <Button variant="whatsapp" size="lg" onClick={handleConnect}>
                <MessageSquare className="h-5 w-5 mr-2" />
                Connect WhatsApp Business
              </Button>
            </div>
          )}

          {step === "connecting" && (
            <div className="text-center py-8">
              <div className="h-12 w-12 rounded-full border-4 border-primary/20 border-t-primary animate-spin mx-auto mb-4" />
              <p className="text-sm text-muted-foreground">Connecting to Meta Business Suite...</p>
            </div>
          )}

          {step === "selecting" && (
            <div className="space-y-4">
              <div className="p-4 rounded-lg border border-border">
                <label className="text-sm font-medium text-foreground mb-2 block">
                  <Building2 className="h-4 w-4 inline mr-2" />
                  Business Portfolio
                </label>
                <select className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm">
                  <option>Acme Enterprises Pvt. Ltd.</option>
                  <option>My Store LLC</option>
                </select>
              </div>
              <div className="p-4 rounded-lg border border-border">
                <label className="text-sm font-medium text-foreground mb-2 block">
                  <Phone className="h-4 w-4 inline mr-2" />
                  WhatsApp Business Account
                </label>
                <select className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm">
                  <option>+91 98765 43210 (Acme Store)</option>
                  <option>+91 91234 56789 (Support)</option>
                </select>
              </div>
              <Button variant="gradient" size="lg" className="w-full" onClick={handleFinish}>
                Confirm & Connect
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
