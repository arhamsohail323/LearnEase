import React, { useState } from 'react';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BlogCard = () => {
  const [hoveredId, setHoveredId] = useState(null);

  // Sample data for demonstration
  const data = [
    { id: 1, title: 'Card 1', desc: 'Description for Card 1', image: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Card 2', desc: 'Description for Card 2', image: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Card 3', desc: 'Description for Card 3', image: 'https://via.placeholder.com/150' },
    { id: 4, title: 'Card 4', desc: 'Description for Card 4', image: 'https://via.placeholder.com/150' },
    // Add more data as needed
  ];

  const handleDelete = (id) => {
    // Simulate delete action (replace with actual delete logic)
    const success = Math.random() < 0.5; // Simulate success/failure randomly

    if (success) {
      toast.success('Card deleted successfully');
      // Perform delete action (not implemented in this example)
    } else {
      toast.error('Failed to delete card');
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="relative bg-white rounded-lg overflow-hidden shadow-lg"
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <img className="w-full h-40 object-cover" src={item.image} alt={item.title} />
          <div className="p-4">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-sm text-gray-600">{item.desc}</p>
            {hoveredId === item.id && (
              <div className="absolute top-0 text-2xl right-0 flex items-center mt-2 mr-2">
                <button className="mr-2"><AiOutlineEdit /></button>
              </div>
            )}
          </div>
          {hoveredId === item.id && (
            <div className="absolute bottom-0 right-0 flex items-center mb-2 mr-2">
              <button
                className='text-2xl text-red-500'
                onClick={() => handleDelete(item.id)}
              >
                <AiOutlineDelete />
              </button>
            </div>
          )}
        </div>
      ))}
      <ToastContainer />
    </div>
  );
};

export default BlogCard;
