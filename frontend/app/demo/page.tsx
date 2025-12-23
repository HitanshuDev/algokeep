'use client';
import { useState } from 'react';
import { Navbar } from '@/demo_comps/notes/Navbar';
import { Sidebar } from '@/demo_comps/notes/Sidebar';
import { FilterBar } from '@/demo_comps/notes/FilterBar';
import { NotesGrid } from '@/demo_comps/notes/NotesGrid';
import { NoteDetailView } from '@/demo_comps/notes/NoteDetailView';
import { MobileBottomNav } from '@/demo_comps/notes/MobileBottomNav';

// Mock data for demonstration
const mockNotes = [
  {
    id: '1',
    title: 'Binary Search Implementation',
    language: 'C++',
    topic: 'Searching',
    codePreview: `int binarySearch(vector<int>& arr, int target) {
    int left = 0, right = arr.size() - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) return mid;
        ...`,
    fullCode: `int binarySearch(vector<int>& arr, int target) {
    int left = 0, right = arr.size() - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1; // Element not found
}`,
    explanation: `Binary search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one.

The algorithm compares the target value to the middle element of the array. If they are not equal, the half in which the target cannot lie is eliminated and the search continues on the remaining half, again taking the middle element to compare to the target value.`,
    isFavorite: true,
    difficulty: 'Easy',
    lastEdited: '2 hours ago',
    timeComplexity: 'O(log n)',
    spaceComplexity: 'O(1)'
  },
  {
    id: '2',
    title: 'Longest Increasing Subsequence',
    language: 'Python',
    topic: 'Dynamic Programming',
    codePreview: `def lengthOfLIS(nums):
    if not nums:
        return 0
    dp = [1] * len(nums)
    for i in range(1, len(nums)):
        ...`,
    fullCode: `def lengthOfLIS(nums):
    if not nums:
        return 0
    
    dp = [1] * len(nums)
    
    for i in range(1, len(nums)):
        for j in range(i):
            if nums[i] > nums[j]:
                dp[i] = max(dp[i], dp[j] + 1)
    
    return max(dp)`,
    explanation: `The Longest Increasing Subsequence (LIS) problem is to find the length of the longest subsequence of a given sequence such that all elements of the subsequence are sorted in increasing order.

This dynamic programming solution uses an array dp where dp[i] represents the length of the longest increasing subsequence ending at index i.`,
    isFavorite: false,
    difficulty: 'Medium',
    lastEdited: '5 hours ago',
    timeComplexity: 'O(n²)',
    spaceComplexity: 'O(n)'
  },
  {
    id: '3',
    title: 'Dijkstra\'s Algorithm',
    language: 'Java',
    topic: 'Graphs',
    codePreview: `public int[] dijkstra(int[][] graph, int src) {
    int n = graph.length;
    int[] dist = new int[n];
    Arrays.fill(dist, Integer.MAX_VALUE);
    dist[src] = 0;
    ...`,
    fullCode: `public int[] dijkstra(int[][] graph, int src) {
    int n = graph.length;
    int[] dist = new int[n];
    boolean[] visited = new boolean[n];
    Arrays.fill(dist, Integer.MAX_VALUE);
    dist[src] = 0;
    
    PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[1] - b[1]);
    pq.offer(new int[]{src, 0});
    
    while (!pq.isEmpty()) {
        int[] curr = pq.poll();
        int u = curr[0];
        
        if (visited[u]) continue;
        visited[u] = true;
        
        for (int v = 0; v < n; v++) {
            if (graph[u][v] != 0 && !visited[v]) {
                int newDist = dist[u] + graph[u][v];
                if (newDist < dist[v]) {
                    dist[v] = newDist;
                    pq.offer(new int[]{v, newDist});
                }
            }
        }
    }
    
    return dist;
}`,
    explanation: `Dijkstra's algorithm finds the shortest path between nodes in a graph. It works by maintaining a set of unvisited nodes and continuously selecting the unvisited node with the smallest tentative distance.

The algorithm uses a priority queue to efficiently select the next node to visit, making it particularly effective for sparse graphs.`,
    isFavorite: true,
    difficulty: 'Hard',
    lastEdited: '1 day ago',
    timeComplexity: 'O((V + E) log V)',
    spaceComplexity: 'O(V)'
  },
  {
    id: '4',
    title: 'Merge Two Sorted Arrays',
    language: 'JavaScript',
    topic: 'Arrays',
    codePreview: `function merge(arr1, arr2) {
    let result = [];
    let i = 0, j = 0;
    
    while (i < arr1.length && j < arr2.length) {
        ...`,
    fullCode: `function merge(arr1, arr2) {
    let result = [];
    let i = 0, j = 0;
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    
    return result;
}`,
    explanation: `This algorithm merges two sorted arrays into one sorted array. It uses two pointers to traverse both arrays simultaneously, comparing elements and adding the smaller one to the result.

This is a fundamental technique used in merge sort and is essential for understanding divide-and-conquer algorithms.`,
    isFavorite: false,
    difficulty: 'Easy',
    lastEdited: '3 days ago',
    timeComplexity: 'O(n + m)',
    spaceComplexity: 'O(n + m)'
  },
  {
    id: '5',
    title: 'Reverse Linked List',
    language: 'C++',
    topic: 'Linked Lists',
    codePreview: `ListNode* reverseList(ListNode* head) {
    ListNode* prev = nullptr;
    ListNode* curr = head;
    
    while (curr != nullptr) {
        ...`,
    fullCode: `ListNode* reverseList(ListNode* head) {
    ListNode* prev = nullptr;
    ListNode* curr = head;
    
    while (curr != nullptr) {
        ListNode* next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    
    return prev;
}`,
    explanation: `Reversing a linked list is a classic problem that tests understanding of pointer manipulation. The iterative approach uses three pointers to reverse the direction of the links.

We maintain prev, curr, and next pointers to carefully reverse each link without losing reference to the rest of the list.`,
    isFavorite: true,
    difficulty: 'Easy',
    lastEdited: '4 days ago',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)'
  },
  {
    id: '6',
    title: 'Valid Parentheses',
    language: 'Python',
    topic: 'Hash Tables',
    codePreview: `def isValid(s):
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}
    
    for char in s:
        if char in mapping:
            ...`,
    fullCode: `def isValid(s):
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}
    
    for char in s:
        if char in mapping:
            top_element = stack.pop() if stack else '#'
            if mapping[char] != top_element:
                return False
        else:
            stack.append(char)
    
    return not stack`,
    explanation: `This problem checks if a string of parentheses is valid using a stack. Each opening bracket is pushed onto the stack, and for each closing bracket, we check if it matches the most recent opening bracket.

The use of a hash map makes the solution clean and extensible to any number of bracket types.`,
    isFavorite: false,
    difficulty: 'Easy',
    lastEdited: '1 week ago',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)'
  }
];

interface Note {
  id: string;
  title: string;
  language: string;
  topic: string;
  fullCode: string;
  codePreview: string;
  isFavorite: boolean;
  explanation: string;
  difficulty?: string;
  lastEdited: string;
}

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [mobileTab, setMobileTab] = useState('all');

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

      {/* Main Layout */}
      <div className="flex">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main Content */}
        <main className="flex-1 min-h-[calc(100vh-4rem)] pb-20 lg:pb-0">
          <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-foreground mb-2">
                Your DSA Notes
              </h1>
              <p className="text-muted-foreground">
                Manage and organize your data structures & algorithms solutions
              </p>
            </div>

            {/* Filter Bar */}
            <FilterBar viewMode={viewMode} onViewModeChange={setViewMode} />

            {/* Notes Grid */}
            <NotesGrid
              notes={mockNotes}
              viewMode={viewMode}
              onNoteClick={setSelectedNote}
            />
          </div>
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav activeTab={mobileTab} onTabChange={setMobileTab} />

      {/* Note Detail View Modal */}
      <NoteDetailView note={selectedNote} onClose={() => setSelectedNote(null)} />
    </div>
  );
}
