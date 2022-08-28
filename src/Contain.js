//import { type } from '@testing-library/user-event/dist/type';
import React, { Component } from 'react';
const storeidnumber = []
const storevalue = []
let number = 0;
let indexnumber = ''
const object = {}
class Contain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textname: '',
            myarray: [],
            input: '',
            updatevalue: '',
            updatebtn: ''
        };
    }
    idnumber() {
        const object = {
            id: number.toString()
        }
        number++
        return object.id
    }
    addvalue() {

        const result = this.idnumber()
        storeidnumber.push(result)
        storevalue.push(this.state.textname);

        const changedata = storevalue.map((ele, index) => {

            return (
                <>
                    <li>
                        {ele}
                    </li>
                    <button type='button' id={storeidnumber[index]} onClick={(e) => {
                        this.Editbtn(e)
                    }} >Edit</button>
                    <button type='button' id={storeidnumber[index]} onClick={this.delectbtn.bind(this)} >Delect</button>
                </>
            )

        })
        object.getvalue = storevalue
        localStorage.setItem('userdata', JSON.stringify(object))
        this.setState({
            textname: '',
            myarray: changedata,
            count: this.state.count + 1
        })
    }

    Editbtn(e) {
        let input = Math.floor(e.target.id)

        this.setState({
            input: <input type="text" name="updatevalue" onChange={(e) => {
                this.setState({ updatevalue: e.target.value })
            }} />,
            updatebtn: <button type="button" onClick={this.updatevalue.bind(this, input)}>Update</button>
        })
    }
    updatevalue(input) {
        console.log(input)
        const changedata = storevalue.map((ele, index) => {
            if (index === input) {
                ele = this.state.updatevalue
                indexnumber = index
            }
            return (
                <>
                    <li>
                        {ele}
                    </li>
                    <button type='button' id={storeidnumber[index]} onClick={(e) => {
                        this.Editbtn(e, this.state.textname)
                    }} >Edit</button>
                    <button type='button' id={storeidnumber[index]} onClick={this.delectbtn.bind(this)} >Delect</button>
                </>
            )
        })
        storevalue[Math.floor(indexnumber)] = this.state.updatevalue
        object.getvalue = storevalue
        localStorage.setItem('userdata', JSON.stringify(object))

        this.setState({
            updatevalue: '',
            myarray: changedata,
            updatebtn: '',
            input: ''
        })

        //getuservalue and store in array and use for loop and change conatain give the new value of old value
    }
    delectbtn(event) {
        let input = Math.floor(event.target.id);
        storevalue.splice(input, 1)
        this.setState({
            myarray: this.state.myarray.map((ele, index, array) => {
                if (array.length === 1) {
                    return ele = ''
                }
                if (index !== input) {
                    return ele
                }
            })
        })
        if (storevalue === []) {
            storevalue.shift()
        }
        localStorage.setItem('userdata', JSON.stringify(storevalue))
    }

    render() {

        return (
            <div className='text'>
                <input type='text' name='textname' value={this.state.textname} onChange={(e) => {
                    this.setState({ textname: e.target.value })
                }} />

                <button type='button' id="btn" onClick={this.addvalue.bind(this)}>Add</button>

                <div>
                    {this.state.input}
                    {this.state.updatebtn}
                </div>
                <h4>{this.state.myarray}</h4>
            </div>
        );
    }
}

export default Contain;



//STEP OF TODOLIST
// FIRST CREATE THE DECLARE TWO EMPTY ARRAY
// FIRST WILL STORE THE USEINPUT AND SECOND IS STORE CURRENT ID Number
// AND USE STATE AND ONCHANGE EVENT AND STORE IN USERINPUT PROPERTIES FROM STATE
// USE MAP METHOD IN STOREVALUE ARRAY
// MAP METHOD:CREATE THE NEW ARRAY FOR EACH ELEMENT ACCORDING TO CALLBACK FUNCTION AND SO USER CLICK ON ADD BTN  EVERY TIME THE LIST WILL CREATE FROM 0 TO ARRAY length
// AND STORE THEN SAVADATA VARIABLE
// AND THEN USE SETSTATE FOR GIVE LIST IN MYARRAY(THIS.STATE.MYARRAY)


// //DELECT
// USE FILTER METHOD ON MYARRAY WHICH INSIDE THE STATE
// FILTER :GIVE THE ARRAY ELEMENT WHICH FULLFIE CONDITION IN CALLBACK FUNCTION AND CREATE NEW ARRAY
// SO I PUT CONDITION THAT THE CURRENTINDEX AND ID NOT MATCH THAT WILL RETURN IN delect NAME VARIABLE
// AND AGAIN USE SETSTATE


// //UPDATE
// FIRST CRETA THE INPUT TAG AND UPDATE BTN AND GIVE onChange EVENT AND STORE IN UPDATEVALUE
// AND ALSO CREATE UPDATEBUTTON


// //IN UPDATE BTN
// STOREVALUE STORE ALL VALUE SO AGAIN RUN THE MAP METHOD AND PUT CONDITION THAT IF INPUT===INDEX THEN THAT ELEMENT MUST REPLACE WITH NEW VALUE
// THEN AGAINUSE SETSTATE