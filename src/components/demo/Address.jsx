const Address = () => {
  return (
    <section className="flex flex-col p-6 bg-teal-50 rounded-lg shadow-lg space-y-6 text-center max-w-screen-lg mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-700">
        Business Development Manager Details:
      </h2>
      <p className="text-xl font-medium md:text-xl text-slate-600">Mr. Vijay Pundir</p>
      <p className="text-lg md:text-xl text-slate-600">
        <span className="font-bold">Address:</span> Teachers Colony, Govind Garh, Dehradun (U.K.)
      </p>
      <p className="text-lg md:text-xl text-slate-600">
      <span className="font-bold">Mobile Numbers:</span>+91 75790 08065
      </p>
      <p className="text-lg md:text-xl text-slate-600">
      <span className="font-bold">Email:</span> rohub6@gmail.com
      </p>

      <div className="google-map mt-6">
        <h3 className="text-xl md:text-2xl font-medium text-slate-700 mb-4">
          Location
        </h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.9302712733515!2d78.01983565!3d30.32450115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929f5f48ecca7%3A0x45733a065a5ae34a!2sTeachers%20Colony%2C%20Govind%20Garh%2C%20Khurbura%20Mohalla%2C%20Dehradun%2C%20Uttarakhand%20248001!5e0!3m2!1sen!2sin!4v1735810309315!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="mt-4 rounded-lg shadow-md"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Address;
