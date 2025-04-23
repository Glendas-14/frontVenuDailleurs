export default function Card(){
    return(
        <div className="w-2/5 h-2/3 flex flex-col justify-center items-center gap-7 px-10 py-10 bg-darkBlue rounded-lg shadow-lg shadow-black">
            <div className="w-full h-1/2 flex justify-center items-center">
                <img src="/images/logo.png" alt="Card Image" className="w-20 h-20 rounded-full" />
            </div>
            <div className="w-full h-1/2 flex flex-col justify-center items-center gap-4 mb-5">
                <h2 className="text-xl font-bold text-white">Card Title</h2>
                <p className="text-white">This is a description of the card content. It can be a brief summary or any other information.</p>
            </div>
        </div>
    )
}