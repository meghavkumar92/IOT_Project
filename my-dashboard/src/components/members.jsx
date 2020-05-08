import React, { Component } from 'react';
import Counter from './counter';
class members extends Component {
    state = { 
        counters: [
            {id:1, value:4},
            {id:2, value:0}
        ]
     }
    render() { 
        return ( <div>
{/* we can call it like this or may be iterate using an object in state and iterate using maps.
 <Counter/>
<Counter/> */}

{this.state.counters.map(counter => <Counter key={counter.id} value={counter.value}>
    <h1>Title #{counter.id}</h1>
</Counter>

)}
        </div> );
    }
}
 
export default members;