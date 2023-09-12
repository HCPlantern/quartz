---
id: 20230912153521
title: Full External Sort
aliases: 
date: 2023-09-12 15:35
draft: false
tags:
  - database
  - algorithm
---
Unlike [[Tow Way External Merge Sort]] where only 2 pages are merged during one sorted run, Full External Sort load pages into buffer as many as possible. 

![]( https://pica.zhimg.com/v2-9a42e848a45ff33e93569c2df8a88168_720w.jpg?source=d16d100b ) 


Say we have $B$ buffer pages. We have optimizations compared to [[Tow Way External Merge Sort]]: 
- Load $B$ pages in to buffer and sort them all at once. 
- Merge $B -1$ sorted runs because we should take 1 buffer as ouput. 

I/O cost: 
- Number of passes: $1 + \lceil log_{B-1}{\lceil N / B \rceil} \rceil$ 
- Total I/Os = (I/Os per pass) $\times$ (# of passes) = $2N(1 + \lceil log_{B-1}{\lceil N / B \rceil} \rceil)$
