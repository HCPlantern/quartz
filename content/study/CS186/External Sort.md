---
id: 20230912142842
title: Database Sorting
aliases: 
date: 2023-09-12 14:28
draft: false
tags:
---
> [!question] Why database need external sort
> Because we cannot store all data from database in memory. 

- We can pretty much ignore traditional *big-O* measurement of the algorithm. Instead we use I/O counts. 
- When measuring I/Os, we **ignore cache hit**. 