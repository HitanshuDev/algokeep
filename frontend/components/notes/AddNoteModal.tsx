import { useState, useEffect } from 'react';
import { X, Code, FileText, Hash, Clock, Database } from 'lucide-react';

interface AddNoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (formData: NoteFormData) => void;
}

export interface NoteFormData {
  title: string;
  problem: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | '';
  language: 'C++' | 'Java' | 'Python' | 'JavaScript' | '';
  algorithm: string;
  code: string;
  timeComplexity: string;
  spaceComplexity: string;
}

const mapFormToPayload = (form: NoteFormData) => ({
  title: form.title,
  problem: form.problem,
  difficulty: form.difficulty,
  language: form.language,
  algorithm: form.algorithm,
  code: form.code,
  timeComplexity: form.timeComplexity,
  spaceComplexity: form.spaceComplexity,
  isFavourite: false
});


const initialFormData: NoteFormData = {
  title: '',
  problem: '',
  difficulty: '',
  language: '',
  algorithm: '',
  code: '',
  timeComplexity: '',
  spaceComplexity: '',
};


const complexityOptions = [
  'O(1)',
  'O(log n)',
  'O(n)',
  'O(n log n)',
  'O(n²)',
  'O(n³)',
  'O(2^n)',
  'O(n!)'
];

export function AddNoteModal({ isOpen, onClose , onSave }: AddNoteModalProps) {
  const [formData, setFormData] = useState<NoteFormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof NoteFormData, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof NoteFormData, boolean>>>({});

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFormData(initialFormData);
      setErrors({});
      setTouched({});
    }
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleChange = (
    field: keyof NoteFormData,
    value: string
  ) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleBlur = (field: keyof NoteFormData) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    validateField(field, formData[field]);
  };

  const validateField = (field: keyof NoteFormData, value: string) => {
    let error = '';
    
    if (field === 'title' && !value.trim()) {
      error = 'Title is required';
    } else if (field === 'problem' && !value.trim()) {
      error = 'Problem description is required';
    } else if (field === 'difficulty' && !value) {
      error = 'Difficulty level is required';
    } else if (field === 'language' && !value) {
      error = 'Programming language is required';
    } else if (field === 'algorithm' && !value.trim()) {
      error = 'Algorithm/Approach is required';
    } else if (field === 'code' && !value.trim()) {
      error = 'Code is required';
    } else if (field === 'timeComplexity' && !value.trim()) {
      error = 'Time complexity is required';
    } else if (field === 'spaceComplexity' && !value.trim()) {
      error = 'Space complexity is required';
    }

    setErrors(prev => ({ ...prev, [field]: error }));
    return error === '';
  };

//   const handleSave = async (formData: NoteFormData) => {
//   const token = localStorage.getItem('token');

//   const payload = mapFormToPayload(formData);

//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/notes`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${token}`
//     },
//     body: JSON.stringify(payload)
//   });

//   if (!res.ok) {
//     throw new Error('Failed to create note');
//   }

//   const data = await res.json();
//   return data.note;
// };



  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof NoteFormData, string>> = {};
    let isValid = true;

    (Object.keys(formData) as Array<keyof NoteFormData>).forEach(field => {
      if (!validateField(field, formData[field])) {
        isValid = false;
      }
    });

    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  setTouched(
    Object.keys(formData).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      {} as Record<keyof NoteFormData, boolean>
    )
  );

  if (!validateForm()) return;

  onSave(formData); // 👈 DIRECTLY backend-compatible
  onClose();
};


  const isFormValid =
  formData.title.trim() &&
  formData.problem.trim() &&
  formData.algorithm.trim() &&
  formData.code.trim() &&
  formData.difficulty &&
  formData.language &&
  formData.timeComplexity.trim() &&
  formData.spaceComplexity.trim();



  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      // ESC to close
      if (e.key === 'Escape') {
        onClose();
      }
      
      // Cmd/Ctrl + Enter to submit
      if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
        const formIsValid = Object.values(formData).every(value => value.trim() !== '');
        if (formIsValid) {
          const fakeEvent = { preventDefault: () => {} } as React.FormEvent;
          handleSubmit(fakeEvent);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, formData, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full h-full lg:h-auto lg:max-h-[90vh] lg:max-w-4xl lg:mx-4">
        <div className="h-full lg:h-[90vh] w-full  bg-secondary lg:rounded-2xl border border-border/50 
                      shadow-2xl shadow-accent/10 overflow-hidden flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border/50 bg-secondary/80 backdrop-blur-sm sticky top-0 z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent 
                            flex items-center justify-center">
                <FileText className="w-5 h-5 text-background" />
              </div>
              <div>
                <h2 className="text-foreground">Add New Note</h2>
                <p className="text-sm text-muted-foreground">Create a new DSA solution</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-accent/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto">
            <div className="p-6 space-y-6">
              {/* Basic Info Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-accent">
                  <FileText className="w-4 h-4" />
                  <h3>Basic Information</h3>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {/* Title */}
                  <div className="lg:col-span-2">
                    <label htmlFor="title" className="block text-sm text-foreground mb-2">
                      Problem Title <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="title"
                      type="text"
                      value={formData.title}
                      onChange={(e) => handleChange('title', e.target.value)}
                      onBlur={() => handleBlur('title')}
                      placeholder="e.g., Two Sum, Binary Search Tree..."
                      className={`w-full px-4 py-2.5 bg-input-background rounded-lg border 
                               ${touched.title && errors.title ? 'border-destructive' : 'border-border/50'}
                               text-foreground placeholder:text-muted-foreground
                               focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent
                               transition-all`}
                    />
                    {touched.title && errors.title && (
                      <p className="mt-1 text-sm text-destructive">{errors.title}</p>
                    )}
                  </div>

                  {/* Difficulty */}
                  <div>
                    <label htmlFor="difficulty" className="block text-sm text-foreground mb-2">
                      Difficulty <span className="text-destructive">*</span>
                    </label>
                    <select
                      id="difficulty"
                      value={formData.difficulty}
                      onChange={(e) => handleChange('difficulty', e.target.value)}
                      onBlur={() => handleBlur('difficulty')}
                      className={`w-full px-4 py-2.5 bg-input-background rounded-lg border
                               ${touched.difficulty && errors.difficulty ? 'border-destructive' : 'border-border/50'}
                               text-foreground
                               focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent
                               transition-all cursor-pointer`}
                    >
                      <option value="">Select difficulty</option>
                      <option value="Easy">Easy</option>
                      <option value="Medium">Medium</option>
                      <option value="Hard">Hard</option>
                    </select>
                    {touched.difficulty && errors.difficulty && (
                      <p className="mt-1 text-sm text-destructive">{errors.difficulty}</p>
                    )}
                  </div>

                  {/* Language */}
                  <div>
                    <label htmlFor="language" className="block text-sm text-foreground mb-2">
                      Programming Language <span className="text-destructive">*</span>
                    </label>
                    <select
                      id="language"
                      value={formData.language}
                      onChange={(e) => handleChange('language', e.target.value)}
                      onBlur={() => handleBlur('language')}
                      className={`w-full px-4 py-2.5 bg-input-background rounded-lg border
                               ${touched.language && errors.language ? 'border-destructive' : 'border-border/50'}
                               text-foreground
                               focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent
                               transition-all cursor-pointer`}
                    >
                      <option value="">Select language</option>
                      <option value="C++">C++</option>
                      <option value="Java">Java</option>
                      <option value="Python">Python</option>
                      <option value="JavaScript">JavaScript</option>
                    </select>
                    {touched.language && errors.language && (
                      <p className="mt-1 text-sm text-destructive">{errors.language}</p>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="block text-sm text-foreground mb-2">
                    Problem Description <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="description"
                    value={formData.problem}
                    onChange={(e) => handleChange('problem', e.target.value)}
                    onBlur={() => handleBlur('problem')}
                    placeholder="Describe the problem statement, constraints, and examples..."
                    rows={4}
                    className={`w-full px-4 py-2.5 bg-input-background rounded-lg border
                             ${touched.problem && errors.problem ? 'border-destructive' : 'border-border/50'}
                             text-foreground placeholder:text-muted-foreground
                             focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent
                             transition-all resize-none`}
                  />
                  {touched.problem && errors.problem && (
                    <p className="mt-1 text-sm text-destructive">{errors.problem}</p>
                  )}
                </div>
              </div>

              {/* Algorithm Section */}
              <div className="space-y-4 pt-4 border-t border-border/30">
                <div className="flex items-center gap-2 text-accent">
                  <Hash className="w-4 h-4" />
                  <h3>Algorithm & Approach</h3>
                </div>

                <div>
                  <label htmlFor="approach" className="block text-sm text-foreground mb-2">
                    Algorithm / Approach Explanation <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="approach"
                    value={formData.algorithm}
                    onChange={(e) => handleChange('algorithm', e.target.value)}
                    onBlur={() => handleBlur('algorithm')}
                    placeholder="Explain your approach, key insights, and steps to solve the problem..."
                    rows={5}
                    className={`w-full px-4 py-2.5 bg-input-background rounded-lg border
                             ${touched.algorithm && errors.algorithm ? 'border-destructive' : 'border-border/50'}
                             text-foreground placeholder:text-muted-foreground
                             focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent
                             transition-all resize-none`}
                  />
                  {touched.algorithm && errors.algorithm && (
                    <p className="mt-1 text-sm text-destructive">{errors.algorithm}</p>
                  )}
                </div>
              </div>

              {/* Code Section */}
              <div className="space-y-4 pt-4 border-t border-border/30">
                <div className="flex items-center gap-2 text-accent">
                  <Code className="w-4 h-4" />
                  <h3>Code Implementation</h3>
                </div>

                <div>
                  <label htmlFor="code" className="block text-sm text-foreground mb-2">
                    Solution Code <span className="text-destructive">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      id="code"
                      value={formData.code}
                      onChange={(e) => handleChange('code', e.target.value)}
                      onBlur={() => handleBlur('code')}
                      placeholder="Paste your solution code here..."
                      rows={12}
                      className={`w-full px-4 py-3 bg-black/40 rounded-lg border
                               ${touched.code && errors.code ? 'border-destructive' : 'border-border/50'}
                               text-foreground placeholder:text-muted-foreground
                               focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent
                               transition-all resize-none font-mono text-sm`}
                      spellCheck={false}
                    />
                    {touched.code && errors.code && (
                      <p className="mt-1 text-sm text-destructive">{errors.code}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Complexity Section */}
              <div className="space-y-4 pt-4 border-t border-border/30">
                <div className="flex items-center gap-2 text-accent">
                  <Clock className="w-4 h-4" />
                  <h3>Complexity Analysis</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Time Complexity */}
                  <div>
                    <label htmlFor="timeComplexity" className="block text-sm text-foreground mb-2">
                      Time Complexity <span className="text-destructive">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="timeComplexity"
                        type="text"
                        list="timeComplexityOptions"
                        value={formData.timeComplexity}
                        onChange={(e) => handleChange('timeComplexity', e.target.value)}
                        onBlur={() => handleBlur('timeComplexity')}
                        placeholder="e.g., O(n), O(log n)"
                        className={`w-full px-4 py-2.5 bg-input-background rounded-lg border
                                 ${touched.timeComplexity && errors.timeComplexity ? 'border-destructive' : 'border-border/50'}
                                 text-foreground placeholder:text-muted-foreground
                                 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent
                                 transition-all`}
                      />
                      <datalist id="timeComplexityOptions">
                        {complexityOptions.map(option => (
                          <option key={option} value={option} />
                        ))}
                      </datalist>
                    </div>
                    {touched.timeComplexity && errors.timeComplexity && (
                      <p className="mt-1 text-sm text-destructive">{errors.timeComplexity}</p>
                    )}
                  </div>

                  {/* Space Complexity */}
                  <div>
                    <label htmlFor="spaceComplexity" className="block text-sm text-foreground mb-2">
                      Space Complexity <span className="text-destructive">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="spaceComplexity"
                        type="text"
                        list="spaceComplexityOptions"
                        value={formData.spaceComplexity}
                        onChange={(e) => handleChange('spaceComplexity', e.target.value)}
                        onBlur={() => handleBlur('spaceComplexity')}
                        placeholder="e.g., O(1), O(n)"
                        className={`w-full px-4 py-2.5 bg-input-background rounded-lg border
                                 ${touched.spaceComplexity && errors.spaceComplexity ? 'border-destructive' : 'border-border/50'}
                                 text-foreground placeholder:text-muted-foreground
                                 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent
                                 transition-all`}
                      />
                      <datalist id="spaceComplexityOptions">
                        {complexityOptions.map(option => (
                          <option key={option} value={option} />
                        ))}
                      </datalist>
                    </div>
                    {touched.spaceComplexity && errors.spaceComplexity && (
                      <p className="mt-1 text-sm text-destructive">{errors.spaceComplexity}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="sticky bottom-0 flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 
                          border-t border-border/50 bg-secondary/80 backdrop-blur-sm">
              <p className="text-xs text-muted-foreground hidden sm:block">
                Press <kbd className="px-2 py-0.5 bg-muted rounded border border-border/50">Esc</kbd> to cancel or{' '}
                <kbd className="px-2 py-0.5 bg-muted rounded border border-border/50">⌘/Ctrl + Enter</kbd> to save
              </p>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-lg border border-border/50
                           text-foreground hover:bg-accent/10 hover:border-accent/50
                           transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className={`px-6 py-2.5 rounded-lg transition-all
                           ${isFormValid
                             ? 'bg-gradient-to-r from-primary to-accent text-foreground hover:shadow-lg hover:shadow-accent/30 hover:scale-105'
                             : 'bg-muted text-muted-foreground cursor-not-allowed'
                           }`}
                >
                  Save Note
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}