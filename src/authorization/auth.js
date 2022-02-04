const auth = {
    isLoggedIn:false,
    onAuthentication(){
      this.isLoggedIn=true;
    },
    getLogInStatus(){
      return this.isLoggedIn;
    },
    saveToken(userToken) {
        console.log(userToken);
        localStorage.setItem('token', JSON.stringify(userToken));
        
      },
    getToken(){
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
     
        return userToken;
      },
      saveComments(comments) {
        console.log(comments);
        localStorage.setItem('comments', JSON.stringify(comments));
        
      },
      getComments(){
        const tokenString = localStorage.getItem('comments');
        const userToken = JSON.parse(tokenString);
     
        return userToken;
      }
  }
  export default auth;