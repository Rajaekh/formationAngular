import greet,{farewell} from './greeter';
let message: string = "Hello, TypeScript!";
console.log(message);
let temperature:number =12;
let welcomeMessage:string="hello";
let isLoggedIn:boolean=true;
let colors:string[]=["blue","red"];
let userInfo:[string,number]=["user1",20];

enum Season {Spring,Summer,Autumn,Winter};
let s1=Season.Spring;
function logValue(item:any):void{
console.log(item);
}
function noReturn():void{
    console.log("No return");
}
//exo3
function greet2(item:string):string{
        return item;
}
function multiply(num1:number,num2:number){
    return num1*num2;
}
//exo4:
function createEmail(to:string,subject :string="No Subject" ){

}
function add(x:number,y:number,z ?:number):number{
    let rslt = x + y;
    if (z !== undefined) {
        rslt += z;
    }
    return rslt;
}
//exo 5:
function concatenateStrings(...strings:string[]){
     return strings.join("");
}
// (...): permet de traiter chaque nombre dans le tableau numbers comme un argument séparé pour la fonction Math.max()
 function maxNumber(...numers:number[]):number{
return Math.max(...numers);
 }
 // Interface

 interface Person {
    firstName: string;
    lastName: string;
    age?: number; // Optional property
}

 interface Vehicle{
    make:string;
    model:string;
    year:Date;
 }
 function createVehicle(vehicle:Vehicle){
return vehicle;
 }
 interface ExtendedPerson extends Person {
    email?: string;
}
// exo 5
function updatePerson(p:Person){
}

//Reandonly

interface Circle{
   readonly centerX:number;
   readonly centerY:number;
   readonly  radius:number;
}
function moveCircle( circle:Circle){
    //erro:Cannot assign to 'centerY' because it is a read-only property
//circle.centerX=2;
//circle.centerY=3;
}

class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
 class Dog extends Animal{
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m:the dog`);
    }
 }
 const myDog = new Dog("test");
 myDog.move(4);

 //Public, Private, and Protected Modifiers
 class Person {
    private name: string;
    constructor(name: string) { this.name = name; }
    public getName(){
        return this.name;
    }
}
const person=new Person("Rajae");
//console.log(person.name);
// donne:Property 'name' is private and only accessible within class 'Person'.

/**Generics */
function identity<T>(arg: T): T {
    return arg;
}
let mot=identity("hello");
console.log(typeof(mot));

/**Generic Interfaces */
interface GenericIdentityFn<T> {
    (arg: T): T;
}
// Implémentation de l'interface avec une fonction
function identityFn<T>(arg: T): T {
    return arg;
}

interface GenericArray<T> {
    items:T[];
}


enum UserResponse {
    Yes = 1,
    No = 0
}
enum Message{
    Success = "SUCCESS",
    Failure = "FAILURE"
}
function padLeft(value: string, padding: string | number) {
    // function body
}
let withstring=padLeft("test","test2");
let withNumber=padLeft("test test",12);

interface BusinessPartner {
    name: string;
    credit: number;
}

interface Contact {
    email: string;
    phone: string;
}

type customer = BusinessPartner & Contact;
//Les intersection types permettent de combiner plusieurs types en un seul type
interface Customer{

}
console.log(greet("test"));
console.log(farewell("test2"));
let  calculator: Calculator.BasicCalculator;
