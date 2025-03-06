import styles from './accordion.module.css';
import { useState } from 'react';

function Accordion() {
  const accordionData = [
    {
      title: 'About',
      content: ['Our story']
    },
    {
      title: 'My pages',
      content: ['Log in']
    },
    {
      title: 'Contact',
      content: ['Return Policy, Contact Us']
      
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = index => {
    setActiveIndex(activeIndex === index ? null : index); {/*activeIndex håller koll på vilken som är öppen (aktiv) så bara den visas */}
  };

  

  return (
    <div className={styles.accordion}>
      {accordionData.map((item, index) => (
        <div key={index} className={styles.accordionItem}>
          <div
            className={styles.accordionTitle}
            onClick={() => toggleAccordion(index)}
          >
            <div>{item.title}</div>
            <div>{activeIndex === index ? '-' : '+'}</div>
          </div>
          {activeIndex === index && <div className={styles.accordionContent}>{item.content}</div>}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
