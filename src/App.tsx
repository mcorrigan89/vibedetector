import "./index.css";

type VibeLevel = 1 | 2 | 3 | 4 | 5;

const getVibeText = (level: VibeLevel) => {
  switch (level) {
    case 1:
      return "terrible vibes";
    case 2:
      return "the vibes are off";
    case 3:
      return "neutral vibes";
    case 4:
      return "good vibes";
    case 5:
      return "oh yeah we be vibing";
    default:
      return "unknown vibe level";
  }
};

const getVibeColor = (level: VibeLevel) => {
  switch (level) {
    case 1:
      return "text-red-700 dark:text-red-400";
    case 2:
      return "text-orange-600 dark:text-orange-400";
    case 3:
      return "text-yellow-600 dark:text-yellow-400";
    case 4:
      return "text-green-600 dark:text-green-400";
    case 5:
      return "text-emerald-700 dark:text-emerald-400";
    default:
      return "text-gray-500 dark:text-gray-400";
  }
};

interface AppProps {
  vibe: VibeLevel;
}

export function App({ vibe }: AppProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors justify-center items-center flex">
      <div className="max-w-7xl mx-auto p-8 text-center relative z-10">
        <div className={`text-7xl font-bold ${getVibeColor(vibe)}`}>
          {getVibeText(vibe)}
        </div>
      </div>
    </div>
  );
}

export default App;
