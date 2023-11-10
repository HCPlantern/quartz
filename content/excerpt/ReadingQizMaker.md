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
指定阅读材料在大学教育中至关重要，被认为有益于学习活动和课堂讨论。服从性低的问题：高等教育中一个长期存在的问题是，只有 20-30% 的学生完成阅读作业，随着社交媒体的兴起，这一趋势变得更加恶化。 

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

