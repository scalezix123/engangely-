import { Button } from "@/components/ui/button";
import { MessageSquare, Mail, Chrome } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignupPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex gradient-subtle">
      <div className="hidden lg:flex lg:w-1/2 gradient-hero items-center justify-center p-12">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="max-w-md">
          <div className="h-14 w-14 rounded-2xl bg-primary-foreground/20 flex items-center justify-center mb-8">
            <MessageSquare className="h-7 w-7 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-display font-bold text-primary-foreground mb-4">
            Start Growing with WhatsApp
          </h1>
          <p className="text-primary-foreground/80 text-lg">
            Join thousands of businesses using WaBiz to engage customers via WhatsApp.
          </p>
        </motion.div>
      </div>

      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
          <h2 className="text-2xl font-display font-bold text-foreground mb-2">Create your account</h2>
          <p className="text-muted-foreground mb-8">Get started for free in under 2 minutes</p>

          <div className="space-y-4">
            <Button variant="outline" size="lg" className="w-full justify-center gap-2">
              <Chrome className="h-5 w-5" /> Continue with Google
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-border" /></div>
              <div className="relative flex justify-center text-xs uppercase"><span className="bg-background px-2 text-muted-foreground">or</span></div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" className="w-full h-11 px-4 rounded-lg border border-input bg-background text-sm" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="w-full h-11 px-4 rounded-lg border border-input bg-background text-sm" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Min 8 characters" className="w-full h-11 px-4 rounded-lg border border-input bg-background text-sm" />
            </div>
            <Button variant="gradient" size="lg" className="w-full" onClick={() => navigate("/onboarding")}>
              Create Account
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-6 text-center">
            Already have an account?{" "}
            <button onClick={() => navigate("/login")} className="text-primary font-medium hover:underline">Sign in</button>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
