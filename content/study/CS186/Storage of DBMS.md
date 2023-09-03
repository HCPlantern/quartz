---
id: 20230903145534
title: Storage of DBMS
aliases:
  - 数据库存储结构
date: 2023-09-03 14:55
draft: false
tags:
  - database
---
Tables are stored as logical files consisting of pages. Each page contains a collection of records.
> [!info] Storage Structure
> ![](https://cdn.hcplantern.cn/img/2023/09/03/20230903-145712.png-default)

## Table

One database have many tables.

## File

There are two main types of files: **Heap Files and Sorted Files**. For each relation, the database chooses which file type to use based on the I/O cost (*read or write page once = 1 I/O*) of the relation's access pattern.

### Heap File

Linked List Implementation:

![](https://cdn.hcplantern.cn/img/2023/09/03/20230903-153817.png-default)

Page Directory Implementation:

Each header page contains a pointer (byte offset) to the next header page, and its entries contain both a pointer to a data page and the amount of free space left within that data page.

![](https://cdn.hcplantern.cn/img/2023/09/03/20230903-154448.png-default)

**The main advantage of Page Directories over Linked Lists is that inserting records is often faster.** 
> [!example]  
> Consider the following example where a heap file is implemented as both a Linked List and a Page Directory. Each page is 30 bytes and a 20 byte record is being inserted into the file:
> Linked List: 
> ![](https://cdn.hcplantern.cn/img/2023/09/03/20230903-154801.png-default)
> 
> Page Directory: 
> ![](https://cdn.hcplantern.cn/img/2023/09/03/20230903-154825.png-default)


### Sorted File

**A sorted file is a file type where pages are ordered and records within each page are sorted by key (s).**

Inserted record could potentially cause all later records to be pushed back by one.

![](https://cdn.hcplantern.cn/img/2023/09/03/20230903-221300.png-default)

## Page

Pages are managed in memory by **buffer manager** or managed on disk by the **disk space manager**. Unit of accesses to physical disk is the page.





### Page header

Header used to keep track of records in the page. 
> [!info] Header may contain fields: 
> - Number of records in the page
> - Pointer to segment of free space in the page
> - Bitmap indicating which parts of the page are in use
## Record

### Fixed Length Records

We can store fixed length records in two ways:
- **packed**: no gaps between records, record ID is location in page
- **unpacked**: allow gaps between records. The unpacked page use a bitmap to keep track of where the gaps are.
![](https://cdn.hcplantern.cn/img/2023/09/03/20230903-153104.png-default)

### Variable Length Records: Slotted Pages

Move **header to end of a page** to allow it to grow. It also stores number of slots and pointer to free space.

![](https://cdn.hcplantern.cn/img/2023/09/03/20230903-153208.png-default)

As the pic shows (left), deletion with unpacked layout could cause fragmentation.