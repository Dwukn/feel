import Image from "next/image";

// Footer.tsx
const Footer = () => {
    return (
      <footer className="bg-gray-600 text-white py-8 flex flex-row-reverse">
        <Image
        src="/ed.webp"
        width={300}
        height={300}
        alt="Edvanture park"/>
        <div className="container mx-auto text-center px-4">
          <p className="text-sm">© 2025 Your Company. All Rights Reserved.</p>
          <div className="mt-4">
            <a href="#" className="text-blue-400 hover:text-blue-500 mx-2">
              Privacy Policy
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-500 mx-2">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;
