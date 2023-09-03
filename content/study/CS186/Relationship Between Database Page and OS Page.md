---
id: 20230903222755
title: 数据库页与OS页的关系
aliases: []
date: 2023-09-03 22:27
draft: false
tags:
  - database
  - os
---
> [!cite]
 > # [What is the relation between MySQL pages and Operating system pages?](https://dba.stackexchange.com/questions/224969/what-is-the-relation-between-mysql-pages-and-operating-system-pages)
 
 - page in OS memory means **part of virtual memory**. It may reside on disk 'cause this block of virtual memory is not being used, so it's not loaded into main memory now;
 - page in MySQL means **part of MySQL items of a table**. It may reside on disk 'cause this block of items is not being used, so it's not loaded into main memory now;

They are different things (**virtual memory vs. MySQL items**), thus one can not rely on the other.

 They are similar because they use similar concepts:
 - use page to represent the resources they manage
 - use similar algorithm (eg: LRU) to swap out page;

etc.

Indeed, despite of so called page, **page cache or disk cache looks much more like MySQL buffer pool**. They are all caches for parts of disk files to accelerate data read and write. They both have to consider dirty page and write them back to disk when flushing data out of main memory.