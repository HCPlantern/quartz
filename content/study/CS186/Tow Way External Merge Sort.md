---
id: 20230912153512
title: Tow Way External Merge Sort
aliases: 
date: 2023-09-12 15:35
draft: false
tags:
  - database
  - algorithm
---
Similar to merge sort, but we perform sorting on [[Page|pages]].

> [!important] Divide and Conquer idea
> - Divide: Take [[page]] as the sorting unit.
> - Conquer: Merge tow sorted [[Page|pages]] into a sorted sequence of [[Page|pages]]

![](https://pic1.zhimg.com/v2-fba9e60cdb13bc2673a542bf2fe4be20_b.jpg)

- The I/O cost $= 2N \times passes$ (for every pass we need read and write one page)
	- $passes = \lceil log_2N \rceil + 1$
	- So total cost $= 2N (\lceil log_2N \rceil + 1)$
