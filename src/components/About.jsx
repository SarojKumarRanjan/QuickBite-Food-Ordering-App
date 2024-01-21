import React from "react";
 
/* here in class based component first constructor is called and then
 render after that componentDidMount is called 
  1=> we wrire all the variable related things in constructor 
  2=> In ComponentDidMount we call API
  3=> In render we retrun what we need to show on the page, we can also destructure all the props 
 */
class About extends React.Component{

    constructor(props){
        super(props)
//here all the variables are declared and updated

this.state = {
    count:"hello",
    count2:"world"
}

    }

componentDidMount(){
    //best place to call api
    // we can make this component as async while calling an api 
}

componentDidUpdate(){
    // componentdidmount will be called once after the render but componentdidupdate will be caled after every update
    // this.timer = setinterval(); this will be cleared in the componentwillunmount by refering the this keyword aswe have access of this in my whole class.
}

// previous way of implementing dependency varible to componentdidupdate

/* componentDidUpdate(prevProp,prevState){
 if(this.state.count !== prevState.count )
} */



componentWillUnmount(){
    // this will be called when we will just move to another page 
    //leaving the current component then the componentwillUnmount will be excutated
    //to stop the operation like settimeout or setinterval before leaving the page
    // when we again load the same component then these operatins start again without stoping the previous
    //one then we use this to stop it
    // clearinterval(this.timer); 
}
    render(){
     //we can destructure it here 
   const {count2} = this.state

        return(
            <>
            <h1>hello from about us page </h1>
            <h2>{this.state.count}</h2>
            <h3>{count2}</h3>

            </>
        )
    }
}

export default About;