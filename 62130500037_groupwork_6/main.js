
const constraints = {
    firstname : {
        presence: true,
        format: {
            pattern: "[a-zA-Z]+",
            
            message: "can only contain  a-z"
          },
    },
     lastname : {
        presence: true,
        format: {
            pattern: "[a-zA-Z]+",
            
            message: "can only contain  a-z"
          },
    },

    choosedmajor : {
        presence: true,
    },


    gender: {
        presence: true,
    },
    email: {
        presence: true,
        email: true
    },
    phone: {
        presence: true,
        

        format: {
            pattern: "[0-9]+",
            
            message: "can only contain  0-9"
          },


        length: {
            
            minimum : 10,
            maximum : 10,
            message: "personal phone number should have 10 digit"
            
        },     
        
        

        
    },
    DOB : {
        presence: true,
        format: {
        pattern: /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,
        message:"Check format : DD/MM/YYYY "
          },
       
    },
    
}









const app = {
    data() {
        return {
            firstname: 'Thanapat',
            lastname: 'Suwannaard',
            id : '62130500037',
            age : '20',
            image : 'images/profile.jpg',
            faculty: 'SIT',
            errors : null,
            majors : [{id: 1,name:'IT'},
            {id:2 ,name : 'CS'},
            {id:3 ,name : 'DSI'}
        ],


            formdata:{ 
            firstname: null,
            lastname: null,
            gender:null,
            email:null,
            phone:null,
            DOB:null,
            choosedmajor:null,
            }, 
            
            
        }
    },
    methods : {
       
        valid(error){
            
            this.errors = validate(this.formdata,constraints)
            if(this.errors){
             
                error.preventDefault();
                
                  
  alert("Please Check " + Object.values(this.errors).length   +" Errors" )

     
            } else{
                    alert("Your profile is updated successfully")};
                
                
                }


    }


   

}

var mountedApp = Vue.createApp(app).mount('#app');
