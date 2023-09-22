---
id: 20230922101731
title: Block Nested Loop Join
aliases: 
date: 2023-09-22 10:17
draft: false
tags:
  - database
---

- We can fully utilize our $B$ buffer [[Page|pages]] rather than 3 [[Page|pages]] used in [[Join#Page Nested Loop Join|PNLJ]] where one for $R$, one for $S$ and one for the output buffer. 
- We want to reserve as many pages as possible, that is, read $B-2$ [[Page|pages]] of $R$ (this is a chunk of R) at a time and iterate through [[Page|pages]] of $S$.

$$
\begin{align*}
\text{for each block of } B-2 \text{ pages } B_{r} \text{ in } R:\\
\text{for each page } p_{s} \text{ in } S:\\
\text{for each record } r_{i} \text{ in } B_r:\\
\text{for each record } s_{j} \text{ in } p_s:\\
\text{if } \theta(r_{i}, s_{j}):& \text{yield } <r_{i}, s_{j}> 
\end{align*}
$$


COST= $[R] + \lceil{\frac{[R]}{B-2}\rceil [S]}$