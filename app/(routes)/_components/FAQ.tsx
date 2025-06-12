import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import React from 'react'
import { FAQItemTypes } from '../../../constans/index';

interface FAQItemProps {
    FAQS: FAQItemTypes[]

}
const FAQ = ({ FAQS }: FAQItemProps) => {
    return (
        <div className="px-4 md:px-32 lg:px-64 bg-gray-900 flex flex-col py-10">
            <h2 className="text-balance text-amber-400 font-bold md:text-4xl xl:text-3xl leading-tight uppercase mb-5 underline underline-offset-[3px] flex justify-center">Sıkça Sorulan Sorular</h2>
            <Accordion
                type="single">
                {FAQS.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-gray-200">{faq.title}</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p>
                                {faq.description}
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                ))}
            </Accordion>
        </div >
    )
}

export default FAQ