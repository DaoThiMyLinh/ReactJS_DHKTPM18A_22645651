export function ProductItem({ item }) { 
    return (
        <div className="box w-50 border-solid border-gray-300 border-1 rounded-xl px-3 py-4">
            <div className="box-img w-50 h-50">
                <img src={item.images[0]} alt="" className="w-full h-full object-contain" /> 
            </div>
            <div className="box-info flex justify-between items-center h-15">
                <div className="name font-semibold text-left">{item.title}</div>
                <img src={"./Icon Button 73.png"} alt="item" className="size-7"/>
            </div>
            <div className="rounded-sm inline-block text-white font-semibold minutes text-left mt-2 py-2 px-1 bg-pink-400">
                ${item.price} 
            </div>
        </div>
    );
}
