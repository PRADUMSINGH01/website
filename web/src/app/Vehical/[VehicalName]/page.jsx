import ToyotaModels from "@/components/SearchBar/SearchByCat/AboutBrand"
import MercedesPartsAccessories from "@/components/SearchBar/SearchByCat/PartAndAcc"
const page = ({params})=>{


    return(
        <div className="">
            
        <ToyotaModels/>
<div className="text-black">
    <h1 className="text-4xl text-center py-2 px-2">
    {`${params.VehicalName +" "} Parts and Accessiries`}
    </h1>

    <MercedesPartsAccessories/>
</div>
        </div>
    )

}

export default page