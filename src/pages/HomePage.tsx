import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MessageSquare, Send, Users, BarChart3, ShoppingCart, Bot,
  Zap, Shield, ArrowRight, CheckCircle2, Star, Monitor,
  Smartphone, Globe, Megaphone, Package, Bell
} from "lucide-react";
import heroPhone from "@/assets/hero-phone.png";

const features = [
  { icon: MessageSquare, title: "Real-time Chat", desc: "Chat with customers in real time on a single WhatsApp number" },
  { icon: Megaphone, title: "Bulk Broadcast", desc: "Send marketing campaigns to thousands of contacts instantly" },
  { icon: BarChart3, title: "Reports & Analytics", desc: "Get detailed analytics of your broadcast performance" },
  { icon: ShoppingCart, title: "Product Catalogue", desc: "Share product catalogues directly with your customers" },
  { icon: Bot, title: "Smart Chatbots", desc: "Set up personalized auto-reply chatbots for 24/7 support" },
  { icon: Send, title: "Bulk Media Messages", desc: "Auto-reply with images, videos, documents and more" },
  { icon: Users, title: "Multi-Agent Access", desc: "Get multi-user access on a single WhatsApp number" },
  { icon: Monitor, title: "Team Monitoring", desc: "Monitor your team's customer interactions in real-time" },
  { icon: Package, title: "Order Analytics", desc: "Shopify & WooCommerce order analytics and tracking" },
  { icon: Bell, title: "Order Notifications", desc: "Send automated order updates and delivery notifications" },
  { icon: Zap, title: "Cart Recovery", desc: "Send abandoned cart recovery messages to boost sales" },
  { icon: Shield, title: "Official API", desc: "Built on Meta's official WhatsApp Business API platform" },
];

const integrations = [
  "Shopify", "WooCommerce", "Google Sheets", "Calendly",
  "Shiprocket", "Meta Leads", "Pabbly", "Zapier"
];

const stats = [
  { value: "5,000+", label: "Businesses" },
  { value: "50M+", label: "Messages Sent" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Support" },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl gradient-primary flex items-center justify-center">
              <MessageSquare className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold text-foreground">WaBiz</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#integrations" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Integrations</a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => navigate("/login")}>Login</Button>
            <Button variant="gradient" size="sm" onClick={() => navigate("/signup")}>
              Get Started Free
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(152_58%_38%/0.08),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <MessageSquare className="h-4 w-4" />
                Official WhatsApp Business API
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-display font-extrabold text-foreground leading-tight">
                Transform Your{" "}
                <span className="text-primary">Business</span>{" "}
                With WhatsApp
              </h1>
              <p className="text-lg text-muted-foreground mt-6 max-w-lg">
                Best Customer Relationship Management & Marketing using Official WhatsApp Business APIs. One platform for all your messaging needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button variant="gradient" size="lg" onClick={() => navigate("/signup")}>
                  Start Free Trial <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
                <Button variant="outline" size="lg" onClick={() => navigate("/login")}>
                  Book a Demo
                </Button>
              </div>
              <div className="flex items-center gap-6 mt-8">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-xl font-display font-bold text-foreground">{s.value}</p>
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(152_58%_38%/0.12),transparent_70%)]" />
              <img
                src={heroPhone}
                alt="WhatsApp Business Chat Interface"
                className="relative z-10 w-72 lg:w-80 xl:w-96 drop-shadow-2xl"
              />
              {/* Floating labels */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute left-0 top-1/4 bg-card shadow-card border border-border rounded-xl px-4 py-2.5 z-20"
              >
                <p className="text-xs font-semibold text-foreground">Blue Tick ✓</p>
                <p className="text-[10px] text-muted-foreground">Verified Business</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute right-0 top-1/2 bg-card shadow-card border border-border rounded-xl px-4 py-2.5 z-20"
              >
                <p className="text-xs font-semibold text-foreground">Quick Replies</p>
                <p className="text-[10px] text-muted-foreground">Interactive Buttons</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute left-8 bottom-12 bg-card shadow-card border border-border rounded-xl px-4 py-2.5 z-20"
              >
                <p className="text-xs font-semibold text-foreground">Auto Reply</p>
                <p className="text-[10px] text-muted-foreground">24/7 Chatbot</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why WaBiz */}
      <section className="py-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
            Why <span className="text-primary">WaBiz</span> — 1 Company, 1 Chat
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            With the growing customer base and employees, it's hard for a business to keep up with communication on all fronts. That's where WaBiz steps in.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { icon: Zap, label: "Easy to Use Interface" },
              { icon: Shield, label: "Dedicated Support" },
              { icon: Smartphone, label: "Multi Device Support" },
              { icon: Globe, label: "Custom Integrations" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-card border border-border text-center hover:shadow-md transition-shadow"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-semibold text-foreground">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 gradient-subtle">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
              Key <span className="text-primary">Features</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Make business communication easy with WaBiz's WhatsApp API solutions. Connect effortlessly, engage customers quickly, and run operations smoothly.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="bg-card rounded-xl p-5 shadow-card border border-border hover:shadow-md hover:-translate-y-0.5 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:gradient-primary transition-all">
                    <f.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-1">{f.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
            Popular <span className="text-primary">Integrations</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Experience easy and hassle-free WhatsApp Business integrations with your preferred e-commerce platforms, CRMs, and more.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {integrations.map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-6 py-4 bg-card rounded-xl shadow-card border border-border hover:border-primary/30 hover:shadow-md transition-all cursor-default"
              >
                <span className="text-sm font-semibold text-foreground">{name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section id="pricing" className="py-20 gradient-subtle">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
              Simple, Transparent <span className="text-primary">Pricing</span>
            </h2>
            <p className="text-muted-foreground mt-4">Pay only for messages you send. No hidden charges.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Starter", price: "₹5,000", period: "6 months", features: ["1,000 contacts", "Bulk Broadcast", "Basic Analytics", "Email Support"] },
              { name: "Growth", price: "₹8,000", period: "6 months", features: ["5,000 contacts", "Advanced Broadcast", "Full Analytics", "Priority Support", "Chatbots"], popular: true },
              { name: "Enterprise", price: "Custom", period: "Annual", features: ["Unlimited contacts", "Custom Integrations", "Dedicated Manager", "SLA Guarantee", "API Access"] },
            ].map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-card rounded-2xl p-8 shadow-card border relative ${
                  plan.popular ? "border-primary ring-2 ring-primary/20" : "border-border"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display font-bold text-lg text-foreground">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-3xl font-display font-extrabold text-foreground">{plan.price}</span>
                  <span className="text-sm text-muted-foreground ml-1">/ {plan.period}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.popular ? "gradient" : "outline"}
                  className="w-full mt-8"
                  onClick={() => navigate("/signup")}
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-primary rounded-3xl p-12 lg:p-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary-foreground">
              Ready to Transform Your Business?
            </h2>
            <p className="text-primary-foreground/80 mt-4 max-w-lg mx-auto">
              Join 5,000+ businesses already using WaBiz to engage customers via WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <Button
                size="lg"
                className="bg-card text-foreground hover:bg-card/90 shadow-md"
                onClick={() => navigate("/signup")}
              >
                Start Free Trial <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Book a Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
                <MessageSquare className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-foreground">WaBiz</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Contact</a>
            </div>
            <p className="text-xs text-muted-foreground">© 2024 WaBiz. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
