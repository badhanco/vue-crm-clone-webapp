<template>
    <div class="login">
  <div class="title rounded-top">
  Vue-Crm 2.0
  </div>
      <div class="login-text rounded-bottom">
      
        <div class="user-id mb-2">
          <p class="mt-2">
            User Id
          </p>
          <input type="text" id="name" class="form-control" placeholder="Admin@123" onfocusout="outFocus(this)" onfocus="inFocus(this)">
        </div>
        <div class="password">
          <p class="mt-2">
            Password
          </p>
          <input type="text" id="name" class="form-control" placeholder="*****" onfocusout="outFocus(this)" onfocus="inFocus(this)">
        </div>
        <div>
          <router-link to="/template"><button class="mt-3">Login</button></router-link>
  
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  </script>
  
  <style >
  body{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .title{
    margin: 0;
    background-color: #4286DE;
    color: white;
    font-size: 25px;
    padding-left: 18px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .login{
    width: 300px;
    height: 250px;
    background-color: #fff;
    border-radius: 10px;
  
  }
  
  .login-text{
  
    width: 100%;
    height: 100%;
    padding-top: 50px;
  }
  .login-text{
    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    width: 100%;
    height: 100%;
  }
  .user-id{
    display: flex;
    flex-direction: row;
  }
  .password{
    display: flex;
    flex-direction: row;
  }
  .login-text button{
  width: 80px;
  height: 40px;
  font-size:20px ;
  border-radius: 5px;
  margin-top: 15px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  
  }
  .login-text button:hover{
    background-color: #4286DE;
    color: white;
  }
  .login-text input{
    width: 150px;
    height: 50px;
    float: left;
  }
  .login-text p{
    font-size: 18px;
    width: 120px;
    color: grey;
  }
  .login-text input:focus{
    outline: none;
    border: 1px solid #4286DE;
    border-radius: 5px;
  }
  </style>

