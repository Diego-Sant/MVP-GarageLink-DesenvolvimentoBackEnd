import { Link, useLocation } from "react-router-dom";

function Card({ item }) {
    const formatPriceToRent = (price) => price.toFixed(2).replace('.', ',');
    const formatPriceToBuy = (price) => price.toFixed(3);
    const location = useLocation();

    let priceDisplay = "";
    if (item.buyOrRent === "Alugar") {
        priceDisplay = `R$ ${formatPriceToRent(item.priceToRent)} p/ dia`;
    } else if (item.buyOrRent === "Comprar") {
        priceDisplay = `R$ ${formatPriceToBuy(item.priceToBuy)}`;
    }

    return (
        <div className="flex flex-col lg:flex-row gap-[20px]">
            {location.pathname === "/carros" ? (
                <Link to={`${item.id}`} className="flex-[2] h-[200px]">
                    <img 
                        className="w-[100%] h-[100%] object-cover rounded-[10px] 
                            transition-all duration-[0.4s] ease-in-out hover:scale-[1.05]" 
                        src={item.images?.[0] || ""} 
                        alt={item.title} 
                    />
                </Link>
            ) : (
                <Link to={`${item.id}`} className="flex-[2] h-[200px]">
                    <img 
                        className="w-[100%] h-[100%] object-cover rounded-[10px] 
                            transition-all duration-[0.4s] ease-in-out hover:scale-[1.05]" 
                        src={item.images?.[0] || ""} 
                        alt={item.title} 
                    />
                </Link>
            )}
            <div className="flex-[3] flex flex-col justify-between gap-[10px]">

                <h2 className="-mt-[0.30rem] truncate max-w-[200px] md:max-w-max text-[20px] font-[600] text-[#444] transition-all duration-[0.4s] ease-in-out hover:text-black hover:scale-[1.01]">
                    <Link to={`${item.id}`}>{item.title}</Link>
                </h2>
                {location.pathname === "/carros" ? (
                    <p className="flex gap-[5px] -mt-[1.8rem] sm:-mt-[2.8rem] md:-mt-[1rem] xl:-mt-[2.1rem] text-[14px] text-[#888]">
                        <img className="svgcolor" width={16} height={16} src="/pin.svg" 
                            alt="Ícone de localização" />
                        <span className="truncate max-w-[190px] md:max-w-max">
                            {item.address}
                        </span>
                    </p>
                ) : (
                    <p className="flex gap-[5px] xl:-mt-[2.1rem] text-[14px] text-[#888]">
                        <img className="svgcolor" width={16} height={16} src="/pin.svg" alt="Ícone de localização" />
                        <span className="truncate max-w-[190px] md:max-w-max">{item.address}</span>
                    </p>
                )}
                
                {location.pathname === "/carros" ? (
                    <p className="text-[20px] -mt-[1.1rem] sm:-mt-[2.2rem] md:-mt-[0.5rem] xl:-mt-[1.7rem] font-[500] bg-[#fece51]/40 rounded-[5px] p-[5px] w-max">
                        {priceDisplay}
                    </p>
                ) : (
                    <p className="text-[20px] xl:-mt-[1.7rem] font-[500] bg-[#fece51]/40 rounded-[5px] p-[5px] w-max">
                        {priceDisplay}
                    </p>
                )}

                <div className="flex -mt-[1rem] sm:-mt-[1.9rem] md:-mt-0 justify-between gap-[10px] items-center">
                    
                    {location.pathname === "/carros" ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 xl:flex gap-[20px] text-[14px] items-center">
                            <div className="flex justify-center items-center gap-[5px] bg-[#f5f5f5] p-[5px] rounded-[5px]">
                                <span className="truncate max-w-[80px]">{item.brand}</span>
                            </div>
                            <div className="flex justify-center items-center gap-[5px] bg-[#f5f5f5] p-[5px] rounded-[5px]">
                                <span className="truncate max-w-[80px]">{item.condition}</span>
                            </div>
                            <div className="flex justify-center items-center gap-[5px] bg-[#f5f5f5] p-[5px] rounded-[5px]">
                                <span className="truncate max-w-[80px]">{item.color}</span>
                            </div>
                            <div className="flex justify-center items-center gap-[5px] bg-[#f5f5f5] p-[5px] rounded-[5px]">
                                <span className="truncate max-w-[80px]">{item.transmission}</span>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-2 xl:flex gap-[20px] text-[14px] items-center mt-[30px] xl:mt-0">
                            <div className="flex justify-center items-center gap-[5px] bg-[#f5f5f5] p-[5px] rounded-[5px]">
                                <span className="truncate max-w-[80px]">{item.brand}</span>
                            </div>
                            <div className="flex justify-center items-center gap-[5px] bg-[#f5f5f5] p-[5px] rounded-[5px]">
                                <span className="truncate max-w-[80px]">{item.condition}</span>
                            </div>
                            <div className="flex justify-center items-center gap-[5px] bg-[#f5f5f5] p-[5px] rounded-[5px]">
                                <span className="truncate max-w-[80px]">{item.color}</span>
                            </div>
                            <div className="flex justify-center items-center gap-[5px] bg-[#f5f5f5] p-[5px] rounded-[5px]">
                                <span className="truncate max-w-[80px]">{item.transmission}</span>
                            </div>
                        </div>
                    )}

                    {location.pathname === "/carros" ? (
                        <div className="flex flex-col xl:flex-row gap-[20px]">
                            <div className="flex justify-center border border-[#999] py-[5px] xl:py-[2px] px-[5px] rounded-[5px] cursor-pointer hover:bg-[#D3D3D3]">
                                <img width={16} height={16} src="/save.svg" alt="Salvar" />
                            </div>
                            <div className="flex justify-center border border-[#999] py-[5px] xl:py-[2px] px-[5px] rounded-[5px] cursor-pointer hover:bg-[#D3D3D3]">
                                <img width={16} height={16} src="/chat.svg" alt="Conversar" />
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row mt-[30px] xl:mt-0  gap-[20px]">
                            <div className="flex justify-center border border-[#999] py-[5px] xl:py-[2px] px-[5px] rounded-[5px] cursor-pointer hover:bg-[#D3D3D3]">
                                <img width={16} height={16} src="/save.svg" alt="Salvar" />
                            </div>
                            <div className="flex justify-center border border-[#999] py-[5px] xl:py-[2px] px-[5px] rounded-[5px] cursor-pointer hover:bg-[#D3D3D3]">
                                <img width={16} height={16} src="/chat.svg" alt="Conversar" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Card;