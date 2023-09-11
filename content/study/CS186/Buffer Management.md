---
id: 20230904193026
title: Buffer Management
aliases:
  - 缓冲区管理
date: 2023-09-04 19:30
draft: false
tags:
  - database
---
![](https://pic1.zhimg.com/v2-925bb28c90d0e51af03ce09418bccbc8_r.jpg)

# Introduction

Buffer management is responsible for managing [[Page|pages]] in memory and process requests from the file and index manager.

Given the limited memory space available, it's imperative that we cannot retain all [[Page|pages]] within the buffer pool. Therefore, the buffer manager must employ an eviction policy to determine which [[Page|pages]] to remove when the space is exhausted. When [[Page|pages]] are evicted or new ones are loaded into memory, the buffer manager interacts with the disk space manager to execute the necessary disk operations.

![](https://pic1.zhimg.com/v2-9aaae366a1f439e7eb6d27e08737f9b4_b.jpg)

# Buffer Pool

- Memory is partitioned into frames so that buffer pool is built. 
- A buffer frame can hold exactly one [[page]]. 
## Metadata Table

- Buffer Pool has additional space for a  metadata table

![](https://pic2.zhimg.com/v2-1238fef5cecbff72636b49aadc80031d_b.jpg)

- Frame ID: uniquely associated with a memory address
- [[Page]] ID: which [[page]] a frame currently contains
- Dirty Bit: whether or not a [[page]] has been modified
- Pin Count: number of requestors currently using this [[page]]

## Handle Page Requests

Basically same as OS memory management. 

# Replacement Policy

- LRU Replacement: evict the least recently used unpinned page
	- need a **last used column** in the metadata table. update the column with time at which pin count is decremented.
	- performance suffers when $S$ pages are accessed repeatedly, where $S \gt$ buffer pool size
- Clock Replacement: treats the metadata table as a circular list of frames. 
- MRU Replacement: evict the most recently used unpinned page, contrasting with LRU
	- great when $S$ > buffer pool size (as opposed to LRU senario mentioned above)
