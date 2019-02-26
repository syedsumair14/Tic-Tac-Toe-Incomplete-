import React from 'react';
import './App.css'

class App extends React.Component{

    state= {
        oneValue: '',
        twoValue: '',
        threeValue: '',
        fourValue: '',
        fiveValue: '',
        sixValue: '',
        sevenValue: '',
        eightValue: '',
        nineValue: '',
        bool: true,
        boolValue: 1,
        activePlayer: 1,
        activeClass1: 1,
        activeClass2: 0
        
    }

    //9 BOX CLICKS
    onClick1 = () => {
        this.state.bool ? this.setState({bool: false}) : this.setState({bool: true})
        this.displayBool(1);
    }
    onClick2 = () => {
        this.state.bool ? this.setState({bool: false}) : this.setState({bool: true})
        this.displayBool(2);
    }
    onClick3 = () => {
        this.state.bool ? this.setState({bool: false}) : this.setState({bool: true})
        this.displayBool(3);
    }
    onClick4 = () => {
        this.state.bool ? this.setState({bool: false}) : this.setState({bool: true})
        this.displayBool(4);
    }
    onClick5 = () => {
        this.state.bool ? this.setState({bool: false}) : this.setState({bool: true})
        this.displayBool(5);
    }
    onClick6 = () => {
        this.state.bool ? this.setState({bool: false}) : this.setState({bool: true})
        this.displayBool(6);
    }
    onClick7 = () => {
        this.state.bool ? this.setState({bool: false}) : this.setState({bool: true})
        this.displayBool(7);
    }
    onClick8 = () => {
        this.state.bool ? this.setState({bool: false}) : this.setState({bool: true})
        this.displayBool(8);
    }
    onClick9 = () => {
        this.state.bool ? this.setState({bool: false}) : this.setState({bool: true})
        this.displayBool(9);
    }
    
    
    //DISPLAY ON SCREEN
    displayBool = (number) => {
       this.state.boolValue === 1 ? this.setState({boolValue: 0, activePlayer: 0, activeClass1: 0}) : this.setState({boolValue: 1, activePlayer: 1, activeClass1: 1})

       switch(number){
           case 1:
           this.setState({oneValue: this.state.boolValue})
           break;
           case 2:
           this.setState({twoValue: this.state.boolValue})
           break;
           case 3:
           this.setState({threeValue: this.state.boolValue})
           break;
           case 4:
           this.setState({fourValue: this.state.boolValue})
           break;
           case 5:
           this.setState({fiveValue: this.state.boolValue})
           break;
           case 6:
           this.setState({sixValue: this.state.boolValue})
           break;
           case 7:
           this.setState({sevenValue: this.state.boolValue})
           break;
           case 8:
           this.setState({eightValue: this.state.boolValue})
           break;
           case 9:
           this.setState({nineValue: this.state.boolValue})
           break;
           default:
           return alert("NOT WOKING")
       }
    }

    
        
   
    render(){
        let activeClass1, activeClass2;
        this.state.activeClass1 ===1 ? activeClass1="active" : activeClass2="active"
        let winConditionOne = this.state.oneValue === this.state.fourValue && this.state.oneValue === this.state.sevenValue ? "WON CONDITION 1" : "";
        let winConditionTwo = this.state.oneValue === this.state.twoValue && this.state.oneValue === this.state.threeValue ? "WON CONDITION 2" : ""
        return(
            <div className="container">
            <div className="row">
            <div className="col self-align-center ">
            <h1 style={{color:"dodgerblue"}} className="text-center">TIC TAC TOE</h1>
            {winConditionOne}{winConditionTwo}{console.log(this.state)}
            </div>
            </div>
            <div>
                <div className="row">
                <div className="col-md-4 text-center pl-1" className={activeClass1}>Player One</div>
                <div className="col-md-4 text-center pl-2" className={activeClass2}>Player Two</div>
                </div>
            <div className="row">
            <table className="table bt-0 text-center">
                <thead>
                    <tr>
                        <td onClick={this.onClick1} className="margin margin-left">{this.state.oneValue}</td>
                        <td onClick={this.onClick2} className="margin">{this.state.twoValue}</td>
                        <td onClick={this.onClick3} className="margin margin-right">{this.state.threeValue}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td onClick={this.onClick4} className="margin margin-left">{this.state.fourValue}</td>
                        <td onClick={this.onClick5} className="margin">{this.state.fiveValue}</td>
                        <td onClick={this.onClick6} className="margin margin-right">{this.state.sixValue}</td>
                    </tr>
                    <tr>
                    <td onClick={this.onClick7} className="margin-last margin margin-left">{this.state.sevenValue}</td>
                        <td onClick={this.onClick8} className="margin-last margin">{this.state.eightValue}</td>
                        <td onClick={this.onClick9} className="margin-last margin margin-right">{this.state.nineValue}</td>
                    </tr>
                </tbody>
            </table>
            </div>
            </div>
            </div>
        )
    }
}

export default App;