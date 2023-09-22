---
id: 20230922101713
title: Index Nested Loop Join
aliases: 
date: 2023-09-22 10:17
draft: false
tags:
  - database
---



- If we have an index on S that is on the field we are joining on, it can be very fast to look up matches of $r_i$ in S.

$$
\begin{align*}
\text{for each record } r_{i} \text{ in } R:\\
	\text{for each record } s_{j} \text{ in } S \text{ where } \theta(r_{i}, s_{j}) \text{==true}:&\text{yield } <r_{i}, s_{j}>
\end{align*}
$$

COST = $[R] + |R|\times \text{(cost to look up matching records in } S)$