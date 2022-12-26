import Link from "next/link";

const NavItem = ({ to, label }) => {
  return (
    <Link
      href={to}
      className="text-light-gray hover:text-white transition-all w-fit"
    >
      {label}
    </Link>
  );
};

const NavMenu = () => {
  return (
    <nav className="flex flex-col gap-4">
      <NavItem to="#" label="Home" />
      <NavItem to="#" label="About me" />
      <NavItem to="#" label="About you" />
      <NavItem to="#" label="Projects" />
    </nav>
  );
};

export default NavMenu;
