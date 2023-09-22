---
id: 20230922111408
title: Naive Hash Join
aliases:
  - Simple Hash Join
date: 2023-09-22 11:14
draft: false
tags:
  - database
---
Naive Hash Join (also Simple Hash Join) performs a single pass of partitioning on only left records. 

Prerequisite: Relation $R$ can fit into memory (that is, having $R \text{ being } \leq B-2 \text{ pages big}$)

It's basic idea is that we read all pages of relation $R$, building an in-memory hash table, and then read in each records of $S$ to look it up in $R's$ table. 