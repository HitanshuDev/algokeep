import { FileText, Plus, Star, Tag, User } from 'lucide-react';

interface MobileBottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function MobileBottomNav({ activeTab, onTabChange }: MobileBottomNavProps) {
  const tabs = [
    { id: 'all', icon: FileText, label: 'All' },
    { id: 'favorites', icon: Star, label: 'Favorites' },
    { id: 'add', icon: Plus, label: 'Add' },
    { id: 'topics', icon: Tag, label: 'Topics' },
    { id: 'profile', icon: User, label: 'Profile' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 lg:hidden glass border-t border-border/50">
      <div className="grid grid-cols-5 gap-1 px-2 py-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          const isAddButton = tab.id === 'add';

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`
                flex flex-col items-center justify-center gap-1 py-2 rounded-lg
                transition-all duration-200
                ${isAddButton 
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20 -mt-4' 
                  : isActive
                    ? 'text-accent bg-accent/10'
                    : 'text-muted-foreground hover:text-foreground'
                }
              `}
            >
              <Icon className={`${isAddButton ? 'w-6 h-6' : 'w-5 h-5'}`} />
              <span className="text-xs">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
