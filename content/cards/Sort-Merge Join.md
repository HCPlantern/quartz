# Sort-Merge Join

- Sort $R$ and $S$ first. 
- Then perform tow pointer algorithm

COST = $\text{cost to sort } R + \text{ cost to sort } S+ ([R] + [S])$

## Optimization

- You can combine the last sorting phase with the merging phase, provided you have enough room in memory to allocate a [[page]] for each run of $[R]$ and for each run of $[S]$.
- The final merge pass is where you allocate a [[page]] for each run of $R$ and each run of S. In this process, you save $2 ∗ ([R] + [S])$ I/Os