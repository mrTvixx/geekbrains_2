const toLower = (str = '') => str.toLowerCase();

const user = {
  firstName: 'John',
  lastName: 'Smit',
  getFullName() {
    const fullName = `Full user's 
    name is: ${this.firstName} ${toLower(this.lastName)}`;
    console.log(fullName)
  }
}

user.getFullName();
