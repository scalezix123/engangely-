import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageSquare, Wallet, Users, CheckCircle2, ArrowRight, Upload, Building2, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  { id: "welcome", title: "Welcome to WaBiz", icon: MessageSquare },
  { id: "whatsapp", title: "Connect WhatsApp", icon: Phone },
  { id: "wallet", title: "Add Balance", icon: Wallet },
  { id: "contacts", title: "Upload Contacts", icon: Users },
];

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const next = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
    else navigate("/dashboard");
  };

  const skip = () => navigate("/dashboard");

  return (
    <div className="min-h-screen gradient-subtle flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl"
      >
        {/* Progress */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {steps.map((s, i) => (
            <div key={s.id} className="flex items-center gap-2">
              <div className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-medium transition-all ${
                i <= currentStep ? "gradient-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}>
                {i < currentStep ? <CheckCircle2 className="h-4 w-4" /> : i + 1}
              </div>
              {i < steps.length - 1 && (
                <div className={`w-12 h-0.5 ${i < currentStep ? "bg-primary" : "bg-border"}`} />
              )}
            </div>
          ))}
        </div>

        <div className="bg-card rounded-2xl shadow-card border border-border overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="p-8"
            >
              {currentStep === 0 && (
                <div className="text-center py-4">
                  <div className="h-16 w-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6">
                    <MessageSquare className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-foreground mb-3">Welcome to WaBiz! 🎉</h2>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Let's set up your WhatsApp Business account in just a few steps. You'll be sending campaigns in no time.
                  </p>
                </div>
              )}

              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-xl font-display font-bold text-foreground mb-2">Connect WhatsApp Business</h2>
                    <p className="text-sm text-muted-foreground">Sign in with Meta to link your WhatsApp account</p>
                  </div>
                  <div className="max-w-sm mx-auto space-y-4">
                    <div className="p-4 rounded-lg border border-border">
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        <Building2 className="h-4 w-4 inline mr-2" />Business Portfolio
                      </label>
                      <select className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm">
                        <option>Select portfolio...</option>
                        <option>Acme Enterprises</option>
                      </select>
                    </div>
                    <Button variant="whatsapp" size="lg" className="w-full">
                      <MessageSquare className="h-5 w-5 mr-2" /> Connect WhatsApp
                    </Button>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-xl font-display font-bold text-foreground mb-2">Add Wallet Balance</h2>
                    <p className="text-sm text-muted-foreground">Prepaid system — pay only for messages you send</p>
                  </div>
                  <div className="max-w-sm mx-auto space-y-3">
                    {[500, 1000, 2000, 5000].map((amt) => (
                      <button
                        key={amt}
                        className="w-full p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all text-left flex items-center justify-between"
                      >
                        <span className="font-medium text-foreground">₹{amt.toLocaleString()}</span>
                        <span className="text-xs text-muted-foreground">~{amt * 2} messages</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-xl font-display font-bold text-foreground mb-2">Upload Your Contacts</h2>
                    <p className="text-sm text-muted-foreground">Import your customer list to get started</p>
                  </div>
                  <div className="max-w-sm mx-auto">
                    <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                      <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
                      <p className="text-sm font-medium text-foreground mb-1">Drop your CSV file here</p>
                      <p className="text-xs text-muted-foreground">or click to browse</p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="px-8 pb-8 flex justify-between">
            <Button variant="ghost" onClick={skip} className="text-muted-foreground">
              Skip for now
            </Button>
            <Button variant="gradient" onClick={next}>
              {currentStep === steps.length - 1 ? "Go to Dashboard" : "Continue"}
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
