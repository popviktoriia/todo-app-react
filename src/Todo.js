import { Component } from "react";

class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: "",
            list: [],
        };
    }

    updateInput(e) {
        this.setState({
            userInput: e,
        });
    }

    addItem(input) {
        if (this.state.userInput !== "") {
            const userInput = {
                id: Math.random(),
                value: this.state.userInput,
            };
            const list = [...this.state.list];
            list.push(userInput);
            this.setState({ list, userInput: ""});
        }
    }

    deleteItem(key) {
        let list = this.state.list;
        let updateList = list.filter((item) => item.id !== key);
        this.setState({list: updateList});
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
    <div>
        <div className="app-name">
            <h1>TO-DO LIST</h1>
        </div>

<form onSubmit={this.onFormSubmit}>
        <div className="main-container">
            <input className="input"
                type="text"
                placeholder="Add item ..."
                onChange={(e) => this.updateInput(e.target.value)}
                value={this.state.userInput}/>
            <button className="addButton" onClick={() => this.addItem(this.state.userInput)}> ADD </button>
        </div>

        <ol className="list-container">
            {this.state.list.map((item, index) => {
                return (
                    <li key = {index} > 
                        {item.value}
                            <button className="deleteButton" onClick={() => this.deleteItem(item.id)}>
                            Delete
                            </button> 
                    </li>
                        );
            })}
        </ol>
</form>
    </div>
        );
    }
}
export default Todo;