import React from "react";
import "./faq.css";
import Accordion from './Accordion';

function FAQ() {
    return (
        <>
            <section className="faq" data-aos="flip-left" data-aos-delay="700">
                <div className="faq__title">
                    <h2>F.A.Q.</h2>
                </div>
                <Accordion />
            </section>
        </>
    );
}

export default FAQ;
