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
\text{if} \ \theta(r_{i},s_{j} ):& \text{yield} \ <r_{i},s_{j}> \\
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
\text{if } \theta (r_{i}, s_{j}):& \text{yield } <r_{i}, s_{j}>
\end{align*}
$$

COST = $[R] + \boldsymbol{[R]}[S]$

# Block Nested Loop Join

- We can fully utilize our $B$ buffer pages rather than 3 pages used in [[Join#Page Nested Loop Join|PNLJ]] where one for $R$, one for $S$ and one for the output buffer. 
- We want to reserve as many pages as possible, that is, read $B-2$ pages of $R$ (this is a chunk of R) at a time and iterate through pages of $S$.

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

# Index Nested Loop Join

- If we have an index on S that is on the field we are joining on, it can be very fast to look up matches of $r_i$ in S.

$$
\begin{align*}
\text{for each record } r_{i} \text{ in } R:\\
	\text{for each record } s_{j} \text{ in } S \text{ where } \theta(r_{i}, s_{j}) \text{==true}:&\text{yield } <r_{i}, s_{j}>
\end{align*}
$$

COST = $[R] + |R|\ast$(cost to look up matching records in $S$)

# Hash Join

