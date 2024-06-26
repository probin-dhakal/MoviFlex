import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-white py-8 p-3">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-red-600">MoviFlex</h3>
            <p className="text-gray-400 mt-2">
              MoviFlex is your one-stop destination for all things movies.
              Whether you're a casual viewer or a cinema enthusiast, our website
              offers a seamless and enjoyable experience for discovering,
              exploring, and staying updated on the latest in the world of film.
            </p>
          </div>
          <nav className="flex flex-col md:flex-row items-center">
            <a
              href="/about"
              className="text-gray-400 hover:text-white md:mx-4 my-2 md:my-0"
            >
              About Us
            </a>
            <a
              href="/contact"
              className="text-gray-400 hover:text-white md:mx-4 my-2 md:my-0"
            >
              Contact
            </a>
            <a
              href="/privacy"
              className="text-gray-400 hover:text-white md:mx-4 my-2 md:my-0"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-gray-400 hover:text-white md:mx-4 my-2 md:my-0"
            >
              Terms of Service
            </a>
          </nav>
          <div className="mt-6 md:mt-0">
            <a href="/" className="text-gray-400 hover:text-white">
              <svg
                className="w-6 h-6 mx-2 inline"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.56v14.88a1.45 1.45 0 0 1-1.45 1.45H1.45A1.45 1.45 0 0 1 0 19.44V4.56A1.45 1.45 0 0 1 1.45 3.1h21.1A1.45 1.45 0 0 1 24 4.56zm-4.72 7.2h-3.56v5.16h-3.84v-5.16h-1.6v-3.36h1.6V7.92c0-2 1.04-3.2 3.16-3.2h3.04v3.36h-2.24c-.72 0-.88.32-.88.8v1.76h3.36l-.4 3.36z" />
              </svg>
            </a>
            <a href="/" className="text-gray-400 hover:text-white">
              <svg
                className="w-6 h-6 mx-2 inline"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h21.351C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0zM9.602 20.402H5.557v-9.11h4.046v9.11zM7.579 9.602a2.364 2.364 0 1 1 0-4.728 2.364 2.364 0 0 1 0 4.728zM20.401 20.402h-4.046v-4.978c0-1.186-.021-2.715-1.656-2.715-1.657 0-1.91 1.293-1.91 2.63v5.064H8.743v-9.11h3.878v1.242h.054c.54-1.022 1.86-2.096 3.835-2.096 4.097 0 4.856 2.699 4.856 6.207v7.757h-.001z" />
              </svg>
            </a>
            <a href="/" className="text-gray-400 hover:text-white">
              <svg
                className="w-6 h-6 mx-2 inline"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163C6.524 2.163 2.163 6.523 2.163 12c0 4.437 3.407 8.102 7.799 8.744v-6.163H7.734v-2.58h2.228v-1.952c0-2.208 1.346-3.415 3.303-3.415.937 0 1.744.07 1.978.101v2.291l-1.357.001c-1.063 0-1.268.505-1.268 1.246v1.728h2.536l-.331 2.58h-2.204v6.163c4.392-.642 7.799-4.307 7.799-8.744 0-5.477-4.361-9.837-9.837-9.837z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="text-center text-gray-600 mt-6">
          &copy; 2024 CineHub. All rights reserved to Probin.
        </div>
      </footer>
    </>
  );
}

export default Footer;
