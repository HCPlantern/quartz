---
id: 20230904190556
title: Record
aliases:
  - record
date: 2023-09-04 19:05
draft: false
tags:
  - database
---
A record refers to a single row or entry in a database table that contains information about a specific entity or object.
# Fixed Length Records

We can store fixed length records in two ways:
- **packed**: no gaps between records, record ID is location in page
- **unpacked**: allow gaps between records. The unpacked page use a bitmap to keep track of where the gaps are.
![](https://cdn.hcplantern.cn/img/2023/09/03/20230903-153104.png-default)

# Variable Length Records: Slotted Pages

Move **header to end of a page** to allow it to grow. It also stores number of slots and pointer to free space.

![](https://cdn.hcplantern.cn/img/2023/09/03/20230903-153208.png-default)

As the pic shows (left), deletion with unpacked layout could cause fragmentation.