const students = [
    {
      name: "João",
      firstGrade: 7,
      secondGrade: 9
    },
    {
      name: "Gabriel",
      firstGrade: 7,
      secondGrade: 5
    },
    {
      name: "Felipe",
      firstGrade: 5,
      secondGrade: 10
    },
    {
      name: "Pedro",
      firstGrade: 3,
      secondGrade: 1
    }
  ]
  
  function calcMean(firstgrade, secondgrade) {
    let mean = (firstgrade + secondgrade) / 2;
    return mean;
  }
  
  for (let student of students) {
    let mean = calcMean(student.firstGrade, student.secondGrade);
    if (mean >= 7) {
      alert(`A média do aluno(a) ${student.name} é ${mean}\nParabéns ${student.name}, você foi aprovado(a) no concurso!`)
    } else {
      alert(`A média do aluno(a) ${student.name} é ${mean}\nNão foi dessa vez ${student.name}, tente novamente!`)
    }
  }