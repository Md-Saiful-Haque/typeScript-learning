"use strict";
// Union | (OR)
Object.defineProperty(exports, "__esModule", { value: true });
const getDashboard = (role) => {
    if (role === 'admin') {
        return 'Admin Dashboard';
    }
    else if (role === 'moderator') {
        return 'Moderator Dashboard';
    }
    else {
        return 'User Dashboard';
    }
};
getDashboard('admin');
const ChowdhuryShaheb = {
    id: "123",
    name: "Chowdhury Shaheb",
    phoneNo: "017",
    designation: "manager",
    teamSize: 20,
};
//# sourceMappingURL=unionAndIntersection.js.map