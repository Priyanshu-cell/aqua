const HomeClient2 = () => {
  const clients = [
    {img: "/client-2/img-1.png",alt: "logo-1"},
    { img: "/client-2/img-2.png", alt: "Logo-2" },
    { img: "/client-2/img-3.png", alt: "Logo-3" },
    { img: "/client-2/img-4.png", alt: "logo-4" },
    { img: "/client-2/img-5.png", alt: "lgog-5" },
    { img: "/client-2/img-6.png", alt: "logo-6" },
    { img: "/client-2/img-7.png", alt: "logo-7" },
    { img: "/client-2/img-8.png", alt: "logo-8" },
    { img: "/client-2/img-9.png", alt: "logo-9" },
    { img: "/client-2/img-10.png", alt: "logo-10" },
    { img: "/client-2/img-11.png", alt: "logo-11" },
    { img: "/client-2/img-12.png", alt: "logo-12" },
    { img: "/client-2/img-13.png", alt: "logo-13" },
    { img: "/client-2/img-14.png", alt: "logo-14" },
    { img: "/client-2/img-15.png", alt: "logo-15" },
    { img: "/client-2/img-16.png", alt: "logo-16" },
    
    { img: "/client-2/img-17.png", alt: "logo-17" },
    { img: "/client-2/img-18.jpeg", alt: "logo-16" },
    { img: "/client-2/img-19.jpg", alt: "logo-16" },
    { img: "/client-2/img-20.png", alt: "logo-16" },
    { img: "/client-2/img-21.png", alt: "logo-16" },
    { img: "/client-2/img-22.jpg", alt: "logo-16" },
    { img: "/client-2/img-23.png", alt: "logo-16" },
    { img: "/client-2/img-24.jpg", alt: "logo-16" },
    { img: "/client-2/img-25.jpg", alt: "logo-16" },
    { img: "/client-2/img-26.png", alt: "logo-16" },
    { img: "/client-2/img-27.jpg", alt: "logo-16" },
    { img: "/client-2/img-28.png", alt: "logo-16" },
  ];
  return (
    <div className="bg-white pb-12 pt-5">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-700">
          Our some of <span className="font-bold">The Privilege Customers</span>
        </h2>
      </div>
      <div className="mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-5 md:px-12">
        {clients.map((client, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4 border rounded-lg shadow-sm bg-gray-50 hover:shadow-md"
          >
            <img
              src={client.img}
              alt={client.alt}
              className="max-h-32 md:max-h-24 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeClient2;
