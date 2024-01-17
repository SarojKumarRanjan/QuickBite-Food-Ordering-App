import { imageadd } from "../constant";

const MenuList = (info) => {
  // console.log(info?.info?.card?.card?.itemCards);
  return info === undefined || !info?.info?.card?.card?.itemCards ? null : (
    <div className=" w-[960px]  bg-slate-200 mt-6 rounded-lg border-4 border-gray-600">
      <h1 className=" px-10 pt-4 text-2xl font-semibold">
        {info?.info?.card?.card?.title}
      </h1>
      {info?.info?.card?.card?.itemCards.map((menuList) =>
        menuList === undefined ? (
          <h1 key={menuList?.card?.info?.id}>No item available</h1>
        ) : (
          <div
            className="flex justify-between mt-4 border-t-2 border-gray-700"
            key={menuList?.card?.info?.id}
          >
            <div className=" ">
              <h2 className=" px-10 pt-4 text-lg font-medium">
                {menuList?.card?.info?.name}
              </h2>
              <h4 className=" px-10 pt-2 text-md">
              {"Price: ₹" + ((menuList?.card?.info?.price ? menuList.card.info.price / 100 : menuList?.card?.info?.defaultPrice / 100) || "Not available")}

              </h4>
              <p className=" px-10 pt-2 pb-1 text-sm font-light">
                {menuList?.card?.info?.description}
              </p>
            </div>

            {menuList?.card?.info?.imageId && (
              <img
                className="h-30 w-40 p-4"
                src={imageadd + menuList?.card?.info?.imageId}
                alt="dishImage"
              />
            )}
          </div>
        )
      )}
    </div>
  );
};

export default MenuList;
