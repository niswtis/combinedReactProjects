import Link from "../../../components/Link";

function SideBar() {
  const links = [
    { label: "Dropdown", path: "/components" },
    { label: "Accordion", path: "/components/accordion" },
    { label: "Button", path: "/components/button" },
    { label: "Modal", path: "/components/modal" },
    { label: "Table", path: "/components/table" },
    { label: "Counter", path: "/components/counter" },
  ];

  const renderedLinks = links.map((link, index) => {
    return (
      <Link
        className="mb-3"
        activeClassName={
          "font-bold border-l-4 border-blue-500 pl-2 items-start"
        }
        to={link.path}
        key={index}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col">
      {renderedLinks}
    </div>
  );
}

export default SideBar;
