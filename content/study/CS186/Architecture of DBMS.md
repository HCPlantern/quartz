---
id: 20230903114552
title: Architecture of DBMS
aliases:
  - 数据库系统的架构
date: 2023-09-03 11:45
draft: false
tags:
  - database
---

- Organized in layers, and each layer abstracts the layer below (just like TCP/IP)
- Many non-relational DBMSs are structured similarly

![](https://cdn.hcplantern.cn/img/2023/09/03/20230903-115204.png-default)

## Disk Space Management

Disk Space Manager manages reads and writes [[page]] to physical disk/files. Higher levels call upon this layer to read/write a [[page]] and allocate/de-allocate logical [[Page|pages]].

It's purposes are: 
- Map [[Page|pages]] to locations on disk
- Load [[Page|pages]] from disk to memory
- Save [[Page|pages]] back to disk & ensuring writes

## [[Buffer Management]]

Higher levels of database only operate in memory.
## Files and Index Management

See: [[B+ Tree]]

# [[Relational Algebra|Relational Operators]]

See: [[Relational Algebra]]

# Query Parsing and Optimization

![](https://r2.hcplantern.top/2023/09/17/Snipaste_2023-09-18_17-00-03.png)

