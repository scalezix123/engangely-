import { DashboardLayout } from "@/components/DashboardLayout";
import { StatCard } from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Wallet as WalletIcon, TrendingDown, Send, Plus, ArrowDownLeft, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const transactions = [
  { id: 1, type: "credit", desc: "Wallet Recharge", amount: 2000, date: "Oct 15, 2024", balance: 4250 },
  { id: 2, type: "debit", desc: "Diwali Sale Blast (1250 msgs)", amount: -625, date: "Oct 15, 2024", balance: 2250 },
  { id: 3, type: "debit", desc: "Order Confirmation (2100 msgs)", amount: -1050, date: "Oct 13, 2024", balance: 2875 },
  { id: 4, type: "credit", desc: "Wallet Recharge", amount: 3000, date: "Oct 10, 2024", balance: 3925 },
  { id: 5, type: "debit", desc: "Cart Recovery (890 msgs)", amount: -445, date: "Oct 8, 2024", balance: 925 },
];

export default function WalletPage() {
  const [showAddMoney, setShowAddMoney] = useState(false);

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto space-y-8">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-2xl font-display font-bold text-foreground">Wallet</h1>
          <p className="text-muted-foreground mt-1">Manage your prepaid messaging balance</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard title="Current Balance" value="₹4,250" icon={WalletIcon} />
          <StatCard title="Total Spent" value="₹12,780" icon={TrendingDown} subtitle="This month" />
          <StatCard title="Messages Sent" value="25,560" icon={Send} subtitle="@ ₹0.50/msg avg" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-card rounded-xl shadow-card border border-border"
        >
          <div className="p-6 border-b border-border flex items-center justify-between">
            <h2 className="font-display font-semibold text-foreground">Transaction History</h2>
            <Button variant="gradient" size="sm" onClick={() => setShowAddMoney(!showAddMoney)}>
              <Plus className="h-4 w-4 mr-1" /> Add Money
            </Button>
          </div>

          {showAddMoney && (
            <div className="p-6 border-b border-border bg-muted/30">
              <div className="flex gap-3 max-w-md">
                <input
                  type="number"
                  placeholder="Enter amount (₹)"
                  className="flex-1 h-10 px-4 rounded-lg border border-input bg-background text-sm"
                />
                <Button variant="default">Proceed to Pay</Button>
              </div>
            </div>
          )}

          <div className="divide-y divide-border">
            {transactions.map((tx) => (
              <div key={tx.id} className="p-4 px-6 flex items-center justify-between hover:bg-muted/30 transition-colors">
                <div className="flex items-center gap-3">
                  <div className={`h-9 w-9 rounded-lg flex items-center justify-center ${
                    tx.type === "credit" ? "bg-success/10" : "bg-destructive/10"
                  }`}>
                    {tx.type === "credit"
                      ? <ArrowDownLeft className="h-4 w-4 text-success" />
                      : <ArrowUpRight className="h-4 w-4 text-destructive" />
                    }
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{tx.desc}</p>
                    <p className="text-xs text-muted-foreground">{tx.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-semibold ${tx.type === "credit" ? "text-success" : "text-destructive"}`}>
                    {tx.type === "credit" ? "+" : ""}₹{Math.abs(tx.amount).toLocaleString()}
                  </p>
                  <p className="text-xs text-muted-foreground">Bal: ₹{tx.balance.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
