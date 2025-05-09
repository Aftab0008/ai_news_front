// src/components/NewsCard.jsx
function NewsCard({ article }) {
  return (
    <div className="bg-white  rounded-xl shadow-md p-2">
      <img src={article.urlToImage} alt={article.title} className="w-full h-50 object-cover rounded" />
      <h2 className="text-lg font-semibold mt-2">{article.title}</h2>
      <p className="text-sm text-gray-600 mt-1">{article.description}</p>
      <a
        href={article.url}
        target="_blank"
        className="text-blue-600 hover:underline mt-2 inline-block"
      >
        Read more →
      </a>
    </div>
  );
}

export default NewsCard;
