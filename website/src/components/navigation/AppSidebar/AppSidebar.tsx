import SidebarBrand from "./SidebarBrand";
import SidebarNavigation from "./SidebarNavigation";
import SidebarFooter from "./SidebarFooter";

export default function AppSidebar() {
  return (
    <aside
      className="
        fixed
        left-0
        top-0
        z-40
        flex
        h-screen
        w-80
        flex-col
        border-r
        border-slate-200/70
        bg-white
      "
    >
      <SidebarBrand />

      <SidebarNavigation />

      <SidebarFooter />
    </aside>
  );
}