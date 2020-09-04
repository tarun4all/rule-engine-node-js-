const brain = require("brain.js")

const net = new brain.NeuralNetwork();

net.train([
  { input: { healthScore: 25, asessment: 40, profile: 10 }, output: { diabetic: 1 } },
  { input: { healthScore: 55, asessment: 10, profile: 40 }, output: { physio: 1 } },
  { input: { healthScore: 35, asessment: 60, profile: 70 }, output: { gynae: 1 } },
  { input: { healthScore: 15, asessment: 50, profile: 10 }, output: { abc: 1 } },
], {
  iterations: 200000,
  errorThresh: 0.005,
  log: true,
  logPeriod: 10,
  learningRate: 0.3,
});

const output = net.run({ healthScore: 25, asessment: 40, profile: 10 });

console.log(output);