<template>
    <div class="adminpanel">
        <transition name="fade">
            <div class="menu" v-show="showadminpanel">
                <div class="adminsection">
                    <img src="./assets/profile.png" alt="" class="profile">
                    <p class="admintxt">Admin</p>
                    <div class="three">
                        <b-button variant="light" @click="togglelogpass"><img src="./assets/three.png" alt=""></b-button>
                        <div class="logpasscard" v-show="logpass">
                            <div class="logpasscardcontent">
                                <button>
                                    <p class="mt-3">Logout</p>
                                </button>
                                <button>
                                    <p>Change Password</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="admincontentsection">
                    <router-link to="/dashboard"><button><img src="./assets/dashboard.png" alt="">
                            <p>Dashboard</p>
                        </button></router-link>
                    <router-link to="/order"><button><img src="./assets/clipboard.png" alt="">
                            <p>Order</p>
                        </button></router-link>
                    <router-link to="/customer"><button> <img src="./assets/customer.png" alt="">
                            <p>Customer</p>
                        </button></router-link>
                    <router-link to="/product"><button><img src="./assets/new-product.png" alt="">
                            <p>Product</p>
                        </button></router-link>
                    <router-link to="/about"><button><img src="./assets/info.png" alt="">
                            <p>About</p>
                        </button></router-link>
                </div>
            </div>
        </transition>
        <div class="dispcontent">
            <header>
                <div class="hamburger">
                    <b-button variant="light" @click="toggleadminpanel"><img src="./assets/menu.png" alt=""></b-button>
                </div>
                <div class="headercontent">
                    <img src="./assets/notification.png" alt="">
                    <img src="./assets/email.png" alt="">
                 <div class="githubText">
                        <img src="./assets/github-sign.png" alt="" class="github">
                        <a href="https://github.com/"><p>Github</p></a>
                    </div>
                
                </div>
            </header>
            <div class="routerview">
                <router-view></router-view>
            </div>
            <!-- <footer style="margin-top: 20px;">
                © Vue-CRM 2020
            </footer> -->
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            showadminpanel: true,
            logpass: false
        }
    },
    methods: {
        toggleadminpanel() {
            this.showadminpanel = !this.showadminpanel
        },
        togglelogpass() {
            this.logpass = !this.logpass
        },
       
    },
    mounted() {
        if (window.innerWidth < 768) {
            this.showadminpanel = false
        }
    },
};
</script>

<style>
html body {
    height: 100%;
    margin: 0
}

.adminpanel {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
}

.githubText {
    display: flex;
    flex-direction: row;
    padding-right: 10px;
}

.githubText:hover {
    cursor: pointer;
    background-color: lightgray;
}

.admincontentsection button:active {
    background-color: lightblue;
}

.menu {
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 130vh;
    background-color: #e6f2fc;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

footer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background-color: #f2f2f2;
}

header {
    width: 100%;
    height: 65px;
    border-bottom: 0.4px solid black;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background-color: #f5f5f5;
    display: block;
    float: right;
    padding: 10px;
}

.headercontent img {
    width: 30px;
    height: 30px;
    margin-right: 5px;
    margin-top: 5px;
    margin-left: 15px;
}

.headercontent {
    display: flex;
    flex-direction: row;
    float: right;
}

header p {
    margin-top: 9px;
    font-size: 15px;
    font-weight: 300;
    color: black;
}

.dispcontent {
    width: 100%;
    height: 100%;
}

.routerview {
    width: 100%;
    height: 80%;

}

.github {
    border-radius: 50%;
}

.githubText a{
    text-decoration: none;
    color: black;
}
.githubText a:hover{
    text-decoration: none;
    color: black;
}
.githubText a:active{
    text-decoration: none;
    color: black;
}

.hamburger img {
    width: 30px;
    height: 25px;
}

.hamburger {
    width: 50px;
    float: left;
    margin-top: 2px;
}

.hamburger button {
    border: none;
    background-color: transparent;
    outline: none;
}

.hamburger button img:hover {
    border: none;
    background-color: transparent;
    outline: none;
}

.adminsection {
    width: 100%;
    height: 65px;
    display: flex;
    flex-direction: row;
}

.adminsection .profile {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-top: 10px;
    margin-left: 10px;
}

.admintxt {
    margin-top: 20px;
    margin-left: 38px;
}

.admincontentsection {
    width: 100%;
    height: auto;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
}

.admincontentsection button {
    width: 100%;
    height: 50px;
    border: none;
    background-color: transparent;
    outline: none;
    font-size: 20px;
    font-weight: 300;
    color: black;
}

.admincontentsection img {
    width: 16px;
    height: 16px;
    margin-right: 10px;
    margin-left: 10px;
    float: left;
    margin-top: 15px;
}

.admincontentsection p {
    float: left;
    margin-top: 8px;
}

.admincontentsection button:hover {
    background-color: lightgray;
    color: black;
}

.three {
    width: 22px;
    height: 20px;
    margin-top: 12px;
    margin-left: 30px;
}

.three img {
    width: 20px;
    height: 20px;
}

.three button {
    border: none;
    background-color: transparent;
    outline: none;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out, height 0.5s ease-in-out;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <2.1.8 */
    {
    opacity: 0;
    transform: scale(0.9);
    height: 0;
}

.logpasscard {
    width: 170px;
    height: 100px;
    background-color: white;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    position: absolute;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


}

.logpasscardcontent button {
    border: none;
    background-color: transparent;
    outline: none;
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.logpasscardcontent button:hover {
    background-color: lightgray;
}</style>
