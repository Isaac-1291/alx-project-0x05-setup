import { WIDTH, HEIGHT } from "@/constants";
import ImageCard from "@/components/common/ImageCard";
import { ImageProps } from "@/interfaces";
import { useState } from "react";

const Home: React.FC = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [generatedImages, setGeneratedImages] = useState<ImageProps[]>([]);

  const handleGenerateImage = async () => {
    if (!prompt.trim()) return;
    setIsLoading(true);

    console.log("Generating Image with prompt:", prompt);
    console.log("API KEY:", process.env.NEXT_PUBLIC_GPT_API_KEY);

    setTimeout(() => {
      const newImageUrl = `https://picsum.photos/${WIDTH}/${HEIGHT}?random=${Date.now()}`;
      const newImage: ImageProps = {
        imageUrl: newImageUrl,
        prompt: prompt,
        action: () => {},
      };

      setGeneratedImages((prevImages) => [newImage, ...prevImages]);
      setPrompt("");
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-2">Image Generation App</h1>
        <p className="text-lg text-gray-700 mb-4">
          Generate stunning images based on your prompts!
        </p>

        <div className="w-full max-w-md">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your prompt here..."
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          />
          <button
            onClick={handleGenerateImage}
            className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
            disabled={isLoading}
          >
            {isLoading ? "Generating..." : "Generate Image"}
          </button>
        </div>
      </div>

      <div className="mt-8 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {generatedImages.map((image, index) => (
          <ImageCard
            key={index}
            imageUrl={image.imageUrl}
            prompt={image.prompt}
            action={image.action}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;