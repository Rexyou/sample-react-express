import React from 'react';
import axios from 'axios';

export default class List extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
          list: []
        }
    }

    async componentDidMount() {
        await axios.get('/api/getList')
        .then(
            res => {
                this.setState({ list: res.data, init:1});
            }
        )
        .catch(error => {
            console.log("Current error: "+error);
        });
    }

    render(){
        const { list } = this.state;

        return (
            <div>
                <h1>Lists</h1>
                {list.map((item, index) => {
                    return(
                        <div key={index}>
                        {item}
                        </div>
                    );
                })}
            </div>
        )
    }
}