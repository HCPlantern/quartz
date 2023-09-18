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
- That is, for each [[record]] $r_i$ in $R$, find all records $s_j$ in $S$ that match the join condition and write $< r_i,s_j$ as a new row in the output. All the fields of $r$ followed by all the fields of $s$. 

> [!hint] Notation Conventions
> -  $[T]$ is the number of [[Page|pages]] in table $T$
> - $\rho_T$ is the number of records on each [[page]] of $T$
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

# [[Page]] Nested Loop Join

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

# Index Nested Loop Join

- If we have an index on S that is on the field we are joining on, it can be very fast to look up matches of $r_i$ in S.

$$
\begin{align*}
\text{for each record } r_{i} \text{ in } R:\\
	\text{for each record } s_{j} \text{ in } S \text{ where } \theta(r_{i}, s_{j}) \text{==true}:&\text{yield } <r_{i}, s_{j}>
\end{align*}
$$

COST = $[R] + |R|\times \text{(cost to look up matching records in } S)$

# Hash Join

![](https://r2.hcplantern.top/2023/09/17/Snipaste_2023-09-18_16-29-39.png)

- Partitioning phase: We try to split R and S into partitions. Each partition has $R_{i}$ and $S_{i}$ (i.e. partition i of $R$ and partition i of $S$) and make sure either $R_{i}$ or $S_{i} \leq B-2$ [[Page|pages]]. If not, recursively do partition. 
	- Make sure records with same hash value are in the same partition.
- Build & Probe Phase: Load the *smaller* partition into memory and build an in-memory hash table. Perform a Naive Hash Join with the larger partition in the pair. 

I/O COST:
- First phase: read + write both relations
	- $2([R] + [S])$ I/Os
- Second phase: read both relations, forward output
	- $[R] + [S]$ I/Os
- Total cost of 2-pass hash join = $3([R] + [S])$

# Sort-Merge Join

- Sort $R$ and $S$ first. 
- Then perform tow pointer algorithm

COST = $\text{cost to sort } R + \text{ cost to sort } S+ ([R] + [S])$

## Optimization

- You can combine the last sorting phase with the merging phase, provided you have enough room in memory to allocate a [[page]] for each run of $[R]$ and for each run of $[S]$.
- The final merge pass is where you allocate a [[page]] for each run of $R$ and each run of S. In this process, you save $2 ∗ ([R] + [S])$ I/Os

# Hash Join vs. Sort-Merge Join

Sorting pros:
- Goof if input already sorted, or need output sorted
- Not sensitive to data skew or bad hash functions

Hashing pros:
- For join: number of passes depends on size of smaller relation
	- E.g. if smaller relation is $<B$, naive/hybrid hashing is great
- Good if input already hashed, or need output hashed
