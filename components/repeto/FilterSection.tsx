import { useState } from 'react';
import { ChevronDown, ChevronUp, Filter, X } from 'lucide-react';

interface FilterOption {
  title: string;
  options: string[];
}

interface FilterSectionProps {
  onFilterSubmit?: (selectedFilters: Record<string, string[]>) => void;
}

export default function FilterSection({ onFilterSubmit }: FilterSectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, Set<string>>>({});
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});

  const filters: FilterOption[] = [
    {
      title: "Opportunity",
      options: ["Internship", "Research", "Hackathon", "Scholarship", "Others"]
    },
    {
      title: "Department",
      options: ["CSE", "IT", "EEE", "ECE", "MECH", "CIVIL"]
    },
    {
      title: "Course Level",
      options: ["UG", "PG", "PHD"]
    },
    {
      title: "Exclusive",
      options: ["Men", "Women", "Others"]
    },
    {
      title: "Year",
      options: ["1st year", "2nd year", "3rd year", "4th year", "5th year", "others"]
    }
  ];

  const toggleDropdown = (filterTitle: string) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [filterTitle]: !prev[filterTitle]
    }));
  };

  const toggleOption = (filterTitle: string, option: string) => {
    setSelectedOptions(prev => {
      const currentSet = new Set(prev[filterTitle] || []);
      if (currentSet.has(option)) {
        currentSet.delete(option);
      } else {
        currentSet.add(option);
      }
      return {
        ...prev,
        [filterTitle]: currentSet
      };
    });
  };

  const isSelected = (filterTitle: string, option: string) => {
    return selectedOptions[filterTitle]?.has(option) || false;
  };

  const handleSubmit = () => {
    const formattedFilters: Record<string, string[]> = {};
    Object.entries(selectedOptions).forEach(([title, optionsSet]) => {
      if (optionsSet.size > 0) {
        formattedFilters[title] = Array.from(optionsSet);
      }
    });
    
    onFilterSubmit?.(formattedFilters);
    setIsOpen(false);
  };

  const selectedCount = Object.values(selectedOptions).reduce(
    (count, set) => count + set.size, 
    0
  );

  const FilterContent = () => (
    <div className="space-y-4 w-full">
      {filters.map((filter) => (
        <div key={filter.title} className="border rounded-lg shadow-sm bg-white">
          <button
            onClick={() => toggleDropdown(filter.title)}
            className="w-full px-4 py-3 flex justify-between items-center hover:bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <span className="font-medium text-gray-700">{filter.title}</span>
            {openDropdowns[filter.title] ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </button>

          {openDropdowns[filter.title] && (
            <div className="px-4 pb-3 border-t">
              <div className="pt-2 space-y-2">
                {filter.options.map((option) => (
                  <label
                    key={option}
                    className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded"
                  >
                    <input
                      type="checkbox"
                      checked={isSelected(filter.title, option)}
                      onChange={() => toggleOption(filter.title, option)}
                      className="w-4 h-4 border-2 border-gray-300 rounded cursor-pointer focus:ring-2 focus:ring-blue-500 focus:outline-none checked:bg-blue-500 checked:border-blue-500"
                    />
                    <span className="text-sm text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}

      <button
        onClick={handleSubmit}
        className="w-full mt-6 px-4 py-3 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center space-x-2 transition-colors"
      >
        <Filter className="w-5 h-5" />
        <span>Apply Filters {selectedCount > 0 && `(${selectedCount})`}</span>
      </button>
    </div>
  );

  return (
    <>
      {/* Desktop View */}
      <div className="hidden md:block p-4 space-y-4 w-64 bg-white">
        <FilterContent />
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <Filter className="w-6 h-6" />
        </button>

        {/* Modal Overlay */}
        {isOpen && (
          <div className="fixed inset-0 z-50">
            {/* Background Overlay */}
            <div 
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Modal Content */}
            <div className="absolute inset-0 bg-white flex flex-col">
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-lg font-semibold text-black">Filters</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="text-black w-6 h-6" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                <FilterContent />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}