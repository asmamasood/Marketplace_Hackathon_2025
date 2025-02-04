import Image from "next/image";
const Header =()=>{
    return( 
        
              <header className="bg-white border-b border-gray-200 py-4 hidden lg:block">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
                  {/* Title Section */}
                  <div className="flex items-center space-x-2">
                    {/* Icon */}
                    <div className="w-8 h-8 bg-purple-200 flex items-center justify-center">
                      <Image
                        src="/command.svg"
                        alt="logo"
                        width={32} 
                        height={32} 
                      />
                    </div>
                    {/* Title */}
                    <h1 className="text-lg font-semibold text-gray-800 max-w-full sm:max-w-[533px]">
                      High Fidelity Dashboard - Home Rent
                    </h1>
                  </div>
          
                  {/* Profile Section */}
                  <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4">
                    <p className="text-sm text-gray-600">
                      Last Updated:{" "}
                      <span className="font-bold text-black">8-Aug-2022</span>
                    </p>
                  </div>
                </div> 
              
              </header>             
    )
}
export default Header;      
       