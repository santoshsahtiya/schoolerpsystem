import React,{ Component } from 'react';
import './AvatarStyle.css';
import 'tachyons';
import AvatarList from './AvatarList';
import App from './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Login from './Login'

class Avatar extends Component {
	constructor(){
		super();
		this.state = {
			name:"School ERP System"
		}
	}
render(){
const arrayy= [



{
	imgg:<img src="https://cdn3.iconfinder.com/data/icons/education-2-2/256/Student_Reading-512.png" alt="Picture to nahi he yara" />
	,id:"1",name:"Students",work:""

},
{
	imgg:<img src="https://cdn3.iconfinder.com/data/icons/family-5/512/family_daughter_parents-512.png" alt="Picture to nahi he yara" />
	,id:"2", name:"Parents", work:""
},

{imgg:<img src="https://www.freeiconspng.com/uploads/teachers-icon-7.png" alt="Picture to nahi he yara" />
	,id:"3", name:" Teachers", work:""
},
{imgg:<img src="https://cdn0.iconfinder.com/data/icons/social-media-strategy-1-1/66/47-512.png" alt="Picture to nahi he yara" />
	,id:"4", name:"Administration", work:""
}
]


//
	return (<div className="mainpage">
		
		<h1>{this.state.name}</h1>
	

	<BrowserRouter>
		<Link to ="Login">
		<AvatarList 
			imgg={arrayy[0].imgg}
		id ={arrayy[0].id} 
					name = {arrayy[0].name}
						work= {arrayy[0].work} />
												</Link>

		<AvatarList imgg={arrayy[1].imgg}
					id ={arrayy[1].id} 
					name = {arrayy[1].name}
						work= {arrayy[1].work} />
					
		<AvatarList 
					imgg={arrayy[2].imgg}
					id ={arrayy[2].id} 
					name = {arrayy[2].name}
						work= {arrayy[2].work} />
		<AvatarList 
					imgg={arrayy[3].imgg}
					id ={arrayy[3].id} 
					name = {arrayy[3].name}
						work= {arrayy[3].work} />



	<div>
     	<Switch>
    
   <Route path="/login" component={Login} />
   </Switch>
     </div>
       </BrowserRouter>
   </div>
	)
}}
export default Avatar;
