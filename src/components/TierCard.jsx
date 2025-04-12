function TierCard({ title, features, price, illustration }) {
    return (
        <div className="bg-white rounded-2xl shadow-md p-6 text-center border border-gray-200 hover:shadow-lg transition">
            <img src={illustration} alt={title} className="w-20 h-20 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
            <p className="text-2xl text-blue-300 font-semibold mb-4">{price}</p>
            <ul className="text-left list-disc list-inside text-gray-700 space-y-1">
                {features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                ))}
            </ul>
        </div>
    );
}

export default TierCard;
