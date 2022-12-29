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
      <NavItem to="#about-me" label="About me" />
      <NavItem to="#about-you" label="About you" />
      <NavItem to="#works" label="Works" />
    </nav>
  );
};

export default NavMenu;