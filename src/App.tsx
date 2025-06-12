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
      return "text-red-700";
    case 2:
      return "text-orange-600";
    case 3:
      return "text-yellow-600";
    case 4:
      return "text-green-600";
    case 5:
      return "text-emerald-700";
    default:
      return "text-gray-500";
  }
};

interface AppProps {
  vibe: VibeLevel;
}

export function App({ vibe }: AppProps) {
  return (
    <div className="max-w-7xl mx-auto p-8 text-center relative z-10">
      <div className={`text-7xl font-bold ${getVibeColor(vibe)}`}>
        {getVibeText(vibe)}
      </div>
    </div>
  );
}

export default App;
