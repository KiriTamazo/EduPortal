import Logo from "./Logo"
import SidebarRoutes from "./SidebarRoutes"

const Sidebar = () => {
  return (
    <aside className="h-full border-r flex flex-col overflow-auto bg-white shadow-sm">
      <div className="p-6">
      <Logo />
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </aside>
  )
}
export default Sidebar