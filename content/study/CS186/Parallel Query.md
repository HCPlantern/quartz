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

# Intra-Operator

## Data Partition

Assume we have multiple machines, how can we partition data into these individual machines? Introduce several partitioning methods:
- Range: Good for equijoins, range queries and group-by
- Hash: Good for equijoins, group-by
- Round-Robin: Good for spreading load

## Parallel Scans

We can do parallel scans on multiple machines:
- Simply scan in parallel and merge result as the ouput.
- $\sigma_{p}$ : If we use range or hash partitioning, we can skip entire sites that have no tuples satisfying $p$.
- We can build indexes at each partition

## Lookup by key

- If data partitioned on function of key (range and hash for example), we can only lookup the relevant node.
- Otherwise we have to broadcast lookup to all nodes.

## Insert a key

- Similarly, if data partitioned on function of key, we route the insert to relevant node.
- Else, route insert to any node is ok.

## Insert a unique key

- Data partitioned