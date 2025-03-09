import { ProductList } from "./ProductList";

export const Content = () => {
  return (
    <div className="mx-15 my-10">
      <h2 className="text-3xl font-medium text-left">Emma Gonzalez's Recipe Box</h2>
      <div className="flex items-center gap-12 my-10">
        <img src="avatar.png" className="rounded-full w-30 h-30" alt="" />
        <div className="">
          <h2 className="mb-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum iste
            iure similique obcaecati, qui animi commodi quia. Quasi aperiam
            amet, facere dolore id quia, ratione iste aliquam cum beatae
            repellat?
          </h2>
          <div className="flex gap-5">
            <button className="text-pink-500 cursor-pointer">
              6.5k Subscribes
            </button>
            <button className="text-white bg-pink-500 px-8 cursor-pointer py-3 rounded-2xl">
              Share
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-2 items-center border-solid border-b-2 border-stone-200 my-5">
        <button className="py-3 px-5 bg-pink-50 text-pink-500 rounded-t-2xl">
          Saved Recipes
        </button>
        <button className="py-3 px-5  text-stone-500 rounded-t-2xl">
          Folders
        </button>
        <button className="py-3 px-5  text-stone-500 rounded-t-2xl">
          Recipes by Genevieve
        </button>
      </div>
      <ProductList />
    </div>
  );
};
