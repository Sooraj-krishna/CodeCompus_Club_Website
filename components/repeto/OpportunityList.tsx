import { Opportunity } from '@/types/types';
import OpportunityCard from '@/components/repeto/OpportunityCard';
import opportunitiesData from '@/data/opportunities.json';

interface OpportunityListProps {
  filters: Record<string, string[]>;
  activeTab: string;
}

export default function OpportunityList({ filters, activeTab }: OpportunityListProps) {
  const filterOpportunities = (opportunities: Opportunity[]) => {
    return opportunities.filter(opportunity => {
      // Filter by active tab
      if (activeTab !== 'Latest' && opportunity.category !== activeTab) {
        return false;
      }

      // Apply all other filters
      for (const [key, values] of Object.entries(filters)) {
        if (values.length === 0) continue;

        switch (key.toLowerCase()) {
          case 'opportunity':
            if (!values.includes(opportunity.type)) return false;
            break;
          case 'department':
            if (!opportunity.department.some(d => values.includes(d))) return false;
            break;
          case 'course level':
            if (!opportunity.courseLevel.some(c => values.includes(c))) return false;
            break;
          case 'exclusive':
            if (opportunity.exclusive !== 'All' && !values.includes(opportunity.exclusive)) return false;
            break;
          case 'year':
            if (!opportunity.year.some(y => values.includes(y))) return false;
            break;
        }
      }
      return true;
    });
  };

  const filteredOpportunities = filterOpportunities(opportunitiesData.opportunities);

  return (
    <div className="grid grid-cols-1 gap-6">
      {filteredOpportunities.map(opportunity => (
        <OpportunityCard key={opportunity.id} opportunity={opportunity} />
      ))}
    </div>
  );
}