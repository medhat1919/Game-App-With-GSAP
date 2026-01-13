  
const Footer = () => {
  return (
    <footer className="w-screen bg-blue-800 py-4 text-black ">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-2xl font-bold md:text-left pl-10">
          ©Nova 2024. All rights reserved
        </p>

 

        <a
          href="#privacy-policy"
          className="text-center pr-10 text-2xl font-bold hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;