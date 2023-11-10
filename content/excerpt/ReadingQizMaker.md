---
id: 20231109124942
title: ReadingQizMaker
aliases: 
date: 2023-11-09 12:49
draft: false
tags: 
marp: true
paginate: true
theme: gaia
header: "**ReadingQizMaker**"
footer: "**201250035 邓尤亮**"
---

<!-- _class: invert -->

# Reading QizMaker

ReadingQuizMaker: A Human-NLP Collaborative System that Supports Instructors to Design High-Quality Reading Quiz Questions.

201250035 邓尤亮

2023.11.10

---
# 0. Abstract

- Purpose: support *instructors* to conveniently design high-quality questions to help students comprehend readings
- Adapt to natural workflow and offer *NLP-based* support
- Evaluation Study: 
	- questions generated with ReadingQuizMaker comparable to their manually designed quizzes
	- NLP suggestions satisfying and helpful
	- show the importance of allowing users to control the use of AI and providing immediate previews of AI-generated outcomes​

---

# 1. Introduction


<!-- 
指定阅读材料在大学教育中至关重要。服从性低的问题：高等教育中一个长期存在的问题是，只有 20-30% 的学生完成阅读作业，随着社交媒体的兴起，这一趋势变得更加恶化。 

支持学术阅读：已经实施了各种策略和工具来增强学生的阅读体验，例如社交注释工具，但对于具有自我调节学习技能的学生来说效果更好。
-->

1. Assigned readings are crucial in college education. But a persistent issue in higher education is that only 20-30% of students complete their reading assignments, a trend that has worsened with the rise of social media.
2. Various strategies and tools have been implemented to enhance students' reading experience, like social annotation tools, which, however, work better for students with self-regulated learning skills.

---

<!-- 
设计高质量、发人深省的问题既耗时又具有挑战性，而现有的基于 NLP 的自动问题生成系统由于其领域特殊性和质量较差，在课堂上的采用率较低。

揭示教师在创建阅读测验问题时面临的挑战，介绍 ReadingQuizMaker 及其基于 NLP 的支持，以及评估该系统以展示其可用性和人机协作方法的优势​​。
-->
3. Designing high-quality, thought-provoking questions is time-consuming and challenging, and existing NLP-based automatic question generation systems have low adoption rates in classrooms due to their domain specificity and poor quality.
4. Introduce ReadingQuizMaker
5. The paper claims three main contributions: 
	1. revealing the challenges instructors face in creating reading quiz questions
	2. introducing ReadingQuizMaker with its NLP-based support
	3. An evaluation study of the system to demonstrate its usability and the advantages of a human-AI teaming approach​

---

# 2. Related Work

<!--
1. **大学阅读作业中的低合规性**：该部分讨论了大学生在阅读作业中普遍合规性低的长期问题，只有 20-30%的本科生完成课堂阅读，导致学术表现不佳。导致这一问题的因素包括缺乏动力、低估阅读的重要性、阅读技能的缺陷以及时间限制。
    
2. **支持阅读实践的策略**：它检视了提高积极阅读的各种策略，如主动做笔记、协作阅读和使用社交注释工具（如Perusall）。然而，这些策略具有局限性，包括缺乏对内容理解的反馈以及依赖学生的自我调节学习技能。
    
3. **支持积极阅读的界面**：本小节突出了旨在模仿数字格式中的纸质阅读体验的研究，专注于导航和笔记记录，以增强科学论文阅读体验并帮助理解复杂符号和数学。
    
4. **教育目的的问题生成技术**：它回顾了在AI和教育交叉领域中开发问题创建技术的进展，从众包新问题到开发端到端的NLP模型。尽管现有技术在创建事实问题方面很擅长，但它们在生成高阶思维问题方面往往表现不佳，并且通常是领域特定的，导致问题质量低下。
    
5. **教育领域的人工智能系统**：讨论了在教育领域探索人工智能协作的情况，人类教师在其中领导，而AI支持整个过程。尽管在课堂教学中探索了各种人工智能协作方法，但在教学和教学设计阶段提供AI支持的有效性，例如准备材料和问题，仍然未受到充分探索。
    
6. **人工智能系统设计指南**：回顾了为设计人工智能系统以增强用户体验而提出的指南，强调了显示相关信息、支持高效系统调用和解除、以及便于更正的重要性。ReadingQuizMaker的设计符合这些指南，确保通过迭代测试和教育工作者的反馈，使人工智能交互直观且受欢迎。
    
该部分通过概述当前教育实践的问题以及人工智能系统改善教育内容创建质量和过程的潜力，为ReadingQuizMaker的引入做好了铺垫
-->

1. **Low Compliance in College Reading Assignments**
2. **Strategies to Support Reading Practices**
3. **Interfaces to Support Active Reading**
4. **Question Generation Techniques for Educational Purposes**
5. **Human-AI Systems for Education**
6. **Human-AI System Design Guidelines**

---

# 3. Formative Investigations

<!--

performed a formative study with 11 college instructors to understand their natural workfows of creating questions

论文的“形成性调查”部分包括以下结论：

1. **问题创建中的独特挑战**：大学教师在手工创建问题时面临独特的挑战，如耗时和难以创建有意义的干扰项和问题引导，这些干扰项和问题引导需要准确涵盖内容并激发思考。

2. **对高质量问题的渴望**：教师一致认为需要高质量的阅读问题，这些问题可以引导学生超越死记硬背，将知识整合起来并促进批判性思维。

3. **自然语言处理工具的支持**：教师对使用自然语言处理工具来协助问题创建过程持积极态度，但他们强调需要对这些工具进行控制，以确保结果的质量和相关性。

-->

1. **Unique Challenges in Question Creation**
2. **Desire for High-Quality Questions**
3. **NLP Tool Support**

---

<!--

4. **设计要求**：该研究确定了一个以用户为中心的系统以帮助教师的几个设计要求：
   - 支持创建具有说服力的干扰项。
   - 过程导向的支持，允许融入教师的专业知识。
   - 与当前工作流程集成，以快速创建问题。
   - 提供问题的简便反馈机制。
   - 确保教师在与人工智能互动时具有控制权。

这些结论反映了教师希望有一个支持他们工作流程、尊重他们专业知识的系统，并提供可控和透明的人工智能辅助，与人工智能与人类互动设计指南一致。

-->
4. **Design Requirements**
    - Support for creating convincing distractors.
    - Process-oriented support allowing for the incorporation of instructors' expertise.
    - Integration with current workflows for quick question creation.
    - Easy feedback mechanism for the questions.
    - Ensuring instructors have control when interacting with AI.


---

# 4. Reading Quiz Maker

## Detailed Design

<!--
ReadingQuizMaker 的详细设计包括以下功能和特性：

1. **与HTML文章兼容性**：ReadingQuizMaker旨在与HTML格式的文章兼容。这是因为大多数学术出版物和在线文档都以HTML格式提供，这种格式在系统内易于访问和操作。
2. **导航栏**：导航栏帮助用户快速了解阅读材料的内容覆盖范围。它将表格和图表突出显示为文本内的绿色块，块的大小与图表大小成比例。这个功能有助于用户更高效地导航阅读材料，确保他们在创建测验问题时覆盖了所有必要的内容。
3. **NLP建议的即时预览**：当用户选择要在问题中使用的文本时，ReadingQuizMaker会立即预览由人工智能生成的建议，如释义或摘要。这个过程导向的支持允许用户在不需要额外操作的情况下快速高效地利用NLP转换来提高问题质量。
4. **问题创作面板**：问题创作面板与用户自然的问题创建工作流程相符。它支持多选、多项回答和开放性问题类型。用户可以从Paper面板传输文本和图像，也可以自由添加内容，从而促进灵活的问题创建过程。
5. **用户自然工作流程和反馈**：该系统适应用户自然的工作流程，使他们能够为问题选项编写反馈。它还允许用户通过添加注释进行高级规划，从而更容易地从头到尾管理测验创建过程。
6. **内容覆盖和准确性**：ReadingQuizMaker有助于确保问题全面和准确地涵盖内容，这对于教育评估至关重要。用户可以根据阅读材料中的内容审查他们创建的问题，以确保没有遗漏重要信息。

ReadingQuizMaker的设计是根据形成性研究中确定的挑战和要求而制定的，旨在为教师提供一个高效和以用户为中心的工具，用于创建阅读测验问题
-->

1. **Compatibility with HTML Articles**
2. **Navigation Bar**
3. **Immediate Preview of NLP Suggestions**
4. **User Natural Workflows and Feedback**
5. **NLP Toolbox**
6. **Review and Output**

---

