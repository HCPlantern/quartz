---
id: 20230915085135
title: Join
aliases: 
date: 2023-09-15 08:51
draft: false
tags:
  - database
---
# Introduction

What is a join? 
- Take tow relations $R, S$, and create one new relation out of their matches on the join condition.
- That is, for each record $r_i$ in $R$, find all records $s_j$ in $S$ that match the join condition and write $< r_i,s_j$ as a new row in the output. All the fields of $r$ followed by all the fields of $s$. 

> [!hint] Notation Conventions
> -  $[T]$ is the number of pages in table $T$
> - $\rho_T$ is the number of records on each page of $T$
> - $|T|$ is the total number of records in table $T$
> - $|T| = [T] \times \rho_T$

# Simple Nested Loop Join

$$
\begin{align*} 
\text{for each record} \ r_i \ \text{in R:} \\
\text{for each record} \ s_{j}\ \text{in S:} \\
\text{if} \ \theta(r_{i},s_{j} ): \text{yield} \ <r_{i},s_{j}> \\
\end{align*} 
$$

COST = $[R] + \boldsymbol{|R|}[S]$

# Page Nested Loop Join

$$
\begin{align*}
\text{for each page }p_{r} \text{ in }R: \\
\text{for each page }p_{s} \text{ in } S: \\
\text{for each record } r_{i} \text{ in } p_{r}: \\
\text{for each record } s_{j} \text{ in } p_{s}: \\
\text{if } \theta (r_{i}, s_{j}): \text{yield } <r_{i}, s_{j}>
\end{align*}
$$
COST = $[R] + \boldsymbol{[R]}[S]$
