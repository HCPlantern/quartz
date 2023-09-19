---
id: 20230918172313
title: Parallel Query
aliases: 
date: 2023-09-18 17:23
draft: false
tags:
  - database
---


# Kinds of Query Parallelism

## Inter-Query

Multiple SQL queries runs in parallel.

## Intra-Query

- Inter-Operator
   - Pipeline
	- Bushy (Tree): Sub-tree uses pipeline. Between sub-trees runs in parallel. 
 
| Pipeline | Bushy (Tree) |
| -------- | ------------ |
| ![](https://r2.hcplantern.top/2023/09/17/Snipaste_2023-09-19_14-32-09.png)         |  ![](https://r2.hcplantern.top/2023/09/17/Snipaste_2023-09-19_14-34-41.png)            |

- Intra-Operator
	- Single query runs in parallel by partitioning. ![](https://r2.hcplantern.top/2023/09/17/Snipaste_2023-09-19_14-40-29.png)