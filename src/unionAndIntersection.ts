// Union | (OR)

type UserRole = 'admin' | 'moderator' | 'user';

const getDashboard = (role: UserRole) => {

    if (role === 'admin') {
        return 'Admin Dashboard'
    }
    else if (role === 'moderator') {
        return 'Moderator Dashboard'
    }
    else {
        return 'User Dashboard'
    }
}

getDashboard('admin')

// intersection & 

type Employee = {
  id: string;
  name: string;
  phoneNo: string;
};

type Manager = {
  designation: string;
  teamSize: number;
};

type EmployeeManager = Employee & Manager;

const ChowdhuryShaheb: EmployeeManager = {
  id: "123",
  name: "Chowdhury Shaheb",
  phoneNo: "017",
  designation: "manager",
  teamSize: 20,
};