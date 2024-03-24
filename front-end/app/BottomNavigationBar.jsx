// BottomNavigationBar.js

const BottomNavigationBar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4 text-center fixed bottom-0 w-full">
      <ul className="flex justify-around">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavigationBar;
