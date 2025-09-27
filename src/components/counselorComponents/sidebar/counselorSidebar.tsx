"use client";

import * as React from "react";
import { useState } from "react";
import { LayoutDashboard, CalendarCheck, Settings2, GalleryVerticalEnd } from "lucide-react";

import { NavMain } from "@/components/counselorComponents/sidebar/nav-main";
import { NavUser } from "@/components/counselorComponents/sidebar/nav-user";
import { TeamSwitcher } from "@/components/counselorComponents/sidebar/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/counselor/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Schedule",
      url: "/counselor/calendar",
      icon: CalendarCheck,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
    },
  ],
};

export function CounselorSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [activeItem, setActiveItem] = useState("/counselor/dashboard");

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} activeItem={activeItem} setActiveItem={setActiveItem} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}