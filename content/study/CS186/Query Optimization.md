---
id: 20230918170457
title: Query Optimization
aliases: 
date: 2023-09-18 17:04
draft: false
tags:
  - database
---
Query Optimization is all about finding the **query plan** that minimizes the number of I/Os it takes to execute the query.

# Introduction

We cannot know how many I/Os a plan will cost until it's executed. So:
1. Impossible to guarantee that we will find the optimal query plan. We can only hope to find a good one using **heuristics and estimations**
2. We need some way to estimate how much a query plan costs. 

# Selectivity Estimation

- Selectivity estimation is an approximation for what percentage of [[Page|pages]] will make it through the operator onto the operator above it.
- In other words, it determines how many of the input [[Page|pages]] will be included in the output of the operator in the data processing chain.