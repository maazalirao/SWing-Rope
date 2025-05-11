import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

export const metadata = {
  title: "Contact Us | SWingRope",
  description: "Get in touch with SWingRope to learn more about our innovative wind energy solutions or to become a pilot user.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <div className="pt-28 pb-10 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              We'd love to hear from you. Whether you're interested in becoming a pilot user, 
              exploring investment opportunities, or simply learning more about our technology.
            </p>
          </div>
        </div>
      </div>
      <ContactForm />
      <Footer />
    </>
  );
} 