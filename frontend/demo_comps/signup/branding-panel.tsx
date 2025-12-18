import React from 'react';

export const BrandingPanel: React.FC = () => {
  return (
    <div className="relative flex-1 hidden lg:flex items-center justify-center p-12 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#229799]/20 via-[#000000] to-[#34d2e0]/10"></div>
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#229799]/30 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#34d2e0]/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #34d2e0 1px, transparent 1px),
            linear-gradient(to bottom, #34d2e0 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      ></div>

      {/* Code-themed Background */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.06]">
        <pre className="text-[#34d2e0] text-xs leading-relaxed blur-[1px]">
{`function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  
  return merge(left, right);
}

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const left = arr.filter((x, i) => x <= pivot && i < arr.length - 1);
  const right = arr.filter(x => x > pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
};`}
        </pre>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-lg space-y-8">
        {/* Logo/Icon */}
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#229799] to-[#34d2e0] shadow-[0_0_40px_rgba(34,151,153,0.5)] flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-10 h-10 text-white"
            >
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              <path d="M8 7h6" />
              <path d="M8 11h8" />
              <path d="M8 15h6" />
            </svg>
          </div>
          <div>
            <h2 className="text-[#f5f5f5] tracking-tight">AlgoKeep</h2>
            <p className="text-[#a8a8a8] text-sm">DSA Notes Manager</p>
          </div>
        </div>

        {/* Tagline */}
        <div className="space-y-4">
          <h3 className="text-3xl text-[#f5f5f5] leading-tight">
            Store. Organize. Revisit.
          </h3>
          <p className="text-xl text-[#a8a8a8] leading-relaxed">
            Your personal DSA knowledge vault.
          </p>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap gap-3">
          {['Code Snippets', 'Time Complexity', 'Pattern Library', 'Interview Prep'].map((feature) => (
            <div
              key={feature}
              className="px-4 py-2 rounded-full bg-[#211f1e]/60 backdrop-blur-sm border border-[#333333]/50 text-sm text-[#a8a8a8] hover:border-[#34d2e0]/50 hover:text-[#34d2e0] transition-all duration-300"
            >
              {feature}
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="pt-8 space-y-3 opacity-40">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#229799] shadow-[0_0_10px_rgba(34,151,153,0.8)]"></div>
            <div className="h-px flex-1 bg-gradient-to-r from-[#229799] to-transparent"></div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#34d2e0] shadow-[0_0_10px_rgba(52,210,224,0.8)]"></div>
            <div className="h-px flex-1 bg-gradient-to-r from-[#34d2e0] to-transparent"></div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#229799] shadow-[0_0_10px_rgba(34,151,153,0.8)]"></div>
            <div className="h-px flex-1 bg-gradient-to-r from-[#229799] to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
