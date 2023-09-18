---
id: 20230911142003
title: Relational Algebra
aliases: []
date: 2023-09-11 14:20
draft: false
tags:
  - database
---
![](https://r2.hcplantern.top/2023/09/17/Snipaste_2023-09-18_16-48-25.png)


# Introduction

- SQL is a **declarative programming language**.
- Relational Algebra is a more expressive language, a **procedural programming language**
	- meaning the query specifies exactly what operators to use and in what order
 - Relation are **sets** of tuples (does not allow replication) 

All of the operations in relational algebra take in a relation and output a relation.

# Projection $(\pi)$

$\pi_{name}(dogs)$ means `SELECT name FROM dogs`

The input parameters specify which tables to pull (like `FROM` key word)

# Selection $(\sigma)$

Selection is used to filter rows, equivalent to SQL's `WHERE` clause.

Both 

$$\sigma_{age=12}(\pi_{name, age}(dogs))$$

and 

$$\pi_{name, age}(\sigma_{age=12}(dogs))$$

are equivalent to 

```sql
SELECT name, age FROM dogs WHERE age = 12 AND name='Timmy';
```

# Union $(\cup)$

Same as SQL's `UNION`. For example: $\pi_{name}(dogs) \cup \pi_{name}(cats)$

> [!fail] When union fails
> - union 2-column-relation with 1-column-relation (columns number not match)
> - union string column with int column (columns type not match)

# Set Difference $(-)$

Same as SQL's `EXCEPT`, $\pi_{name}(dogs) - \pi_{name}(cats)$

# Intersection $(\cap)$ 

Same as SQL's `INTERSECT` operator, $\pi_{name}(dogs) \cap \pi_{name}(cats)$

# Cross Product $(\times)$ 

Perform a Cartesian product like the same in SQL.

# Joins $(\bowtie)$

Put join condition in the subscript and put right operator on the right side. 

- Theta Join $(\bowtie_{\theta})$ : inner join. The $\theta$ refers to the join condition. 
- Natural join $(\bowtie)$
-  Example:  $cats \bowtie_{cats. name=dogs. name} dogs$
    - This is a natural join, so to simplify:  $cats \bowtie dogs$

> [!tip] Derived from cross product
> Theta joins and natural joins are derived from cross product and conjunction of selections
> For example: 
> 
> $cats \bowtie_{\theta}$
> can be rewritten as
> $\sigma_{\theta}(cats \times dogs)$
>
> and natural join $cats \bowtie dogs$ can be rewritten as
> 
> $\sigma_{cats.col1=dogs.col1 \land \dots \land cats.colN=dogs.colN}(cats \times dogs)$ 

# Rename $(\rho)$

The **rename operator** essentially accomplishes the same thing as aliasing in SQL. 

$cats \bowtie_{name=dname} (\rho_{name \to dname}(dogs))$: Renames the dogs relation's name column to $dname$ first, so there's no conflict in column names. 

# Group By / Aggregation $(\gamma)$

`SELECT age, SUM(weight) FROM dogs GROUP BY age HAVING COUNT(*) > 5;`

can be expressed as: 

$\gamma_{age, SUM(weight), COUNT(*) \gt 5}(dogs)$


