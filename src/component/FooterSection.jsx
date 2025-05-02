import React from 'react';

function FooterSection() {
  return (
    <footer className="bg-gray-100 text-black py-6 px-6 ">
      <div className="max-w-7xl mx-auto flex flex-col font-body items-center justify-center text-center text-sm space-y-1">
        <p>
          &copy; 2025. Designed by{" "}
          <span className="font-semibold hover:underline text-blue-600">Sandeep Saini</span>
        </p>
        <p className="text-gray-600 font-body">All rights reserved.</p>
      </div>
    </footer>
  );
}

export default FooterSection;
