import { PhoneIncoming } from 'lucide-react';
import React from 'react';

const ContactDiv = () => {
  return (
    <section className="h-[40vh] flex items-center justify-center bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-600">
      <div className="flex flex-col items-center text-white border-b-2 border-b-red-900">
        <div className="text-4xl mb-4">
          <PhoneIncoming />
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold">Contact Us</h1>
      </div>
    </section>
  );
};

export default ContactDiv;
