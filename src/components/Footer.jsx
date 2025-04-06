import React from 'react'

function Footer() {


  return (
    <footer className="flex items-center justify-center bg-gray-800 text-white py-6 mt-10">
    <p>
        CopyRights© {new Date().getFullYear()}
    </p>
    </footer>
  )
}

export default Footer;
