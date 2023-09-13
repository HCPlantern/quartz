---
id: 20230912164912
title: External Hash
aliases:
  - out-of-core hashing
date: 2023-09-12 16:49
draft: false
tags:
  - database
  - algorithm
---
External Hash is all about building an efficient **out-of-core hashing algorithm**. Still use Divide and Conquer.

# Divide

- Divide part is a stream process, classifying all pages into partitions.
- Partition is a set of pages such that the values on the pages have same hash value. 

- Suppose we have $B$ memory buffers. Take 1 buffer as the $INPUT$, send page values to the hash function $h_p$ so that they will be put in partitions based upon its hash value.
- Among these $B-1$ partitions, if one partition's size exceeds the capacity of B pages (equivalent to the size of memory), we should recursively divide this partition using a different hash function distinct from $h_p$ until it can fit entirely in memory.

![](https://r2.hcplantern.top/2023/09/10/Snipaste_2023-09-13_14-19-22.png)

# Conquer

Then we just build a hashtable for each partition and write back to disk. 

![](https://r2.hcplantern.top/2023/09/10/Snipaste_2023-09-13_15-32-09.png)


# Cost

The cost of hashing varies depending on the specific circumstances, such as different memory sizes and partition sizes, which can result in varying costs.

> [!example] Example
> > [!question] How many IOs does it take to hash a 500 page table with B = 10 buffer pages? Assume that we use perfect hash functions.
> - The first partitioning pass divides the 500 pages into 9 partitions. This means that each partition will have $\frac{500}{9}=55.6 \Longrightarrow 56$ pages of data. We had to read in the 500 original pages, but we have to write out a total of $56 \times 9 = 504$ because each partition has 56 pages and there are 9 partitions. The total number of IOs for this pass is therefore $500 + 504 = 1004$ .
> - We cannot fit any partition into memory because they all have 56 pages, so we need to recursively partition all of them. On the next partitioning pass each partition will be divided into 9 new partitions (so $9 \times 9 = 81$  total partitions) with $\frac{56}{9} = 6.22 \Longrightarrow 7$  pages each. This pass needed to read in the 504 pages from the previous pass and write out $81 \times 7 = 567$ pages for a total of $1071 \ IOs$ .
> - Now each partition is small enough to fit into memory. The final conquer pass will read in each partition from the previous pass and write it back out to build the hash table. This means every page from the previous pass is read and written once for a total of $567 + 567 = 1134 \ IOs$ .
> - Adding up the IOs from each pass gives a total of $1004 + 1071 + 1134 = 3209 \ IOs$ .




