import React, { Component } from 'react';

class RestaurantSearch extends Component {
    constructor() {
        super()
        this.state = {
            searchData: null,
            noData:false,
        }
    }
    search(key) {
        console.warn(key)
        fetch("http://localhost:3000/restaurant?q=" + key).then((data) => {
            data.json().then((resp) => {
                console.warn("resp", resp)
                if(resp.length>0)
                {
                    this.setState({searchData:resp,noData:false})
                }
                else
                {
                    this.setState({noData:true,searchData:null})

                }
                
            
            })
        })
    }
    render() {
        return (
            <div>
                <h1>Restaurant Search</h1>
                <input type="text" onChange={(event) => this.search(event.target.value)} />
                <div>
                    {
                        this.state.searchData?
                        <div>
                            {
                                this.state.searchData.map((item)=>
                                <div className="search-row">{item.name}</div>
                                    )
                            }
                        </div>
                        :""
                    }
                    {
                        this.state.noData?<h3>No Data Found</h3>:null
                    }
                </div>

            </div>
        );
    }
}

export default RestaurantSearch;