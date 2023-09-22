---
id: 20230922111408
title: Naive Hash Join
aliases: []
date: 2023-09-22 11:14
draft: false
tags:
  - database
---
Naive Hash Join performs an in-memory hash table build and then join.

Prerequisite: Relation $R$ can fit into memory (that is, having $R \text{ being } \leq B-2 \text{ pages big}$). And this often not going to be possible, so solution is [[Grace Hash Join]].

It's basic idea is that we read all [[Page|pages]] of relation $R$, building an in-memory hash table, and then read in each records of $S$ to look it up in $R's$ table. 