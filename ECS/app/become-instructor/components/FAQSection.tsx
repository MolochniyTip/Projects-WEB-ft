import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What qualifications do I need to become an instructor?",
    answer: "While formal qualifications are not always necessary, you should have in-depth knowledge and practical experience in the subject you want to teach. We value expertise gained through professional experience, academic background, or a combination of both."
  },
  {
    question: "How much can I earn as an instructor?",
    answer: "Earnings vary based on factors like course popularity, pricing, and promotion efforts. Many of our instructors earn a substantial income, with some making it their full-time career. We offer competitive revenue sharing and transparent payment processes."
  },
  {
    question: "What kind of support will I receive?",
    answer: "We provide comprehensive support including course creation tools, marketing assistance, and a dedicated instructor success team. You'll also have access to resources, webinars, and a community of fellow instructors for guidance and collaboration."
  },
  {
    question: "How do I create and structure my course?",
    answer: "We offer detailed guidelines and best practices for course creation. Generally, courses should include video lectures, quizzes, assignments, and supplementary materials. Our platform tools make it easy to upload and organize your content, and our team is available to provide feedback and suggestions."
  },
  {
    question: "Can I teach multiple courses?",
    answer: "We encourage instructors to create multiple courses. This allows you to cover different topics or skill levels within your area of expertise, potentially reaching a wider audience and increasing your earning potential."
  },
  {
    question: "How does the review process work for new courses?",
    answer: "All new courses go through a quality review process to ensure they meet our standards. Our team will provide feedback and suggestions to help you refine your course before it goes live. This process typically takes 1-2 weeks."
  }
]

export default function FAQSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
