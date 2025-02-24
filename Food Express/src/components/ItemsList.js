import { CardImage_Link } from "../utils/constants";

const ItemsList=({items})=>{
    console.log("itemlist",items);
    return(
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-200 text-left">
                    <div className="py-2 flex justify-between">
                        <div className="w-9/12">
                        <span>{item.card.info.name}</span>
                        <span>- ₹ {item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
                        <p className="text-xs pt-2">{item.card.info.description}</p>
                        </div>
                        <div className="w-3/12">
                        <div className="absolute bg-green-400 shadow-lg mx-14 rounded-md p-1 mt-16">
                            <button>Add +</button>
                        </div>

                        <img src={CardImage_Link + item.card.info.imageId} className="w-32 h-24 ml-4 p-2"/>
                    </div>
                    </div>
            </div>
        ))}
        </div>
    )
}


export default ItemsList;
