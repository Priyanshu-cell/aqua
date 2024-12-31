import { Element } from "react-scroll";

const Form = () => {
  const handleSocialClick = (platform, url) => {
    alert(`You will be redirected to ${platform}.`);
    window.location.href = url; // Redirect after alert
  };

  return (
    <Element name="about">

    
    <div className="container mx-auto p-6 md:p-12 space-y-8 pb-9">
      {/* Header Section */}
      <div className="text-center text-3xl font-bold text-[#1B1F3B]">
        Connect with Us
      </div>

      {/* Social Links Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Instagram Link */}
        <div
          className="bg-[#E4405F] text-white rounded-lg p-6 text-center cursor-pointer transform transition-all hover:scale-105 hover:shadow-lg"
          onClick={() => handleSocialClick('Instagram', 'https://wwww.instagram.com/focusthaibiz/')}
        >
          <div className="text-xl font-semibold mb-2">Instagram</div>
          <i className="fab fa-instagram text-4xl"></i> {/* You can replace with a suitable icon */}
        </div>

        {/* Facebook Link */}
        <div
          className="bg-[#3b5998] text-white rounded-lg p-6 text-center cursor-pointer transform transition-all hover:scale-105 hover:shadow-lg"
          onClick={() => handleSocialClick('Facebook', 'https://wwww.facebook.com/focusthaibiz')}
        >
          <div className="text-xl font-semibold mb-2">Facebook</div>
          <i className="fab fa-facebook text-4xl"></i> {/* You can replace with a suitable icon */}
        </div>

        {/* WhatsApp Link */}
        <div
          className="bg-[#25D366] text-white rounded-lg p-6 text-center cursor-pointer transform transition-all hover:scale-105 hover:shadow-lg"
          onClick={() => handleSocialClick('WhatsApp', 'https://waw.me/+66956943229')}
        >
          <div className="text-xl font-semibold mb-2">WhatsApp</div>
          <i className="fab fa-whatsapp text-4xl"></i> {/* You can replace with a suitable icon */}
        </div>

        {/* Gmail Link */}
        <div
          className="bg-[#DB4437] text-white rounded-lg p-6 text-center cursor-pointer transform transition-all hover:scale-105 hover:shadow-lg"
          onClick={() => handleSocialClick('Gmail', 'mailto:focwusthaibiz@gmail.com')}
        >
          <div className="text-xl font-semibold mb-2">Gmail</div>
          <i className="fas fa-envelope text-4xl"></i> {/* You can replace with a suitable icon */}
        </div>
      </div>
    </div>
    </Element>
  );
};

export default Form;
