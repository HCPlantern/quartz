---
id: 20230903223509
title: B+ Tree
aliases:
  - B+ 树
  - b+ tree
date: 2023-09-03 22:35
draft: false
tags:
  - database
---
B+ 树是一种数据结构, 索引的具体实现. 一个例子: 

![B+ tree example with d=1](https://cdn.hcplantern.cn/img/2023/09/04/20230904-174851.png-default)

另一个例子:

![](https://cdn.hcplantern.cn/img/2023/09/04/20230904-180559.png-default)

# Properties

- order: 用 $d$ 表示. 每个 node 必须满足拥有 $d \leq x \leq 2d$ 个 entries
	- 不适用于 root node
	- 如果发生删除, leaf nodes 可能会有 $\lt d$ 个 entries
- pointer (fanout): 每个 entry 之间, 有 pointer 指向 child node. 因此每个 note 最多有 $2d+1$ 个 pointer
- sorted: 每个 node 的 keys 是有序的
- entry key 大于左边子节点的所有 keys, 小于等于右边子节点所有 keys.
	- order $d=2$ tree example:
	- ![](https://cdn.hcplantern.cn/img/2023/09/04/20230904-180133.png-default)
- 每一个 entry 对应一个 [[Page|page]]
- 只有 leaf nodes 才存放数据. 一般存放 [[Page|data page]] or pointers to [[Storage of DBMS#Record|records]]

# Insertion

![gif from wiki]( https://upload.wikimedia.org/wikipedia/commons/d/d6/B%2B_Tree_insertion_visualization.gif )

# Deletion

只需删除 leaf node, 在 inner node 中的已有 node 不用删除. 

> [!tip] 
> inner node 数据仅用于搜索, 并不持有数据, 因此不删除其中的 key. 

# Storing Records

There are three ways of storing records in leaves.

## Alternative 1

**Leaf pages are the [[Page|data pages]].** Rather than containing pointers to records, the leaf pages contain the records themselves.

![](https://cdn.hcplantern.cn/img/2023/09/04/20230904-190339.png-default)


## Alternative 2

**Leaf pages hold pointers to the corresponding records.**

![](https://cdn.hcplantern.cn/img/2023/09/04/20230904-190542.png-default)

## Alternative 3

**Leaf pages hold *lists of pointers* to the corresponding records.** 相比上一种, 遇到相同 entry 时存储方式更加简洁紧凑. 

![](https://cdn.hcplantern.cn/img/2023/09/04/20230904-191053.png-default)

# Clustered

聚簇索引 / 非聚簇索引
- 在非聚集索引中, 需要为需要的每个记录读取单独的页; 
- 在聚簇索引中, 键与数据的顺序大致相同

![](https://cdn.hcplantern.cn/img/2023/09/04/20230904-191955.png-default)

**一个数据表只有一个聚集索引**

## MySQL 实现

> [!cite] 
> [从数据页的角度看 B+ 树 | 小林coding (xiaolincoding.com)](https://xiaolincoding.com/mysql/index/page.html#%E8%81%9A%E7%B0%87%E7%B4%A2%E5%BC%95%E5%92%8C%E4%BA%8C%E7%BA%A7%E7%B4%A2%E5%BC%95)

在 MySQL 中, 聚簇索引和非聚簇索引 (二级索引) 区别就在于叶子节点存放的是什么数据: 
- 聚簇索引的叶子节点存放的是实际数据, 所有完整的用户记录都存放在聚簇索引的叶子节点; 
- 二级索引的叶子节点存放的是主键值, 而不是实际数据. 

![](https://cdn.hcplantern.cn/img/2023/09/04/20230904-192519.png-default)

如果某个查询语句使用了二级索引, 但是查询的数据不是主键值, 这时在二级索引找到主键值后, 需要去聚簇索引中获得数据行, 这个过程就叫作「**回表**」, 也就是说要查两个 B+ 树. 