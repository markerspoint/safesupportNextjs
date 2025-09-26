import { ReactNode } from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";

export default function CounselorLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-white shadow-md p-4">
        <NavigationMenu>
          <NavigationMenuList className="flex flex-col space-y-2">
            <NavigationMenuItem>
              <NavigationMenuLink href="/counselor/dashboard">Dashboard</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/counselor/students">Students</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </aside>
      <div className="flex-1">
        <header className="bg-white shadow p-4">Counselor Header</header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}