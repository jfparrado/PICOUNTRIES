function SolveGraph(graph, start, end) {
  // Your code here:
}

module.exports = SolveGraph;

// function SolveGraph(graph, start, end, visited = []) {
//   // Your code here:
//   if (visited.includes(start)) return false;
//   visited.push(start);
//   console.log(visited);
//   console.log(start);
//   console.log(end);
//   /* if (graph[start].includes(end)) return true */
//   for (const vertex of graph[start]) {
//     if (vertex === end) return true;
//     console.log(vertex);
//     if (SolveGraph(graph, vertex, end, visited) === true) return true;
//   }
//   return false;
// }
// ​
// const graph = {
//   a: ["c"],
//   b: ["c"],
//   c: ["s", "r"],
//   d: ["a"],
//   s: ["a", "c"],
//   r: ["d"],
//   z: ["z"],
// };
// ​
// console.log(SolveGraph(graph, "a", "s")); //to.equal(true);
// ​
// console.log(SolveGraph(graph, "a", "d")); //to.equal(true);
// ​
// console.log(SolveGraph(graph, "s", "b")); //to.equal(false);
// ​
// module.exports = SolveGraph;
