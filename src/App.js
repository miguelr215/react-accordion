import { useState } from 'react';

const faqs = [
  {
    title: 'What shirt sizes do you offer?',
    text: 'Our shirts range from XS to XXXL for both men and women.',
  },
  {
    title: 'What is your return policy?',
    text: 'Returns must be initiated within 30 days of package delivery.',
  },
  {
    title: 'What shirt colors do you offer?',
    text: 'Most shirts are available in various colors ranging from red, black, blue, yellow, green, and white.',
  },
];

export default function App() {
  return (
    <div className="App">
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  return (
    <div className="accordion-list">
      {data.map((item, i) => (
        <AccordionItem
          key={item.title}
          title={item.title}
          text={item.text}
          num={i + 1}
        />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <div className="accordion-header">
        <span className="number">{num}</span>
        <p className="title">{title}</p>
        <button
          type="button"
          className={`${isOpen ? 'open' : ''}`}
          onClick={handleToggle}
        >
          <span class="material-symbols-outlined">arrow_drop_down</span>
        </button>
      </div>
      <p className={`accordion-answer ${isOpen ? 'show' : ''}`}>{text}</p>
    </div>
  );
}
