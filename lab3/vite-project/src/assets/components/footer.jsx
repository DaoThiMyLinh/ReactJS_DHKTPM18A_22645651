const Footer = () => {
    return (
        <>
            <footer className="grid grid-flow-row grid-cols-12 gap-2 px-16 py-9 bg-black text-white">
                <div className="col-span-6 ">
                    <h2 className="font-bold mb-3">About Us</h2>
                    <p className="w-3/4 text-justify">Welcome to our website, a wonderful place to explore and learn how to cook like a pro</p>
                    <div className="flex items-center mt-3">
                        <input className="px-3 py-2 w-3/5 rounded-lg bg-white text-black" placeholder="Enter your Email" />
                        <button className="bg-pink-500 mx-5 px-3 py-2 rounded-md">Send</button>
                    </div>
                </div>
                <div className="col-span-1 row-span-2">

                </div>
                <div className="col-span-3">
                    <h2 className="font-bold">Learn more</h2>
                    <div className="my-2 hover:text-pink-500 cursor-pointer">Our Cooks</div>
                    <div className="my-2 hover:text-pink-500 cursor-pointer">See Our Features</div>
                    <div className="my-2 hover:text-pink-500 cursor-pointer">FAQ</div>
                </div>

                <div className="col-span-2 row-span-2">
                    <h2 className="font-bold">Recipes</h2>
                    <div className="my-2 hover:text-pink-500 cursor-pointer">What to cook this week</div>
                    <div className="my-2 hover:text-pink-500 cursor-pointer">Pasta</div>
                    <div className="my-2 hover:text-pink-500 cursor-pointer">Dinner</div>
                    <div className="my-2 hover:text-pink-500 cursor-pointer">Healthy</div>
                    <div className="my-2 hover:text-pink-500 cursor-pointer">Vegetarian</div>
                    <div className="my-2 hover:text-pink-500 cursor-pointer">Vegan</div>
                    <div className="my-2 hover:text-pink-500 cursor-pointer">Christmas</div>
                </div>

                <div className="col-span-6 flex items-end">
                    <div className="flex items-center">
                        <img className="avatar size-16 " src={"/dauBepTrang.png"} alt="Example" />
                        <h2 className="font-bold mx-4 text-3xl">Chefify</h2>
                        <div className="mx-4 text-xs font-bold relative top-1">2023 Chefify Company</div>
                        <div className="mx-4 text-xs font-bold relative top-1">Terms of Servicel Privacy Policy</div>
                    </div>
                </div>

                <div className="col-span-3">
                    <div className="relative bottom-0 mt-5">
                        <h2 className="font-bold">Shop</h2>
                        <div className="my-2 hover:text-pink-500 cursor-pointer">Gift Subscription</div>
                        <div className="my-2 hover:text-pink-500 cursor-pointer">Send Us Feedback</div>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer;