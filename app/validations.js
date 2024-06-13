const nameRegex = /^[a-zA-Z]{2,}$/;
const validateEmail = [
    (email) => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email);
    },
    "invalid email",
  ];
  
  const validatePhone = [
      (phone) => {
          const phoneREgex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
          return phoneREgex.test(phone);
      },
      "invalid phone",
  ]
  
  const validateFirstName = [
    (fName) => {
      return nameRegex.test(fName);
    },
    "invalid first name",
  ];
  
  const validateLastName = [
    (lName) => {
      return nameRegex.test(lName);
    },
    "invalid last name",
  ];

  
const validations = {
    validateEmail,
    validateFirstName,
    validateLastName,
    validatePhone
};

module.exports = validations;