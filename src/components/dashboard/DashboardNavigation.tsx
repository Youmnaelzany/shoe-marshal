import Link from "next/link";

const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Orders",
    href: "/dashboard/orders",
  },
  {
    name: "Products",
    href: "/dashboard/products",
  },
  {
    name: "Categories",
    href: "/dashboard/categories",
  },
];

const DashboardNavigation = () => {
  return (
    <>
      {links.map((link) => (
        <Link key={link.name} href={link.href} className="">
          {link.name}
        </Link>
      ))}
    </>
  );
};
export default DashboardNavigation;
