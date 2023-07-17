import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { FOODITEM_IMG_URL } from "../contants";
import { useState } from "react";
const itemCard = ({ foodItem }) => {
  //console.log(fooditem);
  const dispatch = useDispatch();
  const [addbtn, setAddBtn] = useState(false);
  // const handleAddItem = (foodItem) => {
  //   //console.log(foodItem);
  //   dispatch(addItem(foodItem));
  //   setAddBtn(true);
  // };
  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  const removeFoodItem = (item) => {
    dispatch(removeItem(item));
  };
  return (
    <>
      <div className="flex justify-between items-center border-b-2 p-3">
        <div>
          <h2 className="text-base font-bold">{foodItem?.card?.info?.name}</h2>
          <p>
            ₹{" "}
            {foodItem?.card?.info?.price / 100 ||
              foodItem?.card?.info?.defaultPrice / 100}
          </p>
          <div className="text-slate-600 text-sm">
            {foodItem?.card?.info?.description}
            {/* { console.log("hg")} */}
          </div>
        </div>
        <div className="flex flex-col items-center w-40 h-15">
          {foodItem?.card?.info?.imageId && (
            <img src={FOODITEM_IMG_URL + foodItem?.card?.info?.imageId} />
          )}

          {/* <button
            data-testId={addbtn}
            onClick={() => handleAddItem(foodItem)}
            className="w-20 h-8 border border-slate-400 rounded text-green-600 mt-1"
          >
            {!addbtn ? "Add" : "Added"}
          </button> */}
          <div className="text-center w-[118]  mt-1 border-2 rounded-md">
            <button
              className="text-gray-800 font-extrabold px-3"
              onClick={() => {
                removeFoodItem();
              }}
            >
              -
            </button>
            <button
              className="text-green-800 font-bold px-2 m-1 text-sm border-x-2 align-middle"
              disabled={true}
            >
              {/* {
                                  cartItems.filter((f) => f.id === item.id)
                                    .length
                                } */}
            </button>
            <button
              className="text-green-800 font-extrabold px-3"
              onClick={() => addFoodItem(foodItem)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default itemCard;
