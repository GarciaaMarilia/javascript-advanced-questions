// Contador Simples:
// Crie uma função chamada createCounter que retorna outra função que, quando chamada, incrementa e retorna um contador interno.
// Esse contador deve ser mantido em uma variável privada dentro de createCounter.

function createCounter() {
 let count = 0;
 return function () {
  count++;
  return count;
 };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Recorde de Pontuação:
// Escreva uma função scoreRecord que cria um registro de pontuação.
// A função deve retornar dois métodos: addScore, que adiciona uma nova pontuação, e highestScore, que retorna a pontuação mais alta registrada até o momento.
// Use uma closure para manter o histórico de pontuações privado.
function scoreRecord() {
 let scores = [];
 return {
  addScore(score) {
   scores.push(score);
  },
  highestScore() {
   return Math.max(...scores);
  },
 };
}

const record = scoreRecord();
record.addScore(50);
record.addScore(80);
record.addScore(20);
console.log(record.highestScore()); // 80

// Lista de Tarefas
// Crie uma função createTaskManager que retorna um objeto com dois métodos: addTask e showTasks
// addTask adiciona uma nova tarefa (string) a uma lista privada, e showTasks exibe todas as tarefas até o momento.

function createTaskManager() {
 let tasks = [];
 return {
  addTask(task) {
   tasks.push(task);
  },
  showTasks() {
   return tasks;
  },
 };
}

const taskManager = createTaskManager();
taskManager.addTask("Learn closures");
taskManager.addTask("Practice JavaScript");
console.log(taskManager.showTasks()); // ["Learn closures", "Practice JavaScript"]

// Banco de Dados de Usuários:
// Desenvolva uma função userDatabase que retorna uma closure para adicionar e verificar informações de usuário de forma privada.
// A função deve permitir adicionar um usuário (addUser) e verificar se um usuário existe (userExists), usando o nome do usuário como referência.

function userDatabase() {
 let users = new Set(); // Adicione user de modo privado
 return {
  addUser(user) {
   users.add(user);
  },
  userExists(user) {
   return users.has(user);
  },
 };
}

const db = userDatabase();
db.addUser("Alice");
db.addUser("Bob");
console.log(db.userExists("Alice")); // true
console.log(db.userExists("Charlie")); // false

// Cronômetro de Temporização:
// Crie uma função timer que retorna duas closures: start para iniciar o cronômetro e elapsedTime para verificar o tempo decorrido desde o início.
// Use Date.now() para medir o tempo.

function timer() {
 let startTime = 0;
 return {
  start() {
   startTime = Date.now();
  },
  elapsedTime() {
   return Date.now() - startTime;
  },
 };
}

const myTimer = timer();
myTimer.start();
setTimeout(() => {
 console.log(myTimer.elapsedTime()); // exibe o tempo decorrido em ms
}, 2000);
