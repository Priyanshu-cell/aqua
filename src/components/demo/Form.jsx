import { Element } from "react-scroll";

const Form = () => {
  const handleSocialClick = (platform, url) => {
    alert(`You will be redirected to ${platform}.`);
    window.location.href = url; // Redirect after alert
  };

  return (
    <Element name="about">
      <div className="container mx-auto p-6 md:p-14 space-y-8 pb-9 bg-[#E0FFFF]">
        {/* Header Section */}
        <div className="text-center text-3xl font-bold text-[#2C3E50]">
          Connect with Us
        </div>

        {/* Social Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Instagram Link */}
          <div
            className="bg-[#FFD700] text-[#FFFFFF] rounded-lg p-6 text-center cursor-pointer transform transition-all hover:scale-105 hover:shadow-lg hover:bg-[#FF69B4]"
            onClick={() =>
              handleSocialClick(
                "Instagram",
                "https://wwww.instagram.com/focusthaibiz/"
              )
            }
          >
            <div className="text-xl font-semibold mb-2">Instagram</div>
            <i className="fab fa-instagram text-4xl"></i>
          </div>

          {/* Facebook Link */}
          <div
            className="bg-[#32CD32] text-[#FFFFFF] rounded-lg p-6 text-center cursor-pointer transform transition-all hover:scale-105 hover:shadow-lg hover:bg-[#800080]"
            onClick={() =>
              handleSocialClick(
                "Facebook",
                "https://wwww.facebook.com/focusthaibiz"
              )
            }
          >
            <div className="text-xl font-semibold mb-2">Facebook</div>
            <i className="fab fa-facebook text-4xl"></i>
          </div>

          {/* WhatsApp Link */}
          <div
            className="bg-[#25D366] text-[#FFFFFF] rounded-lg p-6 text-center cursor-pointer transform transition-all hover:scale-105 hover:shadow-lg hover:bg-[#FF4500]"
            onClick={() =>
              handleSocialClick("WhatsApp", "https://waw.me/+91 7579008065")
            }
          >
            <div className="text-xl font-semibold mb-2">WhatsApp</div>
            <i className="fab fa-whatsapp text-4xl"></i>
          </div>

          {/* Gmail Link */}
          <div
            className="bg-[#FF4500] text-[#FFFFFF] rounded-lg p-6 text-center cursor-pointer transform transition-all hover:scale-105 hover:shadow-lg hover:bg-[#FFD700]"
            onClick={() =>
              handleSocialClick("Gmail", "mailto:rohub6@gmail.com")
            }
          >
            <div className="text-xl font-semibold mb-2">Gmail</div>
            <i className="fas fa-envelope text-4xl"></i>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Form;
