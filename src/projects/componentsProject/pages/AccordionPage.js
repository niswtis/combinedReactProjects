import Accordion from "../components/Accordion";

function AccordionPage() {
  const accordionItems = [
    {
      label: "Title 1",
      content:
        "Here is some expanded section with additional info about some topic",
    },
    {
      label: "Title 2",
      content:
        "Here is some expanded section with additional info about another topic",
    },
    {
      label: "Title 3",
      content:
        "Here is some expanded section with additional info about yet another topic",
    },
  ];

  return <Accordion items={accordionItems} />;
}

export default AccordionPage;
