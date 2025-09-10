import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/AdminSidebar";
import { Package } from "lucide-react";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Package className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/fr/auth" />;
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        {/* Header with Sidebar Trigger */}
        <header className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <SidebarTrigger className="ml-4" />
          <div className="flex items-center gap-2 ml-4">
            <span className="font-semibold text-sm text-muted-foreground">
              Administration LOGICY TRANSPORT
            </span>
          </div>
        </header>

        {/* Sidebar */}
        <AdminSidebar />

        {/* Main content */}
        <main className="flex-1 pt-14">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}