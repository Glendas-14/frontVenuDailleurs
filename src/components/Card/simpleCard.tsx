interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
}

export default function Card({title, description, imageUrl}: CardProps) {
    return(
        <div className="w-full sm:w-80 md:w-96 lg:w-80 xl:w-96 h-auto bg-secondaryOrange rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-center mb-4">
        <img src={imageUrl} alt={title} className="w-16 h-16 object-contain" />
      </div>
      <h3 className="text-xl font-bold text-white mb-3 text-center">{title}</h3>
      <p className="text-gray-50 text-center leading-relaxed">{description}</p>
    </div>
    )
}