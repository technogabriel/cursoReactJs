export const datosLogin={
    email:'',
    password:''
  }

  export const datosRegistro ={
    email:'',
    password:'',
    repeatPassword:''
  }

  export const datosRegistroInput =[
    {
      id:'emailId',
      type:'email',
      placeholder:'usuario@gmail.com',
      name:'email',
      required : true
    },
    {
      id:'passwordId',
      type: 'password',
      placeholder:'Usario1234',
      name:'password',
      required : true
    },
    {
      id:'repeatId',
      type: 'password',
      placeholder:'repeatPassword',
      name:'repeatPassword',
      required : true
    }
  ]

  export const datosLoginInput =[
    {
      id:'emailId',
      type:'email',
      placeholder:'usuario@gmail.com',
      name:'email',
      required : true
    },
    {
      id:'passwordId',
      type: 'password',
      placeholder:'Usario1234',
      name:'password',
      required : true
    }
  ]