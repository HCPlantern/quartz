---
id: 20230922101853
title: Sort-Merge Join
aliases:
  - SMJ
date: 2023-09-22 10:18
draft: false
tags:
  - database
---


- Sort $R$ and $S$ first. 
- Then perform tow pointer algorithm

COST = $\text{cost to sort } R + \text{ cost to sort } S+ ([R] + [S])$

## Optimization

- You can combine the last sorting phase with the merging phase, provided you have enough room in memory to allocate a [[page]] for each run of $[R]$ and for each run of $[S]$.
- The final merge pass is where you allocate a [[page]] for each run of $R$ and each run of S. In this process, you save $2 ∗ ([R] + [S])$ I/Os