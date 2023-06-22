const passed = true;
const noPassed = false;

function testHeight(gender, height) {
  if (gender == "male" && height >= 1.7) {
    return passed;
  } else if (gender == "female" && height >= 1.6) {
    return passed;
  }
  return noPassed;
}

function testBar(gender, barReps, barSeconds) {
  if (gender == "male" && barReps >= 6 && barSeconds >= 14) {
    return passed;
  } else if (gender == "female" && barReps >= 5 && barSeconds >= 12) {
    return passed;
  }
  return noPassed;
}

function testRun(gender, runDistance, runTime) {
  if (
    gender == "male" &&
    ((runDistance >= 3000 && runTime <= 720) ||
      (runDistance >= 5000 && runTime <= 1200))
  ) {
    return passed;
  } else if (
    gender == "female" &&
    ((runDistance >= 4000 && runTime <= 900) ||
      (runDistance >= 6000 && runTime <= 1320))
  ) {
    return passed;
  }
  return noPassed;
}

function testAbs(abs) {
  if (abs >= 41) {
    return passed;
  }
  return noPassed;
}

function testSwim(swimDistance, swimTime, diveTime) {
  if (swimDistance >= 100 && swimTime <= 60) {
    return passed;
  } else if (diveTime <= 30) {
    return passed;
  }
  return noPassed;
}

function areCandidateResultsValid(
  gender,
  height,
  barReps,
  barSeconds,
  abs,
  runDistance,
  runTime,
  swimDistance,
  swimTime,
  diveTime
) {
  return (
    testHeight(gender, height) &&
    testBar(gender, barReps, barSeconds) &&
    testAbs(abs) &&
    testRun(gender, runDistance, runTime) &&
    testSwim(swimDistance, swimTime, diveTime)
  );
}

function showMessage(message) {
  console.log(message.toUpperCase());
}

// Chamando a função com os parametros recebidos via script de teste
// e atribuindo a variavel que devera ser mostrada no console
const areCandidateValid = areCandidateResultsValid(
  process.argv[2], // Genero
  process.argv[3], // Altura
  process.argv[4], // Repetições de barra
  process.argv[5], // Tempo de barra em segundos
  process.argv[6], // Abdominais
  process.argv[7], // Distancia percorrida em metros
  process.argv[8], // Tempo total da corrida em segundos
  process.argv[9], // Distancia do nado em metros
  process.argv[10], // Tempo total de nado em segundos
  process.argv[11] // Tempo total de mergulho em segundos
);

// Chame aqui a função que mostra o resultado no console
if (areCandidateValid) {
  showMessage("true");
} else {
  showMessage("false");
}
