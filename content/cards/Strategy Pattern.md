---
id: 20230920141205
title: Strategy Pattern
aliases:
  - 策略模式
date: 2023-09-20 14:12
draft: false
tags:
  - software-design
---
# Introduction

- 策略模式是对 `if/else` 的解耦
- 策略模式是一种**行为型模式**，他将相似的行为解耦，并且将**策略**封装到具体的**策略实现类**。

![](https://cdn.hcplantern.cn/img/202205241725716.png)

策略模式使用的场景：
- 代码中出现大量的 `if/else` 且只是行为不同
- 策略内容过于复杂

# Factory for Strategy Pattern

