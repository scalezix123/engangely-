import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Users, Upload, Plus, Search, Tag, Trash2, Edit2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const mockContacts = [
  { id: 1, name: "Rahul Sharma", phone: "+91 98765 43210", tags: ["VIP", "Shopify"] },
  { id: 2, name: "Priya Patel", phone: "+91 87654 32109", tags: ["New"] },
  { id: 3, name: "Amit Kumar", phone: "+91 76543 21098", tags: ["Returning"] },
  { id: 4, name: "Sneha Gupta", phone: "+91 65432 10987", tags: ["VIP", "D2C"] },
  { id: 5, name: "Vikram Singh", phone: "+91 54321 09876", tags: ["Shopify"] },
  { id: 6, name: "Anjali Reddy", phone: "+91 43210 98765", tags: ["New", "D2C"] },
];

const tagColors: Record<string, string> = {
  VIP: "bg-primary/10 text-primary",
  Shopify: "bg-info/10 text-info",
  New: "bg-success/10 text-success",
  Returning: "bg-warning/10 text-warning",
  D2C: "bg-accent/10 text-accent",
};

export default function ContactsPage() {
  const [search, setSearch] = useState("");
  const filtered = mockContacts.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.phone.includes(search)
  );

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto space-y-8">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-display font-bold text-foreground">Contacts</h1>
            <p className="text-muted-foreground mt-1">{mockContacts.length} contacts in your list</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Upload className="h-4 w-4 mr-1" /> Upload CSV
            </Button>
            <Button variant="gradient" size="sm">
              <Plus className="h-4 w-4 mr-1" /> Add Contact
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card rounded-xl shadow-card border border-border"
        >
          <div className="p-4 border-b border-border">
            <div className="relative max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search contacts..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-10 pl-10 pr-4 rounded-lg border border-input bg-background text-sm"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Name</th>
                  <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Phone</th>
                  <th className="text-left p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Tags</th>
                  <th className="text-right p-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filtered.map((contact) => (
                  <tr key={contact.id} className="hover:bg-muted/30 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium text-primary">
                          {contact.name.split(" ").map(n => n[0]).join("")}
                        </div>
                        <span className="text-sm font-medium text-foreground">{contact.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-muted-foreground">{contact.phone}</td>
                    <td className="p-4">
                      <div className="flex gap-1.5 flex-wrap">
                        {contact.tags.map((tag) => (
                          <span key={tag} className={`text-xs px-2 py-0.5 rounded-full font-medium ${tagColors[tag] || "bg-muted text-muted-foreground"}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Edit2 className="h-3.5 w-3.5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                          <Trash2 className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
