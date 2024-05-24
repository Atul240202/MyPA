import React from "react";

function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">MyPA</h1>

      <nav className="flex space-x-4">
        <a href="#" className="hover:underline px-2">Today's Task</a>
        <a href="#" className="hover:underline px-2">Expense Tracker</a>
        <a href="#" className="hover:underline px-2">Social's</a>
      </nav>
    </header>
  );
}

export default Header;
