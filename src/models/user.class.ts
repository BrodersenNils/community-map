export class User {
  firstName: string = '';
  lastName: string = '';
  street: string = '';
  number: number = 0;
  zipCode: string = '';
  city: string = '';
  country: string = '';
  email: string = '';
  status: string = '';
  password: string = '';
  langitude: string = '';
  longitude: string = '';
  
  constructor(obj?: any) {
    this.firstName = obj ? obj.firstName : '';
    this.lastName = obj ? obj.lastName : '';
    this.street = obj ? obj.street : '';
    this.number = obj ? obj.number : '';
    this.zipCode = obj ? obj.zipCode : '';
    this.city = obj ? obj.city : '';
    this.country = obj ? obj.country : '';
    this.email = obj ? obj.email : '';
    this.status = obj ? obj.status : '';
    this.password = obj ? obj.password : '';
    this.langitude = obj ? obj.langitude : '';
    this.longitude = obj ? obj.longitude : '';    
  } 
}
