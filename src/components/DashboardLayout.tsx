import { User } from "lucide-react";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col ">
      <header className="border h-16 border-b flex items-center justify-between px-6">
        <div className=" text-xl font-bold text-blue-600">MindCare</div>
        <div className=" flex items-center gap-2">
          <User className=" border border-red-500w-5 h-5" />
          <span>Usuário</span>
        </div>
      </header>

      <div className=" flex flex-1">
        <aside className="w-64 border-r flex flex-col gap-2 p-4">
          <a href="/" className="px-4 py-2 rounded hover:bg-gray-100">
            Home
          </a>
          <a href="/patients" className="px-4 py-2 rounded hover:bg-gray-100">
            Pacientes
          </a>
          <a href="/agenda" className="px-4 py-2 rounded hover:bg-gray-100">
            Agenda
          </a>
        </aside>

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;
