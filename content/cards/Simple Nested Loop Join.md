# Simple Nested Loop Join

$$
\begin{align*} 
\text{for each record} \ r_i \ \text{in R:} \\
\text{for each record} \ s_{j}\ \text{in S:} \\
\text{if} \ \theta(r_{i},s_{j} ):& \text{yield} \ <r_{i},s_{j}> \\
\end{align*} 
$$

COST = $[R] + \boldsymbol{|R|}[S]$