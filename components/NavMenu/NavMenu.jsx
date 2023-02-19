import Link from "next/link";

const NavItem = ({ to, label, index, scroll }) => {
  return (
    <Link
      href={to}
      className="text-light-gray tracking-wide hover:text-white transition-all w-fit"
      scroll={scroll ?? false}
    >
      {index}

      <span className="inline-block border-b border-light-gray w-8 h-1 mx-2 mb-1"></span>
      {label}
    </Link>
  );
};

const NavMenu = () => {
  return (
    <nav className="flex flex-col gap-4">
      <NavItem to="#featured-projects" label="Featured projects" index="01" />
      <NavItem to="#about-me" label="About me" index="02" />
      <NavItem to="#works" label="Works" index="03" />
      <NavItem to="#snippets" label="Snippets" index="04" />
    </nav>
  );
};

export default NavMenu;
