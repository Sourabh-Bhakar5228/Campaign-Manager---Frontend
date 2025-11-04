// components/layout/Sidebar.tsx
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();

  const menuItems = [
    { name: "Dashboard", path: "/", icon: "📊" },
    { name: "Campaigns", path: "/campaigns", icon: "📧" },
    { name: "Settings", path: "/settings", icon: "⚙️" },
  ];

  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen p-4 fixed left-0 top-0">
      <div className="text-xl font-bold mb-8 p-4 border-b border-gray-700">
        Campaign Manager
      </div>
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link key={item.name} href={item.path} legacyBehavior>
            <a
              className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${
                router.pathname === item.path
                  ? "bg-gray-700 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              <span className="mr-3 text-lg">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </a>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
