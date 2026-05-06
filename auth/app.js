const loginbtn = document.getElementById('lgn-button');
const registerbtn = document.getElementById('reg-button');
const logoutbtn = document.getElementById('logout-button');

const loginform = document.getElementById('login-screen');
const registerform = document.getElementById('register-screen');
const userinfo = document.getElementById('dashboard-screen');

const showRegister = document.getElementById('show-register');
const showLogin = document.getElementById('show-login');

const regusername = document.getElementById('reg-username');
const regemail = document.getElementById('reg-email');
const regpassword = document.getElementById('reg-password');
const lgnusername = document.getElementById('login-username');
const lgnpassword = document.getElementById('login-password');

 let token=null;

registerbtn.addEventListener('click', async () => {
    
    const regname = regusername.value
    const regmail = regemail.value
    const regpass = regpassword.value
    
    try {
        const response = await fetch('https://api.freeapi.app/api/v1/users/register',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                username: regname,
                email: regmail,
                password: regpass,
                role:'USER'
            })
        });
        const data = await response.json();
        console.log(data);
        if(data.success){
            alert('Registration successful! Please log in.');
            showScreen(loginform);
        }
    } catch (error) {
        console.error('Registration error:', error);
    }

});
   
    async function fetchcurrentUser() {
        try{
        const response = await fetch('https://api.freeapi.app/api/v1/users/current-user',{
            method: 'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        console.log(data);
        if(data.success){
            const user = data.data;
            document.getElementById('user-details').innerHTML = `    
            <h2>Welcome, ${user.username}!</h2>
            <p>Email: ${user.email}</p>
            <p>Role: ${user.role}</p>
`;
        }
    }
     catch (error) {
        console.error('Error fetching user details:', error);
    }
    }

loginbtn.addEventListener('click', async () => {

    const lgnname = lgnusername.value
    const lgnpass = lgnpassword.value
    
    try {
        const response =await fetch('https://api.freeapi.app/api/v1/users/login',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                username: lgnname,
                password: lgnpass
            })
        });
        const data = await response.json();
        console.log(data);  
        if(data.success){
            alert('Login successful!');
            token = data.data.accessToken;
            await fetchcurrentUser();
            showScreen(userinfo);
        }

    } catch (error) {
        console.error(error);
    }


});

logoutbtn.addEventListener('click', async() => {
    try {
        const response = await fetch('https://api.freeapi.app/api/v1/users/logout',{  
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
                'Authorization': `Bearer ${token}`
            },
         

        });
    token = null;
    alert('Logged out successfully!');
    showScreen(loginform);
    } catch (error) {
        console.error('Logout error:', error);
    }

});

function showScreen(screen) {
    loginform.style.display = 'none';
    registerform.style.display = 'none';
    userinfo.style.display = 'none';
    screen.style.display = 'block';
}

showRegister.addEventListener('click', () => {
    showScreen(registerform);
});

showLogin.addEventListener('click', () => {
    showScreen(loginform);
});

showScreen(loginform);