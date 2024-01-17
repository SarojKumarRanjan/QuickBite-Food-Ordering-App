import { imageadd } from "../constant";


const MenuList = (info) => {
 // console.log(info?.info?.card?.card?.itemCards);
  return info === undefined || !info?.info?.card?.card?.itemCards ? (
    null
  ) : (
    <div className=" w-[960px]  bg-slate-300 mt-6 rounded-lg">
      <h1>{info?.info?.card?.card?.title}</h1>
      {info?.info?.card?.card?.itemCards.map((menuList) =>

          
            /*  {
                console.log(menuList?.card?.info?.description);
             } */

        menuList === undefined ? (
          <h1 key={menuList?.card?.info?.id}>No item available</h1>
        ) : (
          <div
            className="flex justify-between mt-4"
            key={menuList?.card?.info?.id}
          >
            <div>
              <hr />
              <h2>{menuList?.card?.info?.name}</h2>
              <h4>{menuList?.card?.info?.price}</h4>
              <p>{menuList?.card?.info?.description}</p>
            </div>
            <img
            className=" h-40 w-40"
              src={imageadd + menuList?.card?.info?.imageId}
              alt="dishImage"
            />
          </div>
        )
      )}
    </div>
  );
};

export default MenuList;
