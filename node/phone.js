const { phone } = require('phone');

function formatPhone(mobilePhoneNumber){

    if(typeof mobilePhoneNumber === 'number'){
        let num = mobilePhoneNumber.toString();
        let number = phone(num, {country: 'TZA'});
        let phoneNum = number.phoneNumber;

        if(phoneNum.charAt(0) == '+'){
            return phoneNum.substr(1);
        }
        else{
            return phoneNum;
        }

    }
    else{
        let number = phone(mobilePhoneNumber, {country: 'TZA'});
        let phoneNum = number.phoneNumber;

        if(phoneNum.charAt(0) == '+'){
            return phoneNum.substr(1);
        }
        else{
            return phoneNum;
        }
    }
}

let mobile = "";

const NUMBER = formatPhone(mobile);

console.log(NUMBER);