import React from "react";

function Footer() {
  return (
    <footer className="bg-white py-8 px-4">
      <div className="max-w-6xl mx-auto text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} ServiceFinder. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-2">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
