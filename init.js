//if starting for the first time, puts default data and root user in the database
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const Department = require('./app/services/dep');
const Role = require('./app/services/roles');
const User = require('./app/services/users');

const Departments = [
    {
        depName: "Management",
    },
    {
        depName: "HR",
    },
    {
        depName: "IT",
    },
    {
        depName: "Finance",
    }
];
const Roles = [
    {
        roleName: "ROOT",
        permissions: "-rwxrwxrwx"
    },
    {
        roleName: "ADMIN",
        permissions: "-rw-rw-rw-"
    },
    {
        roleName: "TECHNITIAN",
        permissions: "-r--r"
    },
    {
        roleName: "USER",
        permissions: "-r--r"
    }
];


function initDepartments(){
    Departments.forEach(dep => {
        Department.createDep(dep)
        .then((res) => {
            console.log(`${dep.depName} department created`);
        }
        ).catch((err) => {
            console.error(err);
        });
    });  
}
function initRoles(){
    Roles.forEach(role => {
        Role.createRole(role)
        .then((res) => {
            console.log(`${role.roleName} role created`);
        }
        ).catch((err) => {
            console.error(role);
            console.error(err);
        });
    });
}

async function initUsers(){
    const passHash = bcrypt.hashSync("root", 10);
    const role = await Role.getRole("ROOT")._id;
    const department = await Department.getDep("Management")._id;
    const rootUser = {
        userName: "root",
        passHash: "root",
        fName: "root",
        lName: "root",
        email: "",
        role: role,
        department: department
    };

    await User.createUser(rootUser).then((res) => {
        console.log(`Root user created`);
    }).catch((err) => {
        console.error(err);
    });
}    

async function init(){
    if(await Role.isEmpty()){
        initRoles();
    }
    if(await Department.isEmpty()){
        initDepartments();
    }
    if( await User.isEmpty()){
        initUsers();
    }
}

module.exports = init;