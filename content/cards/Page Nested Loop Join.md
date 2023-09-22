---
id: 20230922101646
title: Page Nested Loop Join
aliases: 
date: 2023-09-22 10:16
draft: false
tags:
  - database
---



$$
\begin{align*}
\text{for each page }p_{r} \text{ in }R: \\
\text{for each page }p_{s} \text{ in } S: \\
\text{for each record } r_{i} \text{ in } p_{r}: \\
\text{for each record } s_{j} \text{ in } p_{s}: \\
\text{if } \theta (r_{i}, s_{j}):& \text{yield } <r_{i}, s_{j}>
\end{align*}
$$

COST = $[R] + \boldsymbol{[R]}[S]$

PNLJ is a special case of [[Join#Block Nested Loop Join||BNLJ]] with $B = 3$.