import { Outlet } from "react-router-dom";
import ProfileFunctionalComponet from "./Profile";
import Profile from "./ProfileClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";
import Image from "../assets/img/About.jpg"
class About extends Component {
  constructor(props) {
    super(props);

    //console.log("Parent - constructor");
  }
  componentDidMount() {
    // Best place to make an Api call
    //console.log("Parent - componentDidMount");
  }
  render() {
    //console.log("Parent - render");
    return (
      <div>
        

        

        <div className="h-full">
            <div className="flex  flex-wrap justify-between items-center">
            <h1 className="text-gray-700 font-semibold ml-16 text-6xl text-left mt-28  ">  A Journey <br/> Through the World of<br />{" "}</h1>
            <div className="items-start flex flex-wrap">
            <div className=" mt-4 p-3 ml-16 mr-20  rounded-lg bg-orange-400 text-white font-semibold text-6xl   "> Culinary Delights </div>
            
            <img class="flex-row items-end ml-48 -mt-[190] w-96 h-96 mb-20 " src={Image} />
           
            </div>
         
            
            
            </div>
            
           
            
           
        </div>
        
      </div>
    );
  }
}

export default About;

/**
 *
 * Parent Constructor
 * Parent render
 *    First Child constructor
 *    First Child render
 *    Second Child constructor
 *    Second Child render
 *
 *    DOM UPDATED for children
 *
 *    first Child componentDidMount
 *    Second Child componentDid
 *  Parent componentDidMount
 *
 *
 */
