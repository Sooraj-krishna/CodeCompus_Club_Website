interface TabSectionProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function TabSection({ activeTab, onTabChange }: TabSectionProps) {
  const tabs = ["Latest", "Popular", "Recommended", "Fortune 100"];
  
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="flex space-x-6 p-4 overflow-x-auto justify-evenly">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`text-gray-600 hover:text-blue-600 whitespace-nowrap font-medium
              ${activeTab === tab ? 'text-blue-600 border-b-2 border-blue-600' : ''}`}
            onClick={() => onTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}