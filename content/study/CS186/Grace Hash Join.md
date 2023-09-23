---
id: 20230922111423
title: Grace Hash Join
aliases: 
date: 2023-09-22 11:14
draft: false
tags:
  - database
---

![](https://r2.hcplantern.top/2023/09/17/Snipaste_2023-09-18_16-29-39.png)

- Partitioning phase: We try to split R and S into partitions. Each partition has $R_{i}$ and $S_{i}$ (i.e. partition i of $R$ and partition i of $S$) and make sure either $R_{i}$ or $S_{i} \leq B-2$ [[Page|pages]]. If not, recursively do partition. 
	- Make sure records with same hash value are in the same partition.
- Build & Probe Phase: Load the *smaller* partition into memory and build an in-memory hash table. Perform a [[Naive Hash Join]] with the larger partition in the pair. 

I/O COST:
- First phase: read + write both relations
	- $2([R] + [S])$ I/Os
- Second phase: read both relations, forward output
	- $[R] + [S]$ I/Os
- Total cost of 2-pass hash join = $3([R] + [S])$