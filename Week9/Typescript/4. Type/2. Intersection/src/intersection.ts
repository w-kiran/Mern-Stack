// What if you want to create a type that has every property of multiple types/ interfaces
type Employee = {
  name: string;
  startDate: Date;
};

type Manager = {
  name: string;
  department: string;
};

type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
  name: "kiran",
  startDate: new Date(),
  department: "Software developer"
};

console.log(teamLead);
