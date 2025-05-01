import React from 'react';

export const UnoExample: React.FC = () => {
  return (
    <div className="p-4 m-4">
      <h1 className="text-2xl font-bold text-blue-500 mb-4">UnoCSS Example</h1>

      {/* Basic styling */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
        <p className="text-gray-800">This box is styled with UnoCSS utility classes</p>
      </div>

      {/* Flex layout */}
      <div className="flex gap-4 mb-4">
        <div className="bg-blue-200 p-3 flex-1 rounded">Flex item 1</div>
        <div className="bg-green-200 p-3 flex-1 rounded">Flex item 2</div>
        <div className="bg-purple-200 p-3 flex-1 rounded">Flex item 3</div>
      </div>

      {/* Hover and other states */}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
        Hover Me
      </button>
    </div>
  );
};

export default UnoExample;
