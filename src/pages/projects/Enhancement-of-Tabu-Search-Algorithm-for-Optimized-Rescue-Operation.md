---
layout: ../../layouts/MarkdownProjectLayout.astro
title: "Enhancement of Tabu Search Algorithm for Optimized Rescue Operation"
startDate: "Jul 14, 2024"
endDate: "May 11, 2025"
description: "This thesis project focuses on enhancing the Tabu Search algorithm by addressing its recent challenges. The improved algorithm is subsequently applied to a real-world problem to demonstrate its practical utility. This project was undertaken as part of a course requirement."
roles: ["Leader", "Sole Programmer"]
tags:
  [
    "Thesis",
    "Metaheuristic Algorithm Optimization",
    "Google Map API",
    "Flask",
    "Simulation",
    "BootStrap",
  ]
githubLinks:
  [
    "https://github.com/jhaimecando27/Thesis-system",
    "https://github.com/jhaimecando27/ts-simulation",
  ]
docuLinks: ["/docs/EnhancementOfTabuSearchAlgorithmOptimizedForRescueOperation.pdf"]
demoLinks: []
figmaLinks:
  [
    "https://www.figma.com/design/OEBAeDtzXNWtZP8CBFG4pd/Thesis?m=auto&t=c61C1rBB6MQNWVN9-1",
  ]
---

### Technology Used

- Simulation
  - Python - Python is used for its robust capabilities in data manipulation, algorithm implementation, and ease of integration with analytical libraries.
  - Excel - Excel is utilized for statistical analysis, specifically for conducting ANOVA (Analysis of Variance) tests. This allows comparison between the performance of the enhanced Tabu Search algorithm and three recent alternative versions.
- System
  - Flask - Flask is chosen as the web framework due to its lightweight nature. The system primarily requires route handling, making Flask a suitable and efficient option.
  - Google Maps API - The Google Maps Distance Matrix and Routes APIs are employed to obtain accurate distance and routing data. Google's APIs are selected for their reliability and precision in real-world geographical contexts.

### Role and Actions

- Implemented the enhanced algorithm and developed a system as sole programmer
- Led the research team in technical solution and documentation
- Conducted simulations comparing performance against recent variants
- Presented alone at "TO CS TO BELIEVE 2025" conference

### Development Process

#### Project Idea

As part of a course requirement, we were tasked with enhancing an existing algorithm and applying it to a real-world problem. Our team chose to focus on pathfinding algorithms, an area we are particularly interested in. During our exploration, we came across the Tabu Search algorithm, which stood out due to its use of memory structures that guide the search process, making it a promising candidate for enhancement.

For the application of our enhanced algorithm, we identified pathfinding for rescue operations as a relatively underexplored area. This decision was also influenced by the geographic context of the Philippines, a country frequently affected by natural disasters such as typhoons. To create a realistic yet manageable application, we focused on the Baseco Compound in Manila, one of the most vulnerable areas to disasters. Due to time constraints, limiting the scope to this location allowed us to more easily acquire data and concentrate on both the simulation and system development.

#### Simulation and System Design Decisions

During the development of the simulation, I decided to create synthetic datasets to test the algorithms across various problem sizes. To ensure accuracy and fairness, all algorithms were run using the same datasets throughout the simulation process. I also made sure to separate the core functionalities of each algorithm, which allowed me to implement shared functions for common tasks, improving code maintainability and consistency across simulations. For each simulation run, the results were saved in a markdown file, enabling quick and easy comparisons. This approach helped me efficiently identify areas where the algorithm needed improvement.

For the system, we chose Flask primarily because it is lightweight and provides simple route handling. While the system could have been developed as a single-page application—making Flask arguably unnecessary—none of us had prior experience with AJAX or frontend frameworks such as Vue.js at the time. To simplify development and accelerate progress, I decided to divide the workflow into multiple pages, which made the system easier to build within the limited timeframe. For the mapping component, we selected the Google Maps API due to its wide range of features, including the Distance Matrix API, and its superior reliability. Compared to OpenStreetMap, Google Maps offers more complete and frequently updated route data, making it a better fit for our pathfinding use case.

### Challenges and Solutions

#### Developing a Viable Solution

Our first major challenge was finding a solution that meaningfully enhanced an existing algorithm. Initial approaches we tried resulted in minimal or no improvement, which stalled our progress. Since the thesis specifically required us to enhance an algorithm, this became a significant obstacle for the team.

To address this, I proposed an “inspired” approach—drawing from natural concepts such as wave behavior or animal movement patterns. Unlike direct algorithmic modifications, inspired methods allow for more creative idea generation and are easier to adapt and test against existing solutions. After multiple iterations, we settled on two key inspirations: wave patterns (leveraging sine and cosine functions) and focal animal sampling, which provided an elegant solution to one of our specific optimization problems. These approaches ultimately led to a significant enhancement in algorithm performance.

#### Working with new Technology

The second challenge involved integrating new technologies—specifically the Google Maps API, which I had no prior experience with. As the team’s programmer, this task fell to me, and the limited time added pressure.

To overcome this, I systematically studied the official documentation for the specific API functions we needed, such as the Distance Matrix and Routes APIs. I also used AI tools to generate various implementation examples. However, since I was cautious about relying entirely on AI for complex coding problems, I conducted extensive hands-on testing and experimentation. Through this combination of research, trial-and-error, and tool-assisted learning, I successfully integrated the Google Maps API into our system.

### Final Take

This project has taught me a great deal—not only in terms of being a programmer, but also as a leader. I learned how to manage time and responsibilities under pressure, communicate effectively within a team, and make critical decisions when faced with both technical and strategic challenges. As a programmer, I improved my skills in algorithm design, API integration, and debugging under real-world constraints, while also gaining confidence in learning and applying new technologies. Throughout the development process, I used AI tools as a reference and support system to accelerate coding tasks and explore different approaches. Although AI proved to be a helpful assistant, I realized it is still prone to mistakes, especially in more complex scenarios, reinforcing the importance of hands-on testing and critical thinking. Overall, this experience helped me grow significantly—both technically and professionally.
