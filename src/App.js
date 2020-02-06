import React from 'react';
import './App.css';
import ResourceBox from './Resource/ResourceBox';
import ResourceBlock from './Resource/ResourceBlock';


export default class App extends React.Component{

   static propTypes = {
      //contains prop variables
  }
  constructor(props) {
      super(props);
      this.state = {
          //contains state variables
      }
  }

  static defaultProps = {
      // contains default props
  }

  _resourcesBlock() {

  }

  render() {
   return (
      <div className="App">
      <body>
         {<ResourceBox/>}
         <div class="column-left">
         {<ResourceBlock title = "LOCAL"
                         name1 = "Jared Padilla"
                         phone1 = "(123) 3456-7890"
                         email1 = "help@gmail.com"
                         name2 = "Jared Padilla"
                         phone2 = "(123) 3456-7890"
                         email2 = "help@gmail.com"
                         name3 = "Jared Padilla"
                         phone3 = "(123) 3456-7890"
                         email3 = "help@gmail.com"/>}
        </div>
        <div class="column-center">
         {<ResourceBlock title = "CAMPUS"
                         name1 = "Jared Padilla"
                         phone1 = "(123) 3456-7890"
                         email1 = "help@gmail.com"
                         name2 = "Jared Padilla"
                         phone2 = "(123) 3456-7890"
                         email2 = "help@gmail.com"
                         name3 = "Jared Padilla"
                         phone3 = "(123) 3456-7890"
                         email3 = "help@gmail.com"/>}
        </div>
        <div class="column-right">
         {<ResourceBlock title = "SUPPORT"
                         name1 = "Jared Padilla"
                         phone1 = "(123) 3456-7890"
                         email1 = "help@gmail.com"
                         name2 = "Jared Padilla"
                         phone2 = "(123) 3456-7890"
                         email2 = "help@gmail.com"
                         name3 = "Jared Padilla"
                         phone3 = "(123) 3456-7890"
                         email3 = "help@gmail.com"/>}
        </div>
     </body>
   </div>

   );
  }
}
