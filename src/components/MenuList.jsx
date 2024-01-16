import { imageadd } from "../constant";


const MenuList = (info) => {
    console.log(info);
    return(
        <div className=" w-[980px]  bg-slate-300 mt-6 rounded-lg">
            <h1>

            </h1>
          { info.map((category) => {
               <div className="flex justify-between mt-4">
               <div>
                   <hr />
                    <h2>{category?.card?.info?.name}</h2>
                    <h4>{category?.card?.info?.price}</h4>
                    <p>{category?.card?.info}</p>
               </div>
               <img src={imageadd+category?.card?.info?.imageId} alt="dishImage" />
           </div>
          })
          }
        </div>
    )
}

export default MenuList;