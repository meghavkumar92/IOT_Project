import React, { Component } from 'react';

class Counter extends Component {
   state = { 
count: this.props.value,
imageUrl: 'https://picsum.photos/200',
tags: ['tag1','tag2','tag3']
    };

styles = {
    fontSize: 20,
    fontWeight: "bold"
};

renderTags(){
    //normal js code
    if(this.state.tags.length === 0) return <p>There are no more tags!</p>;
    return <ul>{this.state.tags.map(tag => <li key={tag.id}>{tag}</li>)} </ul>
}

/* constructor(){
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
} */


handleIncrement = product => {
    this.setState({value: this.state.count + 1})
    console.log("Increment clicked", this);
    console.log(product);
}
/* doHandleIncrement = () => {
this.handleIncrement({id: 1});
}; */
    render() { 
        console.log('props', this.props);

                return (
                    <div>
                        {this.props.children}
        <React.Fragment>
            <img src={this.state.imageUrl} alt=""/>
            <span  style={this.styles} className={this.getBadgeClasses}>{this.formatCount()}</span>
            <span style={this.styles} className="badge badge-warning m-2">{this.formatCount()}</span> 
            <button className="btn btn-secondary btn-sm">Graph</button>
        </React.Fragment>
        <div>
            {this.state.tags.length === 0 && 'Please create new tag!'}
            {this.renderTags()}
        </div>
        <div>
        <button onClick={this.handleIncrement} >click</button>
        <button onClick={this.doHandleIncrement} >method arg </button>
        {/*  or directly pass the arg in the method itself 
        <button onClick={() =>  this.handleIncrement({id: 1} )} >method arg </button> 
        */}
        
        </div>
        </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

formatCount(){
    const {count} = this.state;
    return count === 0 ? "Zero" : count;
}


}
 
export default Counter;