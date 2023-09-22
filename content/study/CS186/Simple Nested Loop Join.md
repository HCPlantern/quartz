---
id: 20230922101900
title: Simple Nested Loop Join
aliases:
  - SNLJ
date: 2023-09-22 10:19
draft: false
tags:
  - database
---

$$
\begin{align*} 
\text{for each record} \ r_i \ \text{in R:} \\
\text{for each record} \ s_{j}\ \text{in S:} \\
\text{if} \ \theta(r_{i},s_{j} ):& \text{yield} \ <r_{i},s_{j}> \\
\end{align*} 
$$

COST = $[R] + \boldsymbol{|R|}[S]$