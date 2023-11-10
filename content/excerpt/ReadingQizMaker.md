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
大学阅读作业依从性低：本节讨论大学生阅读作业依从性低的长期问题，只有 20-30% 的本科生完成课堂阅读，导致学习成绩不佳。造成这种情况的因素包括缺乏动力、低估阅读的重要性、阅读技巧的缺陷和时间限制。

支持阅读实践的策略：它研究了为增强主动阅读而提出的各种策略，例如做主动笔记、协作阅读以及使用 Perusall 等社交注释工具。然而，这些策略有局限性，包括缺乏对内容理解的反馈以及对学生自我调节学习技能的依赖。

支持主动阅读的界面：本小节重点介绍旨在以数字格式模拟物理论文阅读体验的研究，重点关注导航和笔记，以增强科学论文阅读体验并帮助理解复杂的符号和数学。

用于教育目的的问题生成技术：回顾了人工智能和教育交叉点的问题创建技术的发展，从众包新问题到开发端到端 NLP 模型。虽然现有技术擅长创建事实问题，但它们通常无法生成高阶思维问题，并且通常是针对特定领域的，从而导致问题质量低下。

教育领域的人机人工智能系统：讨论教育领域人机人工智能协作的探索，其中由人类教师领导，而人工智能支持这一过程。尽管在课堂教学中探索了各种人类人工智能方法，但人工智能支持在教学和教学设计阶段（例如准备材料和问题）的有效性仍有待探索。

人类人工智能系统设计指南：审查为设计人类人工智能系统以增强用户体验而提出的指南，强调显示相关信息、支持高效系统调用和解除以及促进纠正的重要性。 ReadingQuizMaker 的设计符合这些准则，通过迭代测试和教育工作者的反馈，确保人机交互直观且理想。

本节概述了当前教育实践中的问题以及人类人工智能系统提高教育内容创建质量和流程的潜力，为 ReadingQuizMaker 的介绍奠定了基础​​。
-->

1. **Low Compliance in College Reading Assignments**
2. **Strategies to Support Reading Practices**
3. **Interfaces to Support Active Reading**
4. **Question Generation Techniques for Educational Purposes**
5. **Human-AI Systems for Education**
6. **Human-AI System Design Guidelines**
