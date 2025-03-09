const Header = () => {
    return (
        <header className="bg-white flex justify-between px-5 py-5 border-b-gray-200 border-solid border-b-2">
            <div className="header-left flex justify-between items-center">
              <img className="avatar" src={"/chefify.png"} alt="Example" />
              <input className="rounded-lg bg-slate-100 border-blue-200 ml-2 px-5 py-2.5 " placeholder="Enter your keywords" />
            </div>
            <div className="header-right flex items-center">
                <ul className="pl-3 px-6">
                  <li className="inline-block px-3.5 py-3 hover:text-pink-500 cursor-pointer text-gray-700">What to cook</li>
                  <li className="inline-block px-3.5 py-3 hover:text-pink-500 cursor-pointer text-gray-700">Recipes</li>
                  <li className="inline-block px-3.5 py-3 hover:text-pink-500 cursor-pointer text-gray-700">Ingredients</li>
                  <li className="inline-block px-3.5 py-3 hover:text-pink-500 cursor-pointer text-gray-700">Occasions</li>
                  <li className="inline-block px-3.5 py-3 hover:text-pink-500 cursor-pointer text-gray-700">About us</li>
                </ul>
                <div className="flex items-center justify-center mx-2 px-2 rounded-xl py-3 bg-pink-100">
                  <img src={""} alt="" />
                  <h2 className="text-base px-3 text-pink-500 font-semibold">Your Recipes Box</h2>
                </div>
                <div className="avatar">
                  <img className="avatar size-12 rounded-full" src={"/avatar.png"} alt="Example" />
                </div>
            </div>
        </header>
    );
}
export default Header;