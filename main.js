let contactInput = document.getElementById("contact");

contactInput.addEventListener("input", function() {
  let inputValue = contactInput.value;
  let isPhone = /^\d{10}$/.test(inputValue);
  let isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(inputValue);

  if (isPhone) {
    // Xử lý số điện thoại
  } else if (isEmail) {
    // Xử lý địa chỉ email
  } else {
    // Hiển thị thông báo lỗi
  }
});

var createnewaccount = document.getElementById('createnewaccount');
var login = document.getElementById('login');
var register = document.getElementById('register');
var btnregister = document.getElementById('btnregister');
var customer_interface = document.getElementById('customer-interface');
var hotelier_interface = document.getElementById('hotelier-interface');
var admin_interface = document.getElementById('admin-interface');
function hideall(){
  login.style.display='none';
  register.style.display='none';
  customer_interface.style.display='none';
  hotelier_interface.style.display='none';
  admin_interface.style.display='none';
}
createnewaccount.onclick = function(e){
  e.preventDefault();
  login.style.display='none';
  register.style.display = 'flex';

};
btnregister.onclick = function(e){
  e.preventDefault();
  register.style.display = 'none';
  login.style.display = 'flex';
};
// login.onclick = function(e){
//   e.preventDefault();  
//   login.style.display = 'none';
//   customer_interface.style.display = 'block';
// }
