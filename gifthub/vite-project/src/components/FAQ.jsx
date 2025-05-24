import React, { useState } from 'react';
import { useEffect } from 'react';
const FAQ = () => {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      question: 'What types of grocery products do you offer?',
      answer: 'We offer a wide range of grocery items including fresh fruits, vegetables, dairy products, packaged foods, beverages, and household essentials.',
    },
    {
      question: 'How can I track my order?',
      answer: 'You can track your order by logging into your account and going to the "My Orders" section. You will also receive a tracking link via email once your order is shipped.',
    },
    {
      question: 'Do you offer home delivery?',
      answer: 'Yes, we offer home delivery for all grocery items. Delivery charges may vary depending on your location and order value.',
    },
    {
      question: 'Can I return a grocery item?',
      answer: 'Yes, we have a return policy for certain grocery items. Perishable goods like fruits, vegetables, and dairy products must be reported for return within 1 hour of delivery. Please check our return policy page for more details.',
    },
    {
      question: 'Do you have cash on delivery (COD) option?',
      answer: 'Yes, we provide cash on delivery for eligible orders. Additional charges may apply.',
    },
    {
      question: 'How do I contact customer support?',
      answer: 'You can contact our customer support via email at support@yourgrocerystore.com or call us at +91 9501842914.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods including credit/debit cards, net banking, UPI, and cash on delivery.',
    },
    {
      question: 'Is there a minimum order value for delivery?',
      answer: 'Yes, a minimum order value may be required for home delivery. Please check our delivery policy for more details.',
    },
    {
      question: 'Do you offer subscription-based grocery deliveries?',
      answer: 'Yes, we offer subscription plans for daily essentials like milk, bread, and vegetables. You can set up a subscription through your account.',
    }
  ];

  const toggleFAQ = (index) => {
    if (open === index) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };
  useEffect(() => {
          document.title = "FAQ";
        }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 title">Frequently <span className='text-danger'> Asked Questions</span></h1>
      <div className="list-group">
        {faqs.map((faq, index) => (
          <div key={index} className="list-group-item">
            <div
              className="d-flex justify-content-between align-items-center"
              onClick={() => toggleFAQ(index)}
              style={{ cursor: 'pointer' }}
            >
              <h5>{faq.question}</h5>
              <span className="badge bg-secondary">{open === index ? '❤' : '💥'}</span>
            </div>
            {open === index && <div className="mt-3">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
