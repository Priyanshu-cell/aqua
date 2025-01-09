const Products = ({itemData, title}) => {
  
  return (

    <div className="text-center py-10 bg-gray-100 text-black">
          <h1 className="text-3xl font-bold mb-6">{title}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
            {itemData.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition duration-300"
              >
                <img
                  src={item.image}
                  alt={item.model}
                  className="w-full h-48 object-cover rounded-t-md"
                />
                <h2 className="text-xl font-semibold mt-4">{item.model}</h2>
                <ul className="text-gray-600 text-sm mt-2">
                  {item.tags.map((tag, index) => (
                    <li key={index}>- {tag}</li>
                  ))}
                </ul>
                <div className="text-left mt-4">
                  <p>
                    <span className="font-semibold text-lg text-green-600">
                      ₹{item.price}
                    </span>
                    <span className="line-through text-gray-500">₹{item.MRP}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
  )
}

export default Products