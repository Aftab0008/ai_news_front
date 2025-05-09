import { useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from './components/NewsCard';
import ImageSlider from "./components/ImageSlider";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchNews();
    const interval = setInterval(fetchNews, 30000); // refresh every 30s
    return () => clearInterval(interval);
  }, []);

 const fetchNews = async () => {
  try {
   const res = await axios.get('https://ai-news-ur4n.onrender.com/api/news');

    setArticles(res.data.articles);
  } catch (err) {
    console.error('Error fetching news:', err);
  }
};
 // Get only the first 5 valid images for the slider
  const sliderImages = articles
    .filter(a => a.urlToImage)
    .slice(0, 5)
    .map(a => a.urlToImage);

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-4">
      {/* Bigger, more stylish heading */}
     <h1 className="text-4xl sm:text-5xl font-bold text-center text-blue-800 mb-10 
              hover:scale-110 hover:animate-bounce cursor-pointer transition-all duration-500 ease-in-out">
  🧠 AI News App
</h1>


      <ImageSlider images={sliderImages} />

      {/* More padding and consistent spacing between cards */}
      <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, i) => (
          <NewsCard key={i} article={article} />
        ))}
      </div>
    </div>
  );
}

export default App;
