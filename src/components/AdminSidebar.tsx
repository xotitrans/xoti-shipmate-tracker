import { NavLink, useLocation } from "react-router-dom";
import { 
  BarChart3, 
  Package, 
  Plus, 
  Users, 
  Settings, 
  LogOut 
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";

const adminMenuItems = [
  { 
    title: "Dashboard", 
    url: "/admin", 
    icon: BarChart3,
    translationKey: "dashboard"
  },
  { 
    title: "Envois", 
    url: "/admin/shipments", 
    icon: Package,
    translationKey: "shipments"
  },
  { 
    title: "Nouvel Envoi", 
    url: "/admin/new-shipment", 
    icon: Plus,
    translationKey: "newShipment"
  },
];

const systemMenuItems = [
  { 
    title: "Paramètres", 
    url: "/admin/settings", 
    icon: Settings,
    translationKey: "settings"
  },
];

export function AdminSidebar() {
  const { open } = useSidebar();
  const location = useLocation();
  const { signOut } = useAuth();
  const { currentLanguage } = useLanguage();
  
  const currentPath = location.pathname;
  
  // Simple translation helper
  const t = (key: string) => {
    return translations[currentLanguage]?.[key] || key;
  };
  
  const isActive = (path: string) => {
    if (path === "/admin") {
      return currentPath === "/admin";
    }
    return currentPath.startsWith(path);
  };
  
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
      isActive 
        ? "bg-primary text-primary-foreground" 
        : "text-muted-foreground hover:bg-muted hover:text-foreground"
    }`;

  const handleLogout = () => {
    signOut();
  };

  return (
    <Sidebar className={open ? "w-64" : "w-14"} collapsible="icon">
      <SidebarContent className="bg-background border-r">
        {/* Logo */}
        <div className="p-6 border-b">
          <div className="flex items-center gap-2">
            <Package className="h-6 w-6 text-primary" />
          </div>
        </div>

        {/* Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm font-medium text-muted-foreground px-3 py-2">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1 px-2">
              {adminMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end={item.url === "/admin"}
                      className={({ isActive: navIsActive }) => getNavCls({ isActive: navIsActive })}
                    >
                      <item.icon className="h-4 w-4" />
                      {open && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* System */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm font-medium text-muted-foreground px-3 py-2">
            Système
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1 px-2">
              {systemMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url}
                      className={({ isActive: navIsActive }) => getNavCls({ isActive: navIsActive })}
                    >
                      <item.icon className="h-4 w-4" />
                      {open && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Logout */}
        <div className="mt-auto p-4 border-t">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          >
            <LogOut className="h-4 w-4" />
            {open && <span>Déconnexion</span>}
          </button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}