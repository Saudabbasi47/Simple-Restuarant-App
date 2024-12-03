import Image from "next/image";

export default function Card(props:any){
    
    
    
    
    
    
    return<>
    <section className=" w-[400px] bg-blue-00 p-4 bg-[#fcf3f3] border-2 rounded-2xl  border-[#f5f7ff4a]">
<div className=""><p className="border-[3px] rounded-[100%] w-8  h-8 flex justify-center items-center text-gray-400 ">{props.id} </p> </div>
<div className="text-gray-400">{props.cate} </div>
<div className="text-[30px] font-bold ">{props.name} </div>
<div className="text-gray-400 text-sm">{props.detail} </div>
<div className="flex items-center  space-x-4">
  <div className="flex-1 h-px bg-gray-300"></div>
  <span className="text-gray-400 select-none mb-1 hover:text-black ">Read </span>
</div>
<div className="mt-3">
<Image src={`/images/${props.image}`} height={500} width={1000} className="h-[300px] w-[600px] object-cover object-center " alt="image"/>

</div>
<div className="flex justify-end items-center">
  <button className=" flex items-end"><p className="border-[2px] border-gray-300 flex justify-center rounded-md items-center p-1 mt-5 hover:text-black duration-300  text-gray-400">Order Now</p></button>
</div>



    </section>
    
    
    
    </>
}