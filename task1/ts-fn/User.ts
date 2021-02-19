export class User {
  name: string;
  surname: string;
  gender: string;
  nationality: string;
  age: number;
  email: string;

  constructor(userResponse: any, randomAge: Function) {
    (this.name = userResponse.name.first),
      (this.surname = userResponse.name.last),
      (this.gender = userResponse.gender),
      (this.nationality = userResponse.nat);
    this.age = randomAge();
    this.email = `${this.name}${this.surname}@example.com`;
  }
}
