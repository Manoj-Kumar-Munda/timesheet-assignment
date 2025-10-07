import UserDropdown from "./user-dropdown";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-2xs">
      <div className="flex items-center gap-8">
        <h1 className="text-2xl font-bold">ticktock</h1>

        <nav>
          <ul className="flex items-center gap-4">
            <li className="text-sm font-medium">Timesheets</li>
          </ul>
        </nav>
      </div>

      <UserDropdown />
    </header>
  );
};

export default Header;
