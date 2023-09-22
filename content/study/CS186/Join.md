---
id: 20230915085135
title: Join
aliases:
  - SMJ
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

# Join Methods

- [[Simple Nested Loop Join]]
- [[Page Nested Loop Join]]
- [[Block Nested Loop Join]]
- [[Index Nested Loop Join]]
- [[Hash Join]]
- [[Sort-Merge Join]]

# Hash Join vs. Sort-Merge Join

Sorting pros:
- Goof if input already sorted, or need output sorted
- Not sensitive to data skew or bad hash functions

Hashing pros:
- For join: number of passes depends on size of smaller relation
	- E.g. if smaller relation is $<B$, naive/hybrid hashing is great
- Good if input already hashed, or need output hashed
