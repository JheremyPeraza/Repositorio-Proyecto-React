import React from 'react';
import PropTypes from 'prop-types';
import { Task } from "../../models/task.class";
import { LEVELS } from '../../models/Levels.enum';
import TaskComponent from '../Pure/task';


const TaskListComponent = () => {

    const defaultTask = new Task('Example','Default Description', false, LEVELS.NORMAL);

    const changeState = (id) => {
        console.log('TODO: Cambiar estado de una tarea')
    }


    return (
        <div>
            <div>
                <h1> Your Tasks: </h1>
            </div>
            <TaskComponent task={defaultTask} ></TaskComponent>
        </div>
    );
};


export default TaskListComponent;
