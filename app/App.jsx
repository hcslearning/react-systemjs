import React from 'react';
import {Button} from 'primereact/button';
import {Dialog} from "primereact/dialog";
import {Lightbox} from 'primereact/lightbox';

export default class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {open: false, modal: false, cities: []};
        this.open = this.open.bind(this);
        this.openModal = this.openModal.bind(this);
    }
    
    open() {
        this.setState({open: true});
    }
    
    openModal() {
        this.setState({modal: true});
    }
    
    render() {
      const images=[
          {source:'https://api.thecatapi.com/v1/images/search?format=src&size=small', thumbnail:'https://api.thecatapi.com/v1/images/search?format=src&size=full', title:'1'},
          {source:'https://api.thecatapi.com/v1/images/search?format=src&size=small', thumbnail:'https://api.thecatapi.com/v1/images/search?format=src&size=full', title:'1'},
         ];


        return (
          <div className="App">
            <Button label="Open" onClick={this.open} />
            
            {this.state.open && (
              <Dialog appendTo={document.body} header="Dialog" modal visible onHide={() => this.setState({open: false})}>
                <Lightbox type="images" images={images} />
           
              </Dialog>
            )}
          </div>
        );
    }
}
