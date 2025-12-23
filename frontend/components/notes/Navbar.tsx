import { Search, Settings, Menu } from 'lucide-react';
import { useState , useEffect } from 'react';
import { AppDispatch } from '@/store';
import { useDispatch } from 'react-redux';
import { setSearchFilter } from '@/store/notesSlice';
interface NavbarProps {
  onMenuClick: () => void;
}
const getInitials = (name?: string | null) => {
  if (!name) return "U";

  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0][0].toUpperCase();

  return (
    parts[0][0].toUpperCase() +
    parts[parts.length - 1][0].toUpperCase()
  );
};


export function Navbar({ onMenuClick }: NavbarProps) {

  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    try {
      const user = JSON.parse(storedUser);
      setUserName(user.name);
    } catch {
      setUserName(null);
    }
  }
}, []);

  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    dispatch(setSearchFilter(event.target.value));
  };

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="sticky top-0 z-50 glass border-b border-border/50">
      <div className="flex items-center justify-between px-4 md:px-6 h-16">
        {/* Left: Logo + Menu Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg hover:bg-accent/10 transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5 text-foreground" />
          </button>
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-background font-bold">A</span>
            </div>
            <h1 className="hidden sm:block text-foreground">AlgoKeep</h1>
          </div>
        </div>

        {/* Center: Search Bar */}
        <div className="flex-1 max-w-2xl mx-4 md:mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search DSA notes..."
              className="w-full pl-10 pr-4 py-2 bg-secondary rounded-lg border border-border/50 
                       text-foreground placeholder:text-muted-foreground
                       focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent
                       transition-all"
            />
          </div>
        </div>

        {/* Right: Profile + Settings */}
        <div className="flex items-center gap-2">
          <button
            className="p-2 rounded-lg hover:bg-accent/10 transition-colors"
            aria-label="Settings"
          >
            <Settings className="w-5 h-5 text-foreground" />
          </button>
          
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent 
                        flex items-center justify-center cursor-pointer
                        hover:shadow-lg hover:shadow-accent/20 transition-all">
            <span className="text-sm text-background">{getInitials(userName)}</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
