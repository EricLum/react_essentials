import React from 'react';
import Task from './Task';

export default class TaskList extends React.Component {
    
    /* returns a state object like 
    {
        'mow the lawn': false,
        'do the dishes': false, 
        ...
    }
    this state tracks whether the item should be crossed out or not.
    */
    state = this.props.tasksList.reduce((acc,task)=>{acc[task]=false; return acc}, {})

    render() {
        
        /* Gets called from the child component but REFERENCES this component, super common react pattern
        */
        this.handleClickTask = (task) => {
            // if i find my task in my taskslists prop, update state boolean for it
            this.props.tasksList.indexOf(task) > -1 && this.setState((prevState)=>{
                return {
                    [task]: !prevState[task] // common on/off toggle pattern for react.
                }
            })
        }

        // Returns all the rendered out components
        const renderTasks = this.props.tasksList.map((task, index)=><Task text={task} handleOnClick={()=>this.handleClickTask(task)} isComplete={this.state[task]}/>) 

        return (
            <ul>
                {renderTasks}
            </ul>
        )
    }

}

