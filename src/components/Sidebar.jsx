import logo from "../assets/logo.png";

export default function Sidebar() {
  const menuItems = ["Finance Dashboard","Projects","Invoice and Bills","Report","Table View","My Profile"];
  return (
    <aside className="w-60 bg-white border-r p-4 flex flex-col items-center">
      <img src={logo} alt="Logo" className="w-16 h-16 mb-4" />
      <h2 className="font-bold text-center text-gray-700 mb-6">
        Thimphu TechPark<br />
        <span className="text-xs text-gray-500">BHUTAN’S FIRST IT PARK</span>
      </h2>
      <nav className="flex flex-col gap-3 w-full">
        {menuItems.map(item => (
          <button key={item} className="w-full bg-gray-100 hover:bg-blue-100 text-gray-700 font-medium py-2 rounded-lg">{item}</button>
        ))}
      </nav>
    </aside>
  );
}
