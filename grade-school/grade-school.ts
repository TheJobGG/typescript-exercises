interface Roster {
  [key: number]: string[];
}

export class GradeSchool {
  private listOfStudents: Roster = {};

  // Devolver la lista completa de estudiantes ordenados alfabéticamente por cada grado 
  roster(): Roster {
    let orderedList: Roster = {};
    Object.keys(this.listOfStudents).map((key) => {
      let intKey = Number(key)
      orderedList[intKey] = [...this.listOfStudents[intKey]].sort();
    });
    return orderedList;
  }

  // Añadir estudiante a la lista de alumnos dependiendo del grado asignado
  add(nameStudent: string, grade: number): void {
    const studentHasAlreadyAdded = Object.values(this.listOfStudents).some(students => students.includes(nameStudent))

    if (!studentHasAlreadyAdded) {
      // NO existe y se agrega
      this.addNewStudent(nameStudent, grade);
    } else {
      // Existe y es borrado de la lista
      Object.keys(this.listOfStudents).forEach(key => {
        let intKey = Number(key)
        const filteredArray = this.listOfStudents[intKey].filter(name => name !== nameStudent);
        this.listOfStudents[intKey] = filteredArray;
      });
      // es agregado al grado correspondiente
      this.addNewStudent(nameStudent, grade);
    }
  }

  private addNewStudent(nameStudent: string, grade: number) {
    try {
      this.listOfStudents[grade].push(nameStudent);
    } catch (error) {
      this.listOfStudents[grade] = [nameStudent];
    }
  }

  // Enlistar los estudiantes de un grado en específico
  grade(grade: number): string[] {

    if (this.listOfStudents[grade]) {
      return [...this.listOfStudents[grade]].sort();
    } else {
      return [];
    }
  }
}

/* const school = new GradeSchool();
school.add('Franklin', 5)
school.add('Raúl', 5)
school.add('Bradley', 2)
school.add('Joshua', 1)
school.add('Red', 4)
school.add('Petter', 2)
school.add('Julian', 4)
school.add('Doe', 4)
school.add('Doe', 2)
console.log(school.grade(5));
school.add('Franklin', 9)
const currentStudents = school.roster()
console.log(currentStudents);
console.log(school.grade(5)); */