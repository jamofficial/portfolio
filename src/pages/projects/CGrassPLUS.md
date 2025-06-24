---
layout: ../../layouts/MarkdownProjectLayout.astro
title: "CGrassPLUS"
startDate: ""
endDate: ""
description: "A custom compiler developed by Team HerbiCode at PLM. It features a lexical analyzer for tokenization, a syntax analyzer using CFG rules, and a semantic analyzer for type checking. Designed for educational purposes, it demonstrates compiler design principles with Python-like syntax and C-style structure."
roles: ["Leader", "Sole Programmer"]
tags:
  [
    "Compiler",
    "Automata Theory",
    "Lexical Analyzer",
    "Syntax Analyzer",
    "Semantic Analyzer",
    "Tkinter",
  ]
githubLinks: ["https://github.com/jhaimecando27/CGrassPLUS"]
docuLinks: ["/docs/C-Grass-PLUS.pdf"]
demoLinks: []
figmaLinks: []
---

### Technology Used

- Tkinter - Provided the foundation for the application's windows, text editing areas, and interactive elements.

### Role and Actions

As the sole programmer of the C-Grass PLUS compiler, I was responsible for:

- **Architecture:**
  - Created the complete compiler from scratch
  - Implemented all three compiler phases (lexical, syntax, semantic analysis)
- **Implementation:**
  - Developed the Tkinter-based GUI application
  - Built the lexical analyzer using regular expressions
  - Implemented the syntax analyzer with parsing tables
  - Created semantic analysis rules and type checking
- **Debugging:**
  - Fixed bugs across all analysis phases
  - Optimized the compiler's performance

### Development Process

The development process involved creating the lexical, syntax, and semantic analyzers in sequence, as required by the course. For the lexical analyzer, the program was required to check input character by character. Initially, our group and others considered using if statements, but I found this approach inefficient and messy due to the inevitable creation of numerous nested conditionals. However, the instructor required that the program visibly check input letter by letter, which limited my options.

I initially attempted to implement a tree structure approach because it seemed more elegant and creative rather than brute-force. However, due to very limited time constraints, I had to abandon this approach. I faced two choices: create a tree structure through trial and error, or use AI to automate the generation of the nested if-statement approach. I chose to leverage AI to create the extensive if-statement structure, which saved significant time and allowed me to focus on studying how to implement the syntax analyzer.

For the syntax analyzer, I took advantage of Python's flexibility in allowing functions to be declared anywhere within a file and called from anywhere in that same file. This approach made the code more readable and closely aligned with the documented specifications.

For the semantic analyzer, I used a similar approach to the syntax analyzer for readability, knowing that functions would be used multiple times. Additionally, I implemented a tree structure to identify statement levels, similar to how Python uses indentation.

### Challenges and Solutions

The first major challenge was debugging. This occurred because I coded the entire system before testing individual components. My solution was to systematically compile and track all bugs to maintain development momentum.
The second challenge involved data dependencies between analyzers - the syntax analyzer needed data from the lexical analyzer, and the semantic analyzer required data from both previous phases. I solved this by implementing a tree structure that allowed seamless data sharing between analyzers without requiring major architectural changes.

### Final Take

This project taught me to think creatively by utilizing tree structures and leveraging the strengths of the programming language. It also helped me make strategic decisions that benefited the team as a whole. Using AI to automate repetitive and straightforward tasks, such as character-by-character input validation, proved to be tremendously helpful and time-efficient.
