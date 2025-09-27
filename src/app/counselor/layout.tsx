// src/app/counselor/layout.tsx
import { ReactNode } from "react"
import { CounselorSidebar } from "@/components/counselorComponents/sidebar/counselorSidebar"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"

export default function CounselorLayout({ children }: { children: ReactNode }) {
  const role = "counselor"

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <CounselorSidebar role={role} />

        <SidebarInset className="flex-1 flex flex-col">
          <header className="flex h-16 items-center gap-2 p-4">
            <SidebarTrigger className="-ml-1" />
          </header>
          <hr className="border-t border-gray-200" />
          <main className="flex-1 p-6 w-full overflow-auto">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
