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
	- Pipeline: 
	- Bushy (Tree): sub-tree uses pipeline
- Intra-Operator
	- 