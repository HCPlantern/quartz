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

## NLP Models

<!--
ReadingQuizMaker 系统采用了一系列基于 Transformer 的自然语言处理（NLP）模型，为用户提供建议。这些模型包括：

1. **摘要生成模型**：采用了在 CNN-DailyMail 数据集上训练的精细调整的 BART（双向和自回归变换器）模型，用于将长段落压缩成简洁的摘要。具体使用的检查点是来自 HuggingFace 的 'bart-large-cnn'。

2. **释义模型**：这个模型是在 PEGASUS（使用提取的间隔句进行抽象摘要序列到序列模型的预训练）上进行预训练的，并用于重新表达句子，同时保留其语义信息。使用了 HuggingFace 发布的 'pegasus_paraphrase' 检查点。

3. **否定模型**：基于 BART 的模型，经过 WikiFactCheck-English 的精细调整，用于生成否定性声明。系统使用了作者在 HuggingFace 上发布的检查点，用于生成可用作测验中的干扰项的合理但不正确的选项。

这些模型在 ReadingQuizMaker 内部具有不同的用途，以帮助教师创建高质量的测验问题。摘要生成模型特别适用于创建较长文本的摘要，释义模型有助于重新表述和简化句子以提高清晰度，而否定模型则有助于生成多项选择题中的合理但不正确的选项。这些模型的整合旨在使教师的问题创建过程更加健壮、灵活和高效，使他们能够生成更高质量的问题。
-->

1. **Abstractive Summarization Model**: Utilizes a fine-tuned BART (Bidirectional and Auto-Regressive Transformers) model that is trained on the CNN-DailyMail dataset.
2. **Paraphrase Model**: This model is pretrained on PEGASUS (Pre-training with Extracted Gap-sentences for Abstractive Summarization Sequence-to-sequence models) and is used to rephrase sentences while retaining their semantic information
3. **Negation Model**: A BART-based model fine-tuned on WikiFactCheck-English for negative claim generation.

---

# 5. Evaluation Study

<!-- 
论文中的“评估研究”部分讨论了一项获得机构审查委员会（IRB）批准的研究，旨在评估 ReadingQuizMaker 系统的可用性和实用性，特别是与自动问题生成方法相比，特别是其人工智能与人类协作系统。研究探讨了四个关键的研究问题：

1. **ReadingQuizMaker 的可用性**：确认了教师可以使用 ReadingQuizMaker 创建令人满意的问题。

2. **对 AI 建议的感知**：教师积极看待 AI 建议，认为它们有用且不会分散注意力，他们能够控制何时以及如何使用这些建议。他们采纳了大约 60%的 AI 生成的建议，这些建议通常为问题创建提供了有用的起点或灵感。

3. **与自动问题生成的比较**：研究发现，教师更倾向于 ReadingQuizMaker 的人工智能与人类协作方法，而不是自动问题生成方法。他们喜欢能够控制整个过程，确保问题与他们的教育目标一致。

4. **挑战和设计启示**：教师在创建干扰项和找到适当的问题引导方面遇到了挑战，有些难以使用缺乏上下文或不符合教学目标的自动问题。但他们也指出，该系统易于使用，有助于他们创建高质量的问题。

研究参与者赞赏快速创建有意义的问题的能力，并发现该系统支持他们的自然工作流程。研究得出结论，尽管教师有时会修改 AI 建议以使其更符合需求，但他们发现这些建议在问题创建过程中是有价值的辅助工具。该系统被设计用于与学习管理系统集成，允许问题用作形式性或总结性评估，或作为阅读指南以促进学习。
-->

Four key research questions:
1. **Usability of ReadingQuizMaker**: Instructors could use ReadingQuizMaker to create satisfactory questions.
2. **Perception of AI Suggestions**: Instructors perceived AI suggestions positively, finding them useful and not distracting, and they were able to control when and how to use these suggestions.
3. **Comparison with Automatic Question Generation**: The study found a strong preference among instructors for the **human-AI teaming approach of ReadingQuizMaker** over the automatic question generation approach.
4. **Challenges and Design Implications**: Instructors reported challenges in creating distractors and finding appropriate question stems.
---

# 6. Discussion

<!--
“讨论”部分讨论了在对 ReadingQuizMaker 进行评估研究之后可能的未来方向。

1. **ReadingQuizMaker 的积极反响**：参与者对该系统的反应非常积极，他们发现使用起来容易而直观。他们赞赏问题引导和 AI 建议，这些有助于他们创建高质量的问题。

2. **对人工智能与人类协作的偏好**：教师明显更倾向于 ReadingQuizMaker 的人工智能与人类协作方法，而不是完全自动化的问题生成。他们重视对问题创建过程的控制，而人工智能与人类协作方法提供了这种控制。

3. **挑战和未来方向**：论文识别了问题创建过程中仍然存在的一些挑战：
   - **发现和采用 AI 建议**：当 AI 建议可以在不需要额外用户操作的情况下轻松访问时，它们更有可能被采用。自动显示的释义建议比摘要和否定操作更常用。
   - **AI 输出的可视化和可解释性**：用户难以理解自然语言处理结果，特别是在摘要方面。论文建议需要更好的可视化技术，以帮助用户高效地感知自然语言处理结果。此外，解释模型生成结果的方式，尤其是对于否定模型，可以提高用户对 AI 建议的理解和控制。

4. **自动化与人工智能与人类协作方法的比较**：用户指出，自动生成的问题通常质量较低，因为人工智能难以识别重要内容，导致问题在逻辑上可能是正确的，但上下文不明确或不符合教育目标。

讨论强调了未来工作的需要，以增加 AI 输出的发现性、可视化性和可解释性，并继续探索用于教育内容创建的人工智能与人类协作方法。
-->

1. **Positive Reception of ReadingQuizMaker**
2. **Preference for Human-AI Collaboration**
3. **Challenges and Future Directions**: The paper identifies several challenges that remain in the question creation process:
    - **Discoverability and Adoption of AI Suggestions**
    - **Visualization and Explainability of AI Output**
4. **Automated versus Human-AI Collaborative Approach**

---

# 7. Limitation
<!--
论文中的“限制”部分概述了关于 ReadingQuizMaker 系统的限制和进一步研究的潜在领域。

1. **参与者样本较小**：研究承认参与者样本规模较小。计划进行未来研究，以更大的参与者群体来了解像 ReadingQuizMaker 这样的工具如何帮助问题创建，并观察随着时间的推移，对系统的信任和熟练程度的发展情况。

2. **节省时间的自我报告**：在评估过程中，用户被要求自行报告使用 ReadingQuizMaker 的节省时间方面。虽然这提供了有关系统采用潜力的见解，但需要进行更广泛的定量研究，以确定系统的节省时间效益。

3. **面向教师的评估研究**：研究的重点是从教师的角度评估 ReadingQuizMaker 的效用。需要进行更大规模的面向学生的实验，以确定生成的问题对学生的阅读理解和学习成果的影响。

这些限制突出了未来工作中需要改进和拓展的领域，以更好地了解 ReadingQuizMaker 系统的效果和效率，以及它在教育环境中的广泛适用性。
-->

1. **Small Participant Sample**
2. **Time-saving Self-reporting**
3. **Teacher-Facing Evaluation Study**


---

# 8. Conclusion

<!--
人工智能与人类的协作优于完全自动化。

出英语考试卷的老师们应该很喜欢这个工具

缺少源代码？光靠图片展示直观性不足, 要是有代码或者在线 demo 就好了
-->

- English exam
- source code? 

