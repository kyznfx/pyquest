// ================================================
// CURRICULUM DATA
// All topics, descriptions, and activities
// organized by phase → month → topics
// ================================================

const CURRICULUM = [

  // ============================================
  // PHASE 0: FOUNDATIONS (February - March)
  // ============================================

  {
    phase: "Foundations",
    phaseIndex: 0,
    month: "February Wk 1–2: Python Basics",
    monthIndex: 0,
    topics: [
      {
        name: "Install Python & VSCode",
        desc: "Download Python 3.x, install VSCode, Python extension, terminal basics",
        activity: "Create folder python-learning/. Make hello.py that prints 'Hello World!' and your name. Run from terminal. Take a screenshot of your first output.",
        time: "30m",
        type: "build"
      },
      {
        name: "Variables & Data Types",
        desc: "Strings, integers, floats, booleans, type(), naming conventions",
        activity: "Create variables.py — declare 15 variables of ALL types. Print each with f-string showing value and type: print(f'{name} is {type(name)}'). Experiment with type conversion.",
        time: "45m",
        type: "practice"
      },
      {
        name: "print() & f-strings",
        desc: "print() formatting, f-strings, .format(), escape chars, multi-line",
        activity: "Create profile_card.py — print a fancy 'business card' with borders made of = and | characters. Include name, age, hobby, fun fact all formatted with f-strings.",
        time: "40m",
        type: "build"
      },
      {
        name: "input() & Type Conversion",
        desc: "Getting user input, int(), float(), str(), input validation",
        activity: "Create greeter.py — ask for name, birth year, favorite color. Calculate age, print personalized greeting using all info. Handle non-numeric birth year gracefully.",
        time: "40m",
        type: "build"
      },
      {
        name: "Arithmetic Operators",
        desc: "+, -, *, /, //, %, ** and operator precedence, += -= etc",
        activity: "Create calculator.py — ask for two numbers, show ALL operations: sum, difference, product, division, floor div, modulus, power. Format output in a nice table.",
        time: "45m",
        type: "build"
      },
      {
        name: "Comparison & Logical Operators",
        desc: "==, !=, >, <, >=, <=, and, or, not, chaining",
        activity: "Create compare.py — ask for 3 numbers. Print which is largest, smallest, if any are equal, if all positive, if any negative. Use all comparison operators.",
        time: "40m",
        type: "practice"
      },
      {
        name: "String Operations",
        desc: "Concatenation, len(), indexing, slicing [start:end:step], in keyword",
        activity: "Create string_lab.py — input a sentence. Print: length, first/last char, reversed, every other char, uppercase, vowel count, word count, is palindrome.",
        time: "50m",
        type: "practice"
      },
      {
        name: "Week 1-2 Mini Project",
        desc: "Combine everything into one program",
        activity: "Build 'Personal Bio Generator' — ask 8+ questions (name, age, city, hobbies etc), generate a formatted bio paragraph with stats. Save output to a .txt file.",
        time: "90m",
        type: "project"
      }
    ]
  },

  {
    phase: "Foundations",
    phaseIndex: 0,
    month: "March Wk 3–4: Control Flow",
    monthIndex: 1,
    topics: [
      {
        name: "if / elif / else",
        desc: "Conditional branching, indentation, nested conditions, pass",
        activity: "Create grade_calc.py — input score (0-100), output letter grade (A-F), pass/fail, motivational message. Handle invalid scores (<0 or >100).",
        time: "45m",
        type: "build"
      },
      {
        name: "Nested Conditions & Complex Logic",
        desc: "Multiple if/else levels, combining and/or, ternary expressions",
        activity: "Create ticket_price.py — movie ticket price based on: age, student (y/n), day (weekend=more), 3D (y/n). Handle ALL combinations. Print price breakdown.",
        time: "50m",
        type: "build"
      },
      {
        name: "while Loops",
        desc: "Loop structure, break, continue, infinite loops, counters, sentinels",
        activity: "Create guessing_game.py — random number 1-100, user guesses with hot/cold hints. Track attempts. Show win message with attempt count. Option to play again.",
        time: "50m",
        type: "build"
      },
      {
        name: "for Loops & range()",
        desc: "Iterating sequences, range(start,stop,step), enumerate()",
        activity: "Create patterns.py — print 5 patterns: right triangle of *, inverted triangle, diamond, number pyramid, checkerboard. User picks which pattern and size.",
        time: "50m",
        type: "practice"
      },
      {
        name: "Nested Loops",
        desc: "Loop inside loop, matrix patterns, time complexity awareness",
        activity: "Create times_table.py — print 12x12 multiplication table with aligned columns. Ask user for custom size. Add color highlighting for perfect squares.",
        time: "45m",
        type: "practice"
      },
      {
        name: "Loop Challenges: FizzBuzz & More",
        desc: "Classic challenges, accumulator pattern, sentinel values",
        activity: "Create loop_challenges.py — solve ALL: FizzBuzz 1-100, sum of digits of a number, reverse a number, check palindrome number, count digits, collatz sequence.",
        time: "60m",
        type: "challenge"
      },
      {
        name: "match/case Statements",
        desc: "Pattern matching (3.10+), structural patterns, wildcard, guards",
        activity: "Create menu_system.py — restaurant ordering with match/case: pick category, pick item, customize, confirm. Calculate total with tax.",
        time: "40m",
        type: "build"
      },
      {
        name: "Control Flow Mini Project",
        desc: "Combine conditionals and loops in a game",
        activity: "Build 'Rock Paper Scissors' — best of 5 vs computer. Track scores, show round history, handle invalid input, play again option, display final stats.",
        time: "90m",
        type: "project"
      }
    ]
  },

  {
    phase: "Foundations",
    phaseIndex: 0,
    month: "March Wk 5–6: Collections",
    monthIndex: 2,
    topics: [
      {
        name: "Lists — Create & Access",
        desc: "Creating lists, indexing, negative index, slicing, len(), in",
        activity: "Create list_basics.py — list of 10 favorites. Print: first, last, middle, every other, reversed, check if item exists. Demonstrate negative indexing.",
        time: "40m",
        type: "practice"
      },
      {
        name: "Lists — Modify & Methods",
        desc: "append, insert, remove, pop, sort, reverse, copy, extend, clear",
        activity: "Create shopping_list.py — interactive list: add items, remove by name, sort alphabetically, show total count, undo last action (keep history).",
        time: "50m",
        type: "build"
      },
      {
        name: "List Comprehensions",
        desc: "[x for x in list], with conditions, with transforms, nested",
        activity: "Create comprehensions.py — write 10 different comprehensions: squares, evens, filtered names, uppercase words, flattened 2D list. Compare with for loops.",
        time: "45m",
        type: "practice"
      },
      {
        name: "Tuples & Unpacking",
        desc: "Immutability, tuple unpacking, named tuples, when to use",
        activity: "Create coordinates.py — store 10 city coordinates as tuples. Calculate distance between pairs. Find northernmost/southernmost. Unpack and display all.",
        time: "40m",
        type: "practice"
      },
      {
        name: "Sets & Set Operations",
        desc: "add, discard, union, intersection, difference, symmetric_difference",
        activity: "Create set_ops.py — two class rosters. Find: in both, only in A, only in B, in either not both. Remove duplicates from a list. Membership testing speed.",
        time: "40m",
        type: "practice"
      },
      {
        name: "Dictionaries — Basics",
        desc: "Create, access, add, modify, .keys(), .values(), .items(), .get()",
        activity: "Create contact_book.py — contacts with name/phone/email. Menu: add, search, update, delete, list all. Handle missing contacts with .get().",
        time: "55m",
        type: "build"
      },
      {
        name: "Dictionaries — Advanced",
        desc: "Nested dicts, dict comprehensions, .update(), .setdefault(), defaultdict",
        activity: "Create student_grades.py — nested dict: students to subjects to grades. Calculate per-student avg, per-subject avg, class avg, top performer, failing students.",
        time: "55m",
        type: "build"
      },
      {
        name: "Collections Mini Project",
        desc: "Combine all collection types",
        activity: "Build 'Inventory System' — products dict with name/price/qty/category. Add/remove stock, search by name or category, low stock alerts, sales tracking, daily report.",
        time: "120m",
        type: "project"
      }
    ]
  },

  // ============================================
  // PHASE 1: CORE SKILLS (April - May)
  // ============================================

  {
    phase: "Core Skills",
    phaseIndex: 1,
    month: "April Wk 7–8: Functions",
    monthIndex: 3,
    topics: [
      {
        name: "Defining Functions & Return",
        desc: "def, parameters, return, multiple returns, docstrings",
        activity: "Create utils.py — write 8 functions: celsius_to_f(), is_even(), reverse_str(), count_vowels(), find_max(), is_palindrome(), factorial(), avg_list(). Test each.",
        time: "50m",
        type: "build"
      },
      {
        name: "Default & Keyword Arguments",
        desc: "Default values, positional vs keyword, *args, **kwargs, unpacking",
        activity: "Create flex_calc.py — function accepting ANY number of numbers and operation keyword: calc(1,2,3,op='sum') returns 6. Support sum, multiply, average, max, min.",
        time: "45m",
        type: "build"
      },
      {
        name: "Scope: Local, Global, LEGB",
        desc: "Variable scope rules, global keyword, nonlocal, closures intro",
        activity: "Create scope_lab.py — write 6 examples showing each scope type. Include examples that cause common scope bugs, then fix them. Add comments explaining each.",
        time: "40m",
        type: "practice"
      },
      {
        name: "Lambda Functions",
        desc: "Anonymous functions, single expression, use with sorted/map/filter",
        activity: "Create lambda_lab.py — use lambdas: sort list of tuples, filter students by grade, map prices with tax, sort strings by length then alphabetically.",
        time: "40m",
        type: "practice"
      },
      {
        name: "map(), filter(), reduce()",
        desc: "Functional programming, transforming/filtering sequences, reduce from functools",
        activity: "Create data_proc.py — list of person dicts. Use map/filter/reduce: extract names, filter adults, total ages, find oldest, average salary, format output.",
        time: "45m",
        type: "practice"
      },
      {
        name: "Decorators Basics",
        desc: "Functions as objects, wrappers, @decorator syntax, functools.wraps",
        activity: "Create decorators.py — build 3: @timer (measures execution time), @logger (prints calls with args), @retry(times=3) (retries on exception). Test all.",
        time: "50m",
        type: "build"
      },
      {
        name: "Recursion",
        desc: "Base case, recursive case, call stack, stack overflow, recursive vs iterative",
        activity: "Create recursion.py — implement recursively: factorial, fibonacci, sum_list, countdown, power(base,exp), flatten_nested_list, binary_search. Compare with iterative.",
        time: "55m",
        type: "challenge"
      },
      {
        name: "Functions Mini Project",
        desc: "Build something using multiple function concepts",
        activity: "Build 'Text Analyzer' — functions for: word_count, sentence_count, avg_word_length, most_common_words(n), reading_level, unique_word_ratio, longest_word, search_replace.",
        time: "120m",
        type: "project"
      }
    ]
  },

  {
    phase: "Core Skills",
    phaseIndex: 1,
    month: "April Wk 9–10: Files & Error Handling",
    monthIndex: 4,
    topics: [
      {
        name: "Reading Files",
        desc: "open(), read(), readline(), readlines(), with statement, modes",
        activity: "Create file_reader.py — read a text file. Display: total lines, words, characters, longest line, shortest line, line numbers with content. Handle missing file.",
        time: "45m",
        type: "build"
      },
      {
        name: "Writing & Appending Files",
        desc: "write(), writelines(), append mode, creating files, overwriting",
        activity: "Create journal.py — daily journal: write date+entry, append new entries, read all past entries, search by keyword, count total entries.",
        time: "50m",
        type: "build"
      },
      {
        name: "CSV Files",
        desc: "csv module, reader, writer, DictReader, DictWriter, headers",
        activity: "Create csv_manager.py — read student CSV, add students, update grades, calculate statistics, export honor roll to new CSV. Create sample data first.",
        time: "50m",
        type: "build"
      },
      {
        name: "JSON Files",
        desc: "json module, loads/dumps, load/dump, pretty print, nested JSON",
        activity: "Create settings_mgr.py — app settings stored in JSON. Load settings, modify via menu, save back. Handle missing file with defaults. Nested settings.",
        time: "45m",
        type: "build"
      },
      {
        name: "try / except / finally",
        desc: "Exception handling, specific exceptions, as e, else, finally cleanup",
        activity: "Create safe_calc.py — calculator handling EVERY error: ZeroDivisionError, ValueError, OverflowError, KeyboardInterrupt. Show user-friendly messages for each.",
        time: "45m",
        type: "practice"
      },
      {
        name: "Custom Exceptions & raise",
        desc: "Creating exception classes, raise, exception hierarchies",
        activity: "Create bank_errors.py — BankAccount with: InsufficientFunds, InvalidAmount, AccountLocked custom exceptions. Demonstrate raising and catching each one.",
        time: "50m",
        type: "build"
      },
      {
        name: "Debugging with VSCode",
        desc: "Breakpoints, step over/into, watch variables, call stack, conditional breakpoints",
        activity: "Get 5 broken scripts. Use ONLY the VSCode debugger (no print statements) to find and fix every bug. Document: error found, line number, fix applied.",
        time: "45m",
        type: "practice"
      },
      {
        name: "Files & Errors Project",
        desc: "Full application with file I/O and error handling",
        activity: "Build 'Expense Tracker' — log expenses to CSV (date/amount/category/note). Monthly totals, category breakdown, search by date range, full error handling.",
        time: "120m",
        type: "project"
      }
    ]
  },

  {
    phase: "Core Skills",
    phaseIndex: 1,
    month: "May Wk 11–12: Modules & Std Library",
    monthIndex: 5,
    topics: [
      {
        name: "Modules & Imports",
        desc: "import, from...import, as alias, __name__=='__main__', own modules",
        activity: "Split your Expense Tracker into 3 files: main.py, expenses.py (logic), display.py (formatting). Import correctly. Test __name__=='__main__' guard.",
        time: "45m",
        type: "practice"
      },
      {
        name: "Packages & Project Structure",
        desc: "__init__.py, package dirs, relative imports, clean layout",
        activity: "Create package 'mathtools/' with: basic.py, geometry.py, statistics.py. Each has 3+ functions. Import all from main.py. Test everything.",
        time: "50m",
        type: "build"
      },
      {
        name: "datetime Module",
        desc: "date, time, datetime, timedelta, strftime/strptime, timezone aware",
        activity: "Create time_tools.py — exact age calculator (years/months/days), days until birthday, birth day-of-week, countdown to event, duration between two dates.",
        time: "45m",
        type: "build"
      },
      {
        name: "random Module",
        desc: "randint, choice, shuffle, sample, seed, probability simulation",
        activity: "Create simulations.py — simulate: 1000 coin flips (show %), dice roller (distribution chart), lottery generator, deck dealer (no repeats), random walk.",
        time: "40m",
        type: "build"
      },
      {
        name: "os & pathlib",
        desc: "os.path, listdir, makedirs, pathlib.Path, filesystem operations",
        activity: "Create file_organizer.py — scan a folder, sort files into subfolders by extension (.py to Code/, .jpg to Images/). Log all moves. Handle duplicates. Dry-run mode.",
        time: "50m",
        type: "build"
      },
      {
        name: "collections Module",
        desc: "Counter, defaultdict, OrderedDict, namedtuple, deque",
        activity: "Create text_analytics.py — analyze text: word frequencies with Counter, bigrams, char distribution, repeated phrases, top 20 words as ASCII bar chart.",
        time: "50m",
        type: "practice"
      },
      {
        name: "pip & Virtual Environments",
        desc: "pip install, freeze, requirements.txt, venv creation/activation",
        activity: "Create venv. Install requests, colorama, tabulate. Write script using all 3. pip freeze > requirements.txt. Delete venv. Recreate from requirements.txt.",
        time: "35m",
        type: "practice"
      },
      {
        name: "Modules Mini Project",
        desc: "Use multiple stdlib modules together",
        activity: "Build 'Password Manager' — generate passwords (random), encode (base64), store in JSON, search, auto-expire old ones (datetime), organize by category (collections).",
        time: "120m",
        type: "project"
      }
    ]
  },

  // ============================================
  // PHASE 2: INTERMEDIATE (June - August)
  // ============================================

  {
    phase: "Intermediate",
    phaseIndex: 2,
    month: "June Wk 13–14: OOP Part 1",
    monthIndex: 6,
    topics: [
      {
        name: "Classes & Objects",
        desc: "class, __init__, self, instance attributes, methods",
        activity: "Create dog.py — Dog class: name/breed/age/energy. Methods: bark(), eat(), play(min reduces energy), sleep(hrs restores energy). Create 3 dogs, interact, show status.",
        time: "50m",
        type: "build"
      },
      {
        name: "Class vs Instance Attributes",
        desc: "Shared class attrs, class methods, static methods, cls",
        activity: "Create employee.py — Employee with class attr company_name, employee_count. Track total employees, avg salary. @classmethod from_string('name-age-salary').",
        time: "50m",
        type: "build"
      },
      {
        name: "Encapsulation & Properties",
        desc: "Private attrs (_), @property, getters/setters, validation",
        activity: "Create temperature.py — Temperature stores Celsius internally. @property for fahrenheit/kelvin. Validate: no below absolute zero. Auto-convert on set.",
        time: "45m",
        type: "build"
      },
      {
        name: "Inheritance & super()",
        desc: "Parent/child classes, super(), method overriding, isinstance()",
        activity: "Create vehicles.py — Vehicle base then Car, Truck, Motorcycle. Each has unique attrs and overridden describe(). Demo polymorphism with a list of mixed vehicles.",
        time: "50m",
        type: "build"
      },
      {
        name: "Multiple Inheritance & Mixins",
        desc: "Multiple parents, MRO, diamond problem, mixin pattern",
        activity: "Create mixins.py — JsonMixin(to_json/from_json), PrintableMixin(pretty __str__), ValidatableMixin(validate). Apply all to Student class.",
        time: "45m",
        type: "practice"
      },
      {
        name: "Magic/Dunder Methods",
        desc: "__str__, __repr__, __len__, __eq__, __lt__, __add__, __getitem__",
        activity: "Create playlist.py — Playlist supports: len(), print(), + (merge playlists), iteration, 'in' check, [index] access, == comparison. Full operator overloading.",
        time: "55m",
        type: "build"
      },
      {
        name: "Abstract Classes",
        desc: "ABC module, @abstractmethod, forcing implementation",
        activity: "Create shapes.py — abstract Shape with abstract area()/perimeter(). Implement Circle, Rectangle, Triangle, Hexagon. Can't instantiate Shape directly.",
        time: "45m",
        type: "build"
      },
      {
        name: "OOP Project",
        desc: "Full OOP system with multiple classes",
        activity: "Build 'Library System' — Book, Member, Library classes. Borrow/return books, track availability, borrowing history, overdue detection, fines. Save/load from JSON.",
        time: "150m",
        type: "project"
      }
    ]
  },

  {
    phase: "Intermediate",
    phaseIndex: 2,
    month: "June Wk 15–16: OOP Part 2",
    monthIndex: 7,
    topics: [
      {
        name: "Composition vs Inheritance",
        desc: "Has-a vs Is-a, building complex objects from simpler ones",
        activity: "Create computer.py — Computer composed of CPU, RAM, Storage, GPU classes. Each has specs/methods. Computer delegates to components. Zero inheritance.",
        time: "50m",
        type: "build"
      },
      {
        name: "Dataclasses",
        desc: "@dataclass, field(), __post_init__, frozen, ordering",
        activity: "Create models.py — convert 5 previous classes to dataclasses: Product, Student, Movie, Coordinate, Config. Compare code length. Use frozen and ordering.",
        time: "40m",
        type: "practice"
      },
      {
        name: "Enums & Constants",
        desc: "Enum class, auto(), member access, iteration, string enums",
        activity: "Create game_enums.py — RPG with enums: Direction, Weapon, Armor, Potion, GameState. Use in a text movement system. No magic strings anywhere.",
        time: "40m",
        type: "build"
      },
      {
        name: "Iterators & Generators",
        desc: "__iter__, __next__, yield, generator expressions, lazy eval",
        activity: "Create generators.py — generators: fibonacci(n), file_lines(path), chunks(list,size), infinite_counter(), filtered_range. Show memory benefit vs lists.",
        time: "50m",
        type: "practice"
      },
      {
        name: "Context Managers",
        desc: "with, __enter__/__exit__, @contextmanager, resource mgmt",
        activity: "Create ctx_mgrs.py — custom: Timer (measure block time), TempDirectory (auto cleanup), Indenter (nested indentation for pretty printing). Test all.",
        time: "45m",
        type: "build"
      },
      {
        name: "Design Patterns: Singleton & Factory",
        desc: "Singleton (one instance), Factory (create by type string)",
        activity: "Create patterns.py — Logger singleton (global instance). AnimalFactory creates Dog/Cat/Bird from string. Demonstrate both patterns with real use cases.",
        time: "50m",
        type: "build"
      },
      {
        name: "OOP Error Handling Patterns",
        desc: "Custom exception hierarchies, error chaining, graceful degradation",
        activity: "Create robust_app.py — AppError then ValidationError, DatabaseError, NetworkError hierarchy. Each has custom attrs/messages. Full try/except usage demo.",
        time: "45m",
        type: "practice"
      },
      {
        name: "OOP Part 2 Project",
        desc: "Complex OOP with composition and patterns",
        activity: "Build 'Online Store' — Product, Cart, Customer, Order, Payment classes. Cart operations, checkout, discounts, order tracking, inventory mgmt. All with composition.",
        time: "150m",
        type: "project"
      }
    ]
  },

  {
    phase: "Intermediate",
    phaseIndex: 2,
    month: "July Wk 17–18: Data Structures & Algorithms",
    monthIndex: 8,
    topics: [
      {
        name: "Big O Notation",
        desc: "Time/space complexity, O(1), O(n), O(n squared), O(log n), analyzing code",
        activity: "Create big_o.py — write functions for each complexity. Time them with increasing inputs (100 to 100000). Print comparison table showing growth patterns.",
        time: "45m",
        type: "practice"
      },
      {
        name: "Searching: Linear & Binary",
        desc: "Linear search, binary search, when to use which, prerequisites",
        activity: "Create searching.py — implement both from scratch. Compare times on lists of 100, 10000, 1000000 elements. Binary search requires sorted — show why.",
        time: "50m",
        type: "practice"
      },
      {
        name: "Sorting: Bubble, Selection, Insertion",
        desc: "Three basic sorts, implementation, step visualization",
        activity: "Create sorting_basic.py — implement all 3. Count comparisons and swaps. Compare on same random list. Print step-by-step trace for a small (10-element) list.",
        time: "60m",
        type: "challenge"
      },
      {
        name: "Sorting: Merge Sort & Quick Sort",
        desc: "Divide and conquer, merge sort, quick sort, partitioning",
        activity: "Create sorting_adv.py — implement merge sort and quick sort. Compare with basic sorts on 10000 elements. Visualize divide-and-conquer for small inputs.",
        time: "60m",
        type: "challenge"
      },
      {
        name: "Stacks (LIFO)",
        desc: "Push/pop, implementation with list and class, applications",
        activity: "Create stack_apps.py — Stack class + apps: balanced parentheses checker, reverse string, undo/redo system, browser back/forward navigation simulator.",
        time: "50m",
        type: "build"
      },
      {
        name: "Queues & Deques (FIFO)",
        desc: "Enqueue/dequeue, deque, priority queue, circular queue",
        activity: "Create queue_apps.py — Queue class + apps: print job scheduler, customer service sim (with priority), hot potato game, task processing pipeline.",
        time: "50m",
        type: "build"
      },
      {
        name: "Linked Lists",
        desc: "Nodes, singly linked list, insert, delete, traverse, reverse",
        activity: "Create linked_list.py — LinkedList: append, prepend, insert_at, delete, search, reverse, get length, display, detect cycle. Test all operations.",
        time: "60m",
        type: "build"
      },
      {
        name: "DSA Mini Project",
        desc: "Apply data structures to a real problem",
        activity: "Build 'Task Scheduler' — priority queue for tasks, stack for undo, linked list for task chains. Simulate scheduling 20+ tasks. Show execution order and timing.",
        time: "120m",
        type: "project"
      }
    ]
  },

  {
    phase: "Intermediate",
    phaseIndex: 2,
    month: "July Wk 19–20: Algorithm Practice",
    monthIndex: 9,
    topics: [
      {
        name: "Hash Tables Internals",
        desc: "How dicts work, hash functions, collision handling, O(1) lookups",
        activity: "Create hash_table.py — SimpleHashTable class: put, get, delete, resize. Handle collisions with chaining. Test with 100+ entries. Show collision stats.",
        time: "60m",
        type: "build"
      },
      {
        name: "Two Pointer Technique",
        desc: "Opposite ends, same direction, fast/slow pointers",
        activity: "Create two_ptr.py — solve 5: two sum (sorted), remove duplicates in-place, container with most water, palindrome check, merge sorted arrays.",
        time: "50m",
        type: "challenge"
      },
      {
        name: "Sliding Window Pattern",
        desc: "Fixed/variable size windows, optimization problems",
        activity: "Create sliding_win.py — solve: max sum subarray of size k, longest substring without repeats, smallest subarray with sum >= target, max consecutive ones.",
        time: "50m",
        type: "challenge"
      },
      {
        name: "Frequency Counter Pattern",
        desc: "Using Counter/dicts for occurrence counting, comparison",
        activity: "Create freq_count.py — solve: valid anagram, group anagrams, first unique char, top K frequent elements, find all duplicates in array.",
        time: "50m",
        type: "challenge"
      },
      {
        name: "Binary Trees",
        desc: "Nodes, root, leaves, traversals (inorder, preorder, postorder)",
        activity: "Create btree.py — BinaryTree: insert, inorder/preorder/postorder traversal, search, height, count nodes, is_balanced. Visualize tree in terminal.",
        time: "60m",
        type: "build"
      },
      {
        name: "Binary Search Trees",
        desc: "BST property, insert, search, delete, min/max, sorted output",
        activity: "Create bst.py — BST: insert, search, delete, find_min/max, in_order_list, is_valid_bst, tree height. Insert 20 values and verify BST property.",
        time: "55m",
        type: "build"
      },
      {
        name: "Graphs & BFS/DFS",
        desc: "Adjacency list, BFS traversal, DFS traversal, path finding",
        activity: "Create graphs.py — Graph: add_vertex, add_edge, bfs, dfs, has_path, shortest_path. Model a social network — find connections between people.",
        time: "60m",
        type: "build"
      },
      {
        name: "Algorithm Project",
        desc: "Solve a complex algorithmic problem",
        activity: "Build 'Maze Solver' — generate random mazes, implement BFS (shortest path) and DFS (any path). Display maze and solution with ASCII art. Compare both algorithms.",
        time: "150m",
        type: "project"
      }
    ]
  },

  {
    phase: "Intermediate",
    phaseIndex: 2,
    month: "August Wk 21–22: APIs & Web Scraping",
    monthIndex: 10,
    topics: [
      {
        name: "HTTP & REST Basics",
        desc: "HTTP methods, status codes, headers, JSON, request/response cycle",
        activity: "Create http_cheatsheet.py — print formatted reference of all HTTP methods and status codes. Add a quiz mode that tests your knowledge randomly.",
        time: "40m",
        type: "practice"
      },
      {
        name: "requests — GET Requests",
        desc: "pip install requests, GET, response object, JSON parsing, params",
        activity: "Create weather_app.py — fetch weather from free API (wttr.in or open-meteo). Display temperature, conditions, humidity, 3-day forecast. Formatted output.",
        time: "50m",
        type: "build"
      },
      {
        name: "requests — POST & Headers",
        desc: "POST requests, JSON body, headers, API keys, authentication",
        activity: "Create github_viewer.py — input GitHub username, fetch profile/repos/stars/languages. Display as formatted 'developer card' in terminal.",
        time: "50m",
        type: "build"
      },
      {
        name: "Working with Multiple APIs",
        desc: "Chaining API calls, combining data sources, rate limiting",
        activity: "Create country_info.py — input country name. Fetch from REST Countries API: population, capital, languages, currencies, flag, neighbors. Handle errors.",
        time: "50m",
        type: "build"
      },
      {
        name: "BeautifulSoup Basics",
        desc: "Parsing HTML, find/find_all, CSS selectors, extracting data",
        activity: "Create quote_scraper.py — scrape quotes.toscrape.com: all quotes, authors, tags. Save to CSV. Handle pagination to get ALL pages. Respect rate limits.",
        time: "55m",
        type: "build"
      },
      {
        name: "Advanced Scraping",
        desc: "Sessions, headers, robots.txt, ethical scraping, structured extraction",
        activity: "Create book_scraper.py — scrape books.toscrape.com: titles, prices, ratings, availability. Save to JSON. Add filtering by rating and price range.",
        time: "55m",
        type: "build"
      },
      {
        name: "Flask — Your First API",
        desc: "pip install flask, routes, JSON responses, query params, REST",
        activity: "Create Flask API: GET /tasks, POST /tasks, GET /tasks/<id>, PUT /tasks/<id>, DELETE /tasks/<id>. Test with requests library from another script.",
        time: "60m",
        type: "build"
      },
      {
        name: "APIs & Web Project",
        desc: "Build something consuming or providing APIs",
        activity: "Build 'Movie Dashboard' — input movie name, fetch from free API (OMDb/TMDb), display plot/rating/cast. Cache results in JSON. Search history. Top rated list.",
        time: "150m",
        type: "project"
      }
    ]
  },

  {
    phase: "Intermediate",
    phaseIndex: 2,
    month: "August Wk 23–24: Databases",
    monthIndex: 11,
    topics: [
      {
        name: "SQLite Basics",
        desc: "sqlite3 module, CREATE TABLE, INSERT, SELECT, WHERE, ORDER BY",
        activity: "Create db_basics.py — students table, insert 20 students. Queries: all students, by grade, by age range, sorted by name. Print as formatted table.",
        time: "50m",
        type: "practice"
      },
      {
        name: "SQL: UPDATE, DELETE, JOINs",
        desc: "Modifying/deleting data, INNER/LEFT JOIN, relating tables",
        activity: "Create school_db.py — students + courses tables. JOIN: which student takes which course. Find students with no courses. Update and delete records.",
        time: "50m",
        type: "practice"
      },
      {
        name: "SQL Aggregations",
        desc: "COUNT, SUM, AVG, MIN, MAX, GROUP BY, HAVING, subqueries",
        activity: "Create sales_db.py — sales table with 100+ entries. Total by month, top products, avg order value, sales trends, best customer. Use GROUP BY and HAVING.",
        time: "55m",
        type: "practice"
      },
      {
        name: "Full CRUD with SQLite",
        desc: "Create/Read/Update/Delete, parameterized queries, SQL injection prevention",
        activity: "Convert Contact Book to SQLite. All operations hit database. Use parameterized queries (?) everywhere. Add search with LIKE. Never use f-strings in SQL.",
        time: "60m",
        type: "build"
      },
      {
        name: "Database Design",
        desc: "Normalization, primary/foreign keys, indexes, relationships",
        activity: "Create library_db.py — books, authors, members, borrowings tables with foreign keys. Many authors per book (junction table). Borrowing history with dates.",
        time: "60m",
        type: "build"
      },
      {
        name: "SQLAlchemy ORM",
        desc: "Models, sessions, CRUD with ORM, relationships, querying",
        activity: "Rewrite library_db with SQLAlchemy. Define model classes, create from models, all CRUD the ORM way. Query with filters. Compare with raw SQL approach.",
        time: "55m",
        type: "practice"
      },
      {
        name: "Database Best Practices",
        desc: "Migrations, backups, connection pooling, transactions, error handling",
        activity: "Create migration script: backup database, add new column, migrate data, verify integrity, rollback on failure. Add transaction support to your CRUD app.",
        time: "45m",
        type: "practice"
      },
      {
        name: "Database Project",
        desc: "Full database application",
        activity: "Build 'Student Management System' — students/courses/enrollments/grades tables. Enroll students, record grades, generate transcripts, class rankings, GPA calc.",
        time: "150m",
        type: "project"
      }
    ]
  },

  // ============================================
  // PHASE 3: ADVANCED (September - October)
  // ============================================

  {
    phase: "Advanced",
    phaseIndex: 3,
    month: "September Wk 25–26: Testing & Quality",
    monthIndex: 12,
    topics: [
      {
        name: "pytest Basics",
        desc: "Test functions, assertions, test discovery, running tests, -v flag",
        activity: "Create test_utils.py — 20 tests for your utility functions. Test normal cases, edge cases (empty, zero, negative), expected failures. All must pass.",
        time: "50m",
        type: "practice"
      },
      {
        name: "Fixtures & Parametrize",
        desc: "@pytest.fixture, setup/teardown, @pytest.mark.parametrize, conftest.py",
        activity: "Create test_calc.py — parametrize add/subtract/multiply/divide with 10 input combos each. Fixtures for calculator setup. Use conftest.py for shared fixtures.",
        time: "45m",
        type: "practice"
      },
      {
        name: "Mocking",
        desc: "unittest.mock, Mock, patch, MagicMock, testing without real APIs",
        activity: "Create test_weather.py — mock requests library to test weather app without hitting API. Mock success, error responses, timeouts. Verify mock was called correctly.",
        time: "50m",
        type: "practice"
      },
      {
        name: "Test-Driven Development",
        desc: "Red-Green-Refactor cycle, tests first, design through testing",
        activity: "Build StringProcessor using TDD: write tests FIRST for reverse, capitalize_words, remove_punctuation, count_words, truncate. Then implement to pass them.",
        time: "55m",
        type: "build"
      },
      {
        name: "Type Hints & mypy",
        desc: "Function/variable annotations, Optional, Union, List, Dict, mypy",
        activity: "Add type hints to 3 previous projects. Run mypy. Fix all type errors. Create a fully typed module with complex signatures. Document type hint benefits.",
        time: "45m",
        type: "practice"
      },
      {
        name: "Logging Module",
        desc: "Log levels, formatters, handlers, file logging, rotating logs",
        activity: "Add proper logging to Expense Tracker: INFO for normal ops, WARNING for unusual inputs, ERROR for failures. Log to console AND file with different formats.",
        time: "40m",
        type: "practice"
      },
      {
        name: "Linting & Code Quality",
        desc: "pylint, flake8, black, isort, PEP 8, auto-formatting",
        activity: "Install black, flake8, isort. Run on 5 old projects. Fix issues. Set up VSCode auto-format on save. Document before/after diff for each project.",
        time: "40m",
        type: "practice"
      },
      {
        name: "Testing Project",
        desc: "Fully tested application with 100% coverage",
        activity: "Build 'Banking System' with TDD: Account, Transaction, Bank classes. 50+ tests first, then implement. Fixtures, parametrize, mocking. Coverage report targeting 90%+.",
        time: "150m",
        type: "project"
      }
    ]
  },

  {
    phase: "Advanced",
    phaseIndex: 3,
    month: "September Wk 27–28: Advanced Python",
    monthIndex: 13,
    topics: [
      {
        name: "Advanced Decorators",
        desc: "Decorators with arguments, class decorators, stacking, functools.wraps",
        activity: "Create adv_dec.py — @rate_limit(calls=5,period=60), @cache (memoization), @validate_types(*types), @deprecated('use X instead'). Stack multiple on one function.",
        time: "55m",
        type: "build"
      },
      {
        name: "Itertools Deep Dive",
        desc: "chain, product, combinations, permutations, groupby, count, cycle",
        activity: "Create itertools_lab.py — all permutations of word, infinite fibonacci generator, chunked processing pipeline, grouped data analysis, cartesian products.",
        time: "50m",
        type: "practice"
      },
      {
        name: "Threading",
        desc: "threading module, Thread, Lock, shared data, GIL awareness",
        activity: "Create threaded_dl.py — download 10 URLs simultaneously with threads. Compare time vs sequential. Handle per-thread errors. Show progress bar for each.",
        time: "55m",
        type: "build"
      },
      {
        name: "asyncio Basics",
        desc: "async/await, event loop, gather, aiohttp, concurrent execution",
        activity: "Create async_fetch.py — fetch 5 APIs concurrently with asyncio. Compare time with synchronous. Display results as they arrive. Handle per-task errors.",
        time: "55m",
        type: "build"
      },
      {
        name: "Regular Expressions",
        desc: "re module, match/search/findall/sub, groups, character classes, quantifiers",
        activity: "Create regex_tools.py — validate: email, phone, URL, IP, date, strong password. Extract all emails/URLs from text file. Replace patterns. Interactive tester.",
        time: "55m",
        type: "build"
      },
      {
        name: "Advanced datetime & Timezones",
        desc: "pytz/zoneinfo, timezone conversions, date arithmetic, recurring events",
        activity: "Create world_clock.py — display time in 10 cities. Calculate business days between dates. Meeting scheduler across timezones. DST handling.",
        time: "45m",
        type: "build"
      },
      {
        name: "Metaclasses & Descriptors",
        desc: "type(), metaclass, __new__, __init_subclass__, descriptor protocol",
        activity: "Create meta.py — metaclass that auto-registers subclasses, descriptor for type validation, class that auto-logs all method calls. Advanced but powerful.",
        time: "50m",
        type: "practice"
      },
      {
        name: "Advanced Python Project",
        desc: "Use advanced features in real application",
        activity: "Build 'Async Web Scraper Framework' — async scraping, rate limiting decorator, result caching, regex extraction, threaded file I/O, full logging, configurable.",
        time: "150m",
        type: "project"
      }
    ]
  },

  {
    phase: "Advanced",
    phaseIndex: 3,
    month: "October Wk 29–30: Web Development",
    monthIndex: 14,
    topics: [
      {
        name: "Flask Fundamentals",
        desc: "Routes, templates, static files, Jinja2, request handling",
        activity: "Create Flask app with 5 pages: home, about, contact (form), portfolio, custom 404. Jinja2 templates with shared base layout. Add CSS styling.",
        time: "60m",
        type: "build"
      },
      {
        name: "Flask Forms & Validation",
        desc: "HTML forms, POST handling, validation, flash messages, CSRF",
        activity: "Build Flask feedback form: name/email/rating/comments. Validate all fields server-side. Flash success/error messages. Store in SQLite. List submissions.",
        time: "55m",
        type: "build"
      },
      {
        name: "Flask CRUD App",
        desc: "Database integration, templates for each CRUD operation",
        activity: "Build Flask Todo App: list/add/edit/delete/mark-complete todos. SQLite backend. Styled templates. Filter by status. Due dates with overdue highlighting.",
        time: "60m",
        type: "build"
      },
      {
        name: "Flask REST API",
        desc: "JSON responses, request.json, versioning, error handling, status codes",
        activity: "Create bookstore API: GET/POST/PUT/DELETE for /api/books. JSON responses with proper status codes. Add search, filtering, pagination. Test with curl/requests.",
        time: "55m",
        type: "build"
      },
      {
        name: "Flask Authentication",
        desc: "Registration, login, sessions, password hashing, @login_required",
        activity: "Add auth to Todo app: register, login, logout. Each user sees only their todos. Hash passwords with werkzeug. Protect routes with login_required.",
        time: "60m",
        type: "build"
      },
      {
        name: "Flask Blueprints & Structure",
        desc: "Blueprints, application factory, config management, clean layout",
        activity: "Refactor Todo into blueprints: auth/, todos/, main/. Application factory pattern. Dev/prod config. Proper folder structure. Document the architecture.",
        time: "50m",
        type: "practice"
      },
      {
        name: "HTML/CSS/JS for Python Devs",
        desc: "Enough frontend: responsive layout, forms, basic JS interactions",
        activity: "Create styled landing page for Todo app: responsive layout, nav, hero, feature cards, footer. JS for mobile menu toggle and client-side form validation.",
        time: "60m",
        type: "build"
      },
      {
        name: "Web Dev Project",
        desc: "Full web application from scratch",
        activity: "Build 'Blog Platform' — Flask+SQLite: registration/login, create/edit/delete posts, comments, categories, search, pagination, responsive design, admin dashboard.",
        time: "180m",
        type: "project"
      }
    ]
  },

  {
    phase: "Advanced",
    phaseIndex: 3,
    month: "October Wk 31–32: Data & Automation",
    monthIndex: 15,
    topics: [
      {
        name: "pandas Basics",
        desc: "Series, DataFrame, read_csv, head/tail, describe, dtypes, shape",
        activity: "Create pandas_intro.py — load CSV dataset from Kaggle. Display first/last rows, column types, statistics, shape, missing values count. Clean null values.",
        time: "50m",
        type: "practice"
      },
      {
        name: "pandas Data Manipulation",
        desc: "Filtering, sorting, groupby, merge, pivot_table, apply, lambda",
        activity: "Create data_analysis.py — sales dataset: filter by date/category, group by month, running totals, merge with product info, pivot table, top performers.",
        time: "55m",
        type: "practice"
      },
      {
        name: "matplotlib Visualization",
        desc: "Line plots, bar charts, pie, histograms, scatter, subplots",
        activity: "Create charts.py — from sales data: monthly line, category bar, market share pie, price histogram, scatter plot, 2x3 dashboard with subplots.",
        time: "55m",
        type: "build"
      },
      {
        name: "Advanced Visualization",
        desc: "Seaborn, styling, annotations, heatmaps, box plots",
        activity: "Create adv_charts.py — seaborn: correlation heatmap, distribution box plots, pair plots, styled with custom palettes. Annotated with titles, legends, grid.",
        time: "50m",
        type: "build"
      },
      {
        name: "File System Automation",
        desc: "Batch rename, organize, backup, directory watching",
        activity: "Create auto_organizer.py — watch folder for new files, auto-sort by extension, rename with date prefix, log all actions, handle duplicates, dry-run mode.",
        time: "50m",
        type: "build"
      },
      {
        name: "Email & Scheduling Automation",
        desc: "smtplib, email module, schedule library, automated reports",
        activity: "Create auto_report.py — generate daily report from expense data, format as HTML, schedule with 'schedule' library. Log successes/failures. Email-ready output.",
        time: "50m",
        type: "build"
      },
      {
        name: "PDF Generation",
        desc: "fpdf or reportlab, creating PDFs from data, invoices, reports",
        activity: "Create invoice_gen.py — input customer/items/prices. Generate professional PDF invoice: header, item table, subtotal/tax/total, footer with date. Auto-filename.",
        time: "55m",
        type: "build"
      },
      {
        name: "Data & Automation Project",
        desc: "Full data pipeline",
        activity: "Build 'Sales Report Generator' — read CSV, clean with pandas, generate 5 matplotlib charts, create PDF report with charts + summary stats. One command runs everything.",
        time: "180m",
        type: "project"
      }
    ]
  },

  // ============================================
  // PHASE 4: MASTERY & PROJECTS (Nov - Dec)
  // ============================================

  {
    phase: "Mastery & Projects",
    phaseIndex: 4,
    month: "November Wk 33–34: Git, CLI & Packaging",
    monthIndex: 16,
    topics: [
      {
        name: "Git Fundamentals",
        desc: "init, add, commit, log, diff, .gitignore, commit messages",
        activity: "Init git for your best project. Make 10+ meaningful commits with good messages. Create .gitignore. Use git log and git diff. Practice amending commits.",
        time: "45m",
        type: "practice"
      },
      {
        name: "Git Branching & Merging",
        desc: "Branches, checkout, merge, conflicts, feature branch workflow, stash",
        activity: "In Todo app: create feature/dark-mode, feature/search, bugfix/login branches. Work on each. Merge to main. Create and resolve a merge conflict intentionally.",
        time: "45m",
        type: "practice"
      },
      {
        name: "GitHub & Collaboration",
        desc: "Push, pull, clone, fork, pull requests, Issues, README.md",
        activity: "Push 5 best projects to GitHub. Write professional README.md for each: description, install steps, usage, screenshots section, tech used, license.",
        time: "50m",
        type: "practice"
      },
      {
        name: "CLI Tools with argparse",
        desc: "Arguments, flags, subcommands, help text, type validation",
        activity: "Create CLI file utility: python filetool.py count <dir> --ext .py, search <dir> <pattern>, rename <dir> --prefix date. Full --help text. Error handling.",
        time: "55m",
        type: "build"
      },
      {
        name: "CLI Tools with typer",
        desc: "Decorators for commands, auto-help, colors, progress bars",
        activity: "Rebuild file utility with Typer: colored output, progress bars, confirmation prompts, auto-generated docs. Compare developer experience with argparse.",
        time: "50m",
        type: "build"
      },
      {
        name: "Python Packaging",
        desc: "pyproject.toml, wheel, pip install, entry_points, publishing",
        activity: "Package your CLI tool: pyproject.toml, organize code, make pip-installable with 'pip install .'. Register console_script entry point. Test install in fresh venv.",
        time: "50m",
        type: "practice"
      },
      {
        name: "Docker for Python",
        desc: "Dockerfile, images, containers, docker-compose, volumes",
        activity: "Write Dockerfile for Flask Blog: Python image, install deps, copy code, expose port. docker-compose.yml with app + SQLite volume. Test full containerized setup.",
        time: "55m",
        type: "build"
      },
      {
        name: "DevOps Mini Project",
        desc: "Complete development workflow",
        activity: "Build CLI tool 'pysnippet' — save/search/list code snippets from terminal. Package it, push to GitHub with GitHub Actions CI (runs tests on push), full README.",
        time: "150m",
        type: "project"
      }
    ]
  },

  {
    phase: "Mastery & Projects",
    phaseIndex: 4,
    month: "November Wk 35–36: Clean Code & Patterns",
    monthIndex: 17,
    topics: [
      {
        name: "SOLID Principles",
        desc: "Single Responsibility, Open/Closed, Liskov, Interface Segregation, Dependency Inversion",
        activity: "Create solid.py — for each principle: BAD example violating it, then GOOD refactored version. 10 examples total (2 per principle). Explain each in comments.",
        time: "60m",
        type: "practice"
      },
      {
        name: "Observer & Strategy Patterns",
        desc: "Observer (pub/sub), Strategy (swappable algorithms)",
        activity: "Notification system: Subject with EmailNotifier/SMSNotifier/SlackNotifier observers. Payment system with Strategy: CreditCard/PayPal/Crypto strategies. Demo both.",
        time: "55m",
        type: "build"
      },
      {
        name: "Builder & Adapter Patterns",
        desc: "Builder (step-by-step), Adapter (interface compatibility)",
        activity: "QueryBuilder: query.select('name').from_table('users').where('age>18').order_by('name').build(). Adapter: make old API interface work with new client code.",
        time: "50m",
        type: "build"
      },
      {
        name: "Clean Code Practices",
        desc: "Meaningful names, small functions, DRY, KISS, code smells",
        activity: "Take 3 messiest old projects. Refactor: rename variables, extract functions, remove duplication, add docstrings. Git commit before/after to see diff.",
        time: "60m",
        type: "practice"
      },
      {
        name: "Code Review Skills",
        desc: "What to look for, giving feedback, common issues",
        activity: "Review 5 own projects as if reviewing someone else's. Write detailed review comments: issues found, suggestions, code smells, what's done well. Fix all issues.",
        time: "45m",
        type: "practice"
      },
      {
        name: "Documentation",
        desc: "Google-style docstrings, auto-docs, README best practices",
        activity: "Add Google-style docstrings to Library System. Generate HTML docs with pdoc. Write comprehensive README with API reference, examples, and architecture diagram.",
        time: "50m",
        type: "practice"
      },
      {
        name: "Performance Profiling",
        desc: "timeit, cProfile, memory_profiler, optimization, caching",
        activity: "Profile Maze Solver with cProfile. Find bottlenecks. Optimize: add caching, improve algorithm, reduce memory. Benchmark before/after. Document improvements.",
        time: "50m",
        type: "practice"
      },
      {
        name: "Clean Code Project",
        desc: "Apply all principles to build excellent code",
        activity: "Build 'Task Automation Framework' — SOLID code: Task base, concrete tasks (FileBackup, EmailSend, DataClean), Scheduler, Logger, Config. Full docs, tests, type hints.",
        time: "150m",
        type: "project"
      }
    ]
  },

  {
    phase: "Mastery & Projects",
    phaseIndex: 4,
    month: "December Wk 37–40: CAPSTONE",
    monthIndex: 18,
    topics: [
      {
        name: "Capstone: Planning & Architecture",
        desc: "Choose project, plan features, design DB schema, wireframe",
        activity: "Write 1-page plan: feature list (MVP + stretch goals), database schema, file structure, API endpoints, tech stack, 4-week timeline with milestones.",
        time: "60m",
        type: "practice"
      },
      {
        name: "Capstone: Setup & Database (Wk 1a)",
        desc: "Project structure, git, venv, models, seed data",
        activity: "Set up: create repo, folder structure, virtual env, requirements.txt, database models, migration script, seed data. First commit with clean foundation.",
        time: "90m",
        type: "project"
      },
      {
        name: "Capstone: Core Features (Wk 1b)",
        desc: "Primary CRUD operations and business logic",
        activity: "Implement core: main models, CRUD operations, business logic functions, basic routes or CLI. Write tests as you build. Commit after each feature.",
        time: "180m",
        type: "project"
      },
      {
        name: "Capstone: Core Features (Wk 2)",
        desc: "Complete remaining features, integrations",
        activity: "Finish core: remaining models, data processing, file I/O, API integrations. Working MVP that handles the main use case. All core tests passing.",
        time: "180m",
        type: "project"
      },
      {
        name: "Capstone: Advanced Features (Wk 3)",
        desc: "Polish, advanced features, better UX",
        activity: "Add: search/filter, data visualization, export, auth (if web), comprehensive error handling, input validation, edge case handling. Refactor messy code.",
        time: "180m",
        type: "project"
      },
      {
        name: "Capstone: Testing & Quality (Wk 3b)",
        desc: "Comprehensive testing, linting, profiling",
        activity: "Write 50+ tests covering all features. Run linter, fix issues. Profile and optimize slow parts. Add type hints everywhere. Coverage report targeting 85%+.",
        time: "120m",
        type: "project"
      },
      {
        name: "Capstone: Docs & Deploy (Wk 4a)",
        desc: "Documentation, Docker, deployment",
        activity: "README with screenshots. Docstrings everywhere. Dockerfile. Deploy: PythonAnywhere/Railway for web, or package for CLI. Verify it works on a fresh machine.",
        time: "120m",
        type: "project"
      },
      {
        name: "Capstone: Present & Reflect (Wk 4b)",
        desc: "Final polish, portfolio, next steps",
        activity: "Final polish. Write blog post about what you built. Update GitHub profile README. Plan next phase: Django? FastAPI? Data Science? ML? Cloud? DevOps?",
        time: "60m",
        type: "practice"
      }
    ]
  },

  {
    phase: "Mastery & Projects",
    phaseIndex: 4,
    month: "December Wk 41–44: Specialization & Beyond",
    monthIndex: 19,
    topics: [
      {
        name: "FastAPI Introduction",
        desc: "Modern async API framework, auto-docs, Pydantic validation",
        activity: "Rebuild bookstore API with FastAPI. Use Pydantic models for validation. Check auto-generated Swagger docs at /docs. Compare developer experience with Flask.",
        time: "60m",
        type: "build"
      },
      {
        name: "Django Basics",
        desc: "Full-stack framework, ORM, admin, templates, MVT pattern",
        activity: "Create Django blog: posts/comments/categories. Use Django admin panel. 3 templates. Compare development speed with Flask. Explore built-in features.",
        time: "90m",
        type: "build"
      },
      {
        name: "NumPy Essentials",
        desc: "Arrays, vectorized ops, broadcasting, reshaping, statistics",
        activity: "Create numpy_lab.py — array creation, element-wise ops, reshape, 2D slicing, statistical calculations on dataset. Speed comparison: numpy vs pure Python lists.",
        time: "50m",
        type: "practice"
      },
      {
        name: "Full Data Analysis Project",
        desc: "End-to-end pandas + matplotlib workflow",
        activity: "Kaggle dataset analysis: load, clean, explore (stats + distributions), visualize (5+ charts), 3 written insights. Export as styled HTML report. Shareable.",
        time: "120m",
        type: "project"
      },
      {
        name: "Machine Learning Intro",
        desc: "scikit-learn basics, train/test, classifiers, evaluation",
        activity: "Build simple ML model: load iris dataset, train/test split, train KNN + Decision Tree + Random Forest, compare accuracy, predict on new data, confusion matrix.",
        time: "60m",
        type: "build"
      },
      {
        name: "Websockets & Real-time",
        desc: "websockets library, Flask-SocketIO, real-time communication",
        activity: "Build real-time chat: Flask-SocketIO, multiple users join rooms, send messages, online user list. Messages appear instantly. Handle disconnects gracefully.",
        time: "60m",
        type: "build"
      },
      {
        name: "Your First Open Source Contribution",
        desc: "Finding projects, reading codebases, issues, PRs",
        activity: "Find a beginner-friendly Python repo (look for 'good first issue'). Read codebase, set up locally, make a fix or improvement, submit a pull request.",
        time: "90m",
        type: "challenge"
      },
      {
        name: "Final Reflection & Portfolio",
        desc: "Celebrate your journey, build portfolio, plan ahead",
        activity: "Create a portfolio page showcasing your 5 best projects with descriptions, screenshots, GitHub links. Write a '10 months of Python' reflection post.",
        time: "120m",
        type: "project"
      }
    ]
  }
];


// ================================================
// HELPER: Get unique phase names
// ================================================
const PHASES = [...new Set(CURRICULUM.map(c => c.phase))];
