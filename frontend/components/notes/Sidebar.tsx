import { 
  FileText, 
  Plus, 
  Tag, 
  Code2, 
  Star, 
  X,
  ChevronDown ,
  Trash2
} from 'lucide-react';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { AppDispatch } from '@/store';
import { RootState } from '@/store';
import {setTopicFilter, setLanguageFilter , toggleFavouritesFilter, clearFilters} from '@/store/notesSlice';
import { selectFavouriteCount } from '@/store/noteSelector';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onAddNote: () => void;
}

const topics = [
  'Arrays',
  'Linked Lists',
  'Trees',
  'Graphs',
  'Dynamic Programming',
  'Sorting',
  'Searching',
  'Hash Tables'
];

const languages = [
  { name: 'C++', color: 'bg-blue-500' },
  { name: 'Java', color: 'bg-orange-500' },
  { name: 'Python', color: 'bg-green-500' },
  { name: 'JavaScript', color: 'bg-yellow-500' }
];

export function Sidebar({ isOpen, onClose, onAddNote }: SidebarProps) {
  const [showTopics, setShowTopics] = useState(true);
  const [showLanguages, setShowLanguages] = useState(true);
  const [clickedTopicIndex , setClickedTopicIndex] = useState(-1);

  const { notes, loading, error } = useSelector(
    (state: RootState) => state.notes
  );

  const favourites = useSelector(selectFavouriteCount);


  const dispatch = useDispatch<AppDispatch>();

  const handleTopicClick = (topic: string, index : number) => {
    console.log(topic);
    dispatch(setTopicFilter(topic));
    setClickedTopicIndex(index === clickedTopicIndex ? -1 : index);

  }


  const handleLanguageClick = (language: string) => {
    dispatch(setLanguageFilter(language));
  }


  const handleFavouritesClick = () => {
    dispatch(toggleFavouritesFilter());
  }

  const handleClearFilters = () => {
    dispatch(clearFilters());
    setClickedTopicIndex(-1);
  }           


  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 h-screen w-64 bg-secondary border-r border-border/50
          z-50 transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Close button for mobile */}
          <div className="flex items-center justify-between p-4 lg:hidden border-b border-border/50">
            <h2 className="text-foreground">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-accent/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {/* Main Navigation */}
            <div className="space-y-1">
              <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg
                               bg-primary/10 text-primary border border-primary/20
                               hover:bg-primary/20 transition-all group">
                <FileText className="w-5 h-5" />
                <span>All Notes</span>
                <span className="ml-auto text-sm bg-primary/20 px-2 py-0.5 rounded">{notes.length}</span>
              </button>

              <button 
                onClick={onAddNote}
                className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg
                           text-foreground hover:bg-accent/10 hover:text-accent
                           transition-all group">
                <Plus className="w-5 h-5" />
                <span>Add New Note</span>
              </button>

              <button onClick={handleFavouritesClick} className=" w-full flex items-center gap-3 px-4 py-2.5 rounded-lg
                               text-foreground hover:bg-accent/10 hover:text-accent
                               transition-all group">
                <Star className="w-5 h-5" />
                <span>Favorites</span>
                <span className="ml-auto text-sm bg-muted-foreground/20 px-2 py-0.5 rounded">{favourites}</span>
              </button>
            </div>

            

            {/* Topics Section */}
            <div>
              <button
                onClick={() => setShowTopics(!showTopics)}
                className="w-full flex items-center justify-between mb-2 px-2 py-1
                         text-muted-foreground hover:text-foreground transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  <span className="text-sm">Topics</span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform ${showTopics ? '' : '-rotate-90'}`} />
              </button>
              
              <div>
              {showTopics && (
                <div className="space-y-0.5">
                  {topics.map((topic, index) => (
                    <button
                      key={topic}
                     onClick={() => handleTopicClick(topic, index)}

                      className={`w-full text-left px-4 py-1.5 rounded-md text-sm
                               text-muted-foreground hover:text-foreground hover:bg-accent/10
                               transition-all ${clickedTopicIndex === index ? 'bg-accent/10' : ''}`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              )}
              
              </div>
            </div>

            {/* Languages Section */}
            <div>
              <button
                onClick={() => setShowLanguages(!showLanguages)}
                className="w-full flex items-center justify-between mb-2 px-2 py-1
                         text-muted-foreground hover:text-foreground transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4" />
                  <span className="text-sm">Languages</span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform ${showLanguages ? '' : '-rotate-90'}`} />
              </button>
              
              {showLanguages && (
                <div className="space-y-0.5">
                  {languages.map((lang) => (
                    <button
                      key={lang.name}
                      onClick={() => handleLanguageClick(lang.name)}

                      className="w-full text-left px-4 py-1.5 rounded-md text-sm
                               text-muted-foreground hover:text-foreground hover:bg-accent/10
                               transition-all flex items-center gap-2"
                    >
                      <span className={`w-2 h-2 rounded-full ${lang.color}`} />
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button onClick={() => handleClearFilters()} className='ml-2 w-full flex gap-4 text-left mt-4 px-4 py-1.5 rounded-md text-sm
                               text-muted-foreground hover:text-foreground hover:bg-accent/10
                               transition-all'>Clear Filters <Trash2 className='w-4 h-4'/></button>

          {/* Footer */}
          <div className="p-4 border-t border-border/50">
            <div className="text-xs text-muted-foreground">
              <p>Total Notes: {notes.length}</p>
              <p className="mt-1">Last updated: Today</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}