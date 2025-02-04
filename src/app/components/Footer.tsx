
  
  const Footer = () => {
    return (
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between md:items-center md:space-y-0">
  
            {/* Brand and Vision */}
            <div className="mb-6 md:mb-0 md:w-1/4">
              <h1 className="text-[#3563E9] font-plus-jakarta text-2xl font-bold leading-tight">
                MORTENT
              </h1>
              <p className="font-plus-jakarta text-[#131313] w-[292px] font-medium leading-6 mt-2">
                Our vision is to provide convenience <br /> and help increase your sales
                business.
              </p>
            </div>
  
            {/* Links Section */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:w-3/4">
              {/* About */}
              <div>
                <h3 className="font-plus-jakarta font-semibold text-gray-800 text-lg mb-4">
                  About
                </h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:underline">How it works</a></li>
                  <li><a href="#" className="text-gray-600 hover:underline">Featured</a></li>
                  <li><a href="#" className="text-gray-600 hover:underline">Partnership</a></li>
                  <li><a href="#" className="text-gray-600 hover:underline">Business Relation</a></li>
                </ul>
              </div>
  
              {/* Community */}
              <div>
                <h3 className="font-plus-jakarta font-semibold text-gray-800 text-lg mb-4">
                  Community
                </h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:underline">Events</a></li>
                  <li><a href="#" className="text-gray-600 hover:underline">Blog</a></li>
                  <li><a href="#" className="text-gray-600 hover:underline">Podcast</a></li>
                  <li><a href="#" className="text-gray-600 hover:underline">Invite a friend</a></li>
                </ul>
              </div>
  
              {/* Socials */}
              <div>
                <h3 className="font-plus-jakarta font-semibold text-gray-800 text-lg mb-4">
                  Socials
                </h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:underline">Discord</a></li>
                  <li><a href="#" className="text-gray-600 hover:underline">Instagram</a></li>
                  <li><a href="#" className="text-gray-600 hover:underline">Twitter</a></li>
                  <li><a href="#" className="text-gray-600 hover:underline">Facebook</a></li>
                </ul>
              </div>
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className="border-t border-gray-200 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy;2022 MORTENT. All rights reserved</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <a href="#" className="hover:underline">Privacy & Policy</a>
              <a href="#" className="hover:underline">Terms & Condition</a>
            </div>
          </div>
        </div>  
      </footer>
    );
  }
  
  export default Footer;
  
  