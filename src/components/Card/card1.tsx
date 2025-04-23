interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
}

export default function Card({title, description, imageUrl}: CardProps) {
    return(
        <div className="w-2/5 h-2/3 flex flex-col justify-center items-center gap-7 px-10 py-10 bg-chocoGradient rounded-lg shadow-md shadow-black">
            <div className="w-full h-1/2 flex justify-center items-center">
                <img src={imageUrl} alt="Card Image" className="w-14 h-14 rounded-full" />
            </div>
            <div className="w-full h-1/2 flex flex-col justify-center items-center text-center gap-4 mb-5">
                <h2 className="text-xl font-bold text-white">{title}</h2>
                <p className="text-lightGray">{description}</p>
            </div>
        </div>
    )
}